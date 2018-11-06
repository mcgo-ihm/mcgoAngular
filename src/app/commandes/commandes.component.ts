import { Component, OnInit } from '@angular/core';

import { Commandes } from './commandes';
import { Restaurant } from '../restaurants/restaurant';

import { CommandesService } from './commandes.service';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
	selector: 'app-commandes',
	templateUrl: './commandes.component.html',
	styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
	commandes: Commandes[];
	restaurant: Restaurant;

	constructor(private commandesService: CommandesService, private restaurantsServ: RestaurantsService) {}

	ngOnInit() {
		// Récupère la liste de commandes
		this.commandesService.getAllCommandes().subscribe(comm => this.commandes = comm);
		this.restaurantsServ.getRestaurantById(0).subscribe(restau => this.restaurant = restau);
	}

	 // getSomeClass(){
  //       const isValid=this.property1 && this.property2;
  //       return {someClass1:isValid , someClass2:isValid};
  //   }
}
