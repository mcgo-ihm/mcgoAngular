import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Commandes } from '../commandes/commandes';
import { CommandesService } from '../commandes/commandes.service';

@Component({
	selector: 'app-commandes-detail',
	templateUrl: './commandes-detail.component.html',
	styleUrls: ['./commandes-detail.component.css']
})
export class CommandesDetailComponent implements OnInit {
	commande: Commandes;

	constructor(
		private commandeService: CommandesService, 
		private route: ActivatedRoute,
  		private location: Location
  	) {}

	ngOnInit() {
		this.getCommand();
	}

	getCommand() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.commandeService.getCommande(id).subscribe(comm => this.commande = comm);
	}

	goBack(): void {
	  this.location.back();
	}

}
