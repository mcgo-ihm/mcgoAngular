// import { Restaurant } from '../restaurants/restaurant';

enum Statut{
	Done 	= "Fini",
	Pending = "En cours",
	Reclaim = "A récupérer"
}

export class Commandes {
	constructor(
		public id: number, public listePlats: any[], public statut: string, 
		public restaurant: number, public imagePrincipale: string
	){}
}
