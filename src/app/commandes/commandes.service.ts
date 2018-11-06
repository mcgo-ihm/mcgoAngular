import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Commandes } from './commandes';

@Injectable({
	providedIn: 'root'
})

export class CommandesService {

	COMMANDES: Commandes[] = [
		{	id: 666, 
			listePlats: [ "Panini Chèvre Bacon", "Coca-cola Zéro 50cl" ], 
			statut: "En attente" , 
			restaurant: 0,
			imagePrincipale: '/src/assets/panini-chevre_bacon.jpg'
		},
		{	id: 999, 
			listePlats: [ "Pizza Cannibale 32cm", "Coca-cola Zéro 50cl" ], 
			statut: "Terminé" , 
			restaurant: 0,
			imagePrincipale: '/src/assets/pizza-cannibale.jpg'
		},
	];

	constructor() { }

	getAllCommandes(): Observable<Commandes[]>{
		return of(this.COMMANDES);
	}

	getCommande(id: number): Observable<Commandes> {
		return of(this.COMMANDES.find(comm => comm.id === id));
	}
}
