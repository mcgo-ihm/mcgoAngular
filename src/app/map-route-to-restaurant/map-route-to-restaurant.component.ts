import { Component, OnInit, HostListener, Inject, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location, DOCUMENT } from '@angular/common';

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
	firstLoad: boolean = true;
	public dir = undefined;
	restaurant: Restaurant;
	distance: number = 15.832;
	zoom: number = 12;
	userPosition: any = undefined;
	// locationsSubscription = locations.subscribe(myObs);

	public renderOptions = {
		suppressMarkers: true,
	}
	public markerOptions = {
	    origin: {
	        icon: 'https://i.imgur.com/7teZKif.png',
	        infoWindow: `
	        <h4>Votre porsition<h4>
	        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>`
	    },
	    destination: {
	        icon: 'https://i.imgur.com/7teZKif.png',
	        infoWindow: `
	        <h4>McGo<h4>
	        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>`
	    },
	};

	steps = [];

	lat: number = 43.646905;
	lng: number = 7.201743;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private restService: RestaurantsService,
		private routesService: MarkersService,
		private locationService: LocationService,
		@Inject(DOCUMENT) document
		) { }

	ngOnInit() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.getDirection()
		this.restService.getRestaurantById(id).subscribe(resto => this.restaurant = resto);
		this.routesService.getRoutes().subscribe(data => {
			this.steps = data.step
		});

		document.getElementById('map').style.height = (window.screen.height - 260) + "px";

		// 5 seconds
		setInterval(() => { this.getUserPosition() }, 5000);
	}

	goBack(): void {
		this.location.back();
	}

	getUserPosition(){
		this.locationService.getLocation().subscribe(position => {
			this.userPosition = position.coords;
			this.dir = {
		        origin: { lat: this.userPosition.latitude, lng: this.userPosition.longitude },
				destination: { lat: this.restaurant.lat, lng: this.restaurant.long }
		    }
		});
	}

	onResize(event){
		document.getElementById('map').style.height = (event.target.innerHeight - 80) + "px";
	}

	getDirection() {
		this.dir = {
			destination: { lat: 43.700936, lng: 7.268391 },
			origin: { lat: 43.583599, lng: 7.10905 }
		}
	}

	public getDirection_O(position){
		this.dir = {
	        origin: { lat: 43.700936, lng: 7.268391 },
	        destination: { lat: 43.53599, lng: 7.10905 }
	    }
	}

}
