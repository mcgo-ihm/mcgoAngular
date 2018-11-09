import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Commandes } from '../commandes/commandes';
import { Restaurant } from '../restaurants/restaurant';
import { CommandesService } from '../commandes/commandes.service';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
	selector: 'app-commandes-detail',
	templateUrl: './commandes-detail.component.html',
	styleUrls: ['./commandes-detail.component.css']
})
export class CommandesDetailComponent implements OnInit {
	comm: Commandes;
	restaurant: Restaurant;

	constructor(
		private commandeService: CommandesService, 
		private restauService: RestaurantsService,
		private route: ActivatedRoute,
  		private location: Location
  	) {}

	ngOnInit() {
		this.getCommand();
	}

	getRestauInfos(){
		this.restauService.getRestaurantById(this.comm.restaurant).subscribe(rest => this.restaurant = rest);
	}

	getCommand() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.commandeService.getCommande(id).subscribe(comm => this.comm = comm);
		this.getRestauInfos();
	}

	goBack(): void {
	  this.location.back();
	}

}
