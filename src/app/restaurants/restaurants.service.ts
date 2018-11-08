import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';

import { Restaurant } from './restaurant';
import { Plat } from './plat';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

	RESTAURANTS: Restaurant[] = [
		{ 	
      id: 0, name: 'McGo', description: 'Chaîne de restauration artisanale, rapide et familliale', address: '43 Boulevard Edouard Baudoin, 06160 Antibes',
      logoURL: 'assets/light.jpg', long: 7.115890, lat: 43.563550
    }
	];

  PLATS: Plat[] = [
    {
      nom: 'Panini chèvre bacon',
      description: 'Bacon, Rosette, Tomate, Fromage de chèvre',
      source: 'panini',
      prix: '7,60'
    }, 
    {
      nom: 'Pizza Cannibale',
      description: 'Sauce Tomate, Fromage, Olives, Viande Hachee, Champignons',
      source: 'pizza',
      prix: '8,90'
    }, 
    {
      nom: 'Salade Grecque',
      description: 'Fond de Salade, Tomates Cerise, Cubes de Féta, Copeaux de Parmesan',
      source: 'salade',
      prix: '7,40'
    }, 
    {
      nom: 'Créme Caramel',
      description: 'Créme Caramel Faite Maison',
      source: 'caramel',
      prix: '3,20'
    }
  ];

  constructor() { }

  getAllRestaurants(): Observable<Restaurant[]> {
  	return of(this.RESTAURANTS);
  }

  getRestaurantById(id: number): Observable<Restaurant> {
  	return of(this.RESTAURANTS.find(restau => restau.id === id));
  }

  getMenu(): Observable<Plat[]>{
    return of(this.PLATS);
  }
}
