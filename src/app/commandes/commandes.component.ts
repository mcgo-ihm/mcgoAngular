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
		this.bindAllCommandes();
		this.restaurantsServ.getRestaurantById(0).subscribe(restau => this.restaurant = restau);
	}

	showPending(){
		this.bindAllCommandes();
		this.commandes = this.commandes.filter(comm => comm.statut === "En attente");
	}

	showDone(){
		this.bindAllCommandes();
		this.commandes = this.commandes.filter(comm => comm.statut === "Terminé");
	}

	showAll(){
		this.bindAllCommandes();
	}

	bindAllCommandes(){
		this.commandesService.getAllCommandes().subscribe(comm => this.commandes = comm);
	}

}
