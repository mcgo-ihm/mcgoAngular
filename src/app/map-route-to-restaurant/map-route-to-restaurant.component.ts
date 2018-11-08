import { Component, OnInit, HostListener, Inject, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location, DOCUMENT } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

import { marker } from './marker';
import { Restaurant } from '../restaurants/restaurant';

import { MarkersService } from './markers.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { LocationService } from '../location.service';


@Component({
	selector: 'app-map-route-to-restaurant',
	templateUrl: './map-route-to-restaurant.component.html',
	styleUrls: ['./map-route-to-restaurant.component.css'],
	host: {
		'(window:resize)': 'onResize($event)'
	}
})


export class MapRouteToRestaurantComponent implements OnInit {
	public dir = undefined;
	restaurant: Restaurant;
	distance: number = 15.832;
	zoom: number = 12;
	userPosition: any = undefined;
	restauPosition: any = undefined;
	isDesktop: boolean;

	public renderOptions = { suppressMarkers: true, }
	public markerOptions = {
	    origin: {
	        icon: 'https://i.imgur.com/7teZKif.png',
	        infoWindow: `<h4>Votre porsition<h4>`
	    },
	    destination: {
	        icon: 'https://i.imgur.com/7teZKif.png',
	        infoWindow: `<h4>McGo<h4>`
	    },
	};

	steps = [];

	lat: number = 43.563550;
	lng: number = 7.115890;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private restService: RestaurantsService,
		private routesService: MarkersService,
		private locationService: LocationService,
		private deviceService: DeviceDetectorService,
		@Inject(DOCUMENT) document
		) { }

	ngOnInit() {
		// Obtenir l'id de navigation de l'URL
		const id = +this.route.snapshot.paramMap.get('id');
		this.initDeviceInfos()

		// Récupère les informations du restaurant associé à la commande
		this.restService.getRestaurantById(id).subscribe(resto => this.restaurant = resto);
		// Redimensionne la carte en fonction de la taille d'ecran 
		document.getElementById('map').style.height = (window.screen.height - 260) + "px";

		// Initialisation pour mobile & tablette
		if (this.isDesktop === false) {
			// Mise à jour de la position toutes les 5 secondes
			this.getUserPosition();
			// 5 secondes
			setInterval(() => { this.getUserPosition() }, 5000);
		} else {
			this.showRestaurant();
		}
	}

	goBack(): void {
		this.location.back();
	}

	getUserPosition(){
		this.locationService.getLocation().subscribe(position => {
			if (position !== undefined) {
				this.userPosition = position.coords;	
			}
			
			if (this.userPosition !== position){
				this.dir = {
			        origin: { lat: this.userPosition.latitude, lng: this.userPosition.longitude },
					destination: { lat: this.restaurant.lat, lng: this.restaurant.long }
			    }
			}
		});
	}

	onResize(event){
		document.getElementById('map').style.height = (event.target.innerHeight - 80) + "px";
	}

	getDirection() {
		this.dir = {
			destination: { lat: this.restaurant.lat, lng: this.restaurant.long },
			origin: { lat: 43.583599, lng: 7.10905 }
		}
	}

	showRestaurant() {
		this.dir = {
			destination: { lat: this.restaurant.lat, lng: this.restaurant.long },
			origin: { lat: 43.583599, lng: 7.10905 }
		}
		// this.restauPosition = { lat: this.restaurant.lat, lng: this.restaurant.long }
	}

	initDeviceInfos(){
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      this.isDesktop = this.deviceService.isDesktop();
	}
}
