import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';

import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

	RESTAURANTS: Restaurant[] = [
		{ 	
      id: 0, name: 'McGo', description: 'Chaîne de restauration artisanale, rapide et familliale', address: '43 Boulevard Edouard Baudoin, 06160 Antibes',
      logoURL: '/src/assets/light.jpg', long: 7.115890, lat: 43.563550
    }
	];

  constructor() { }

  getAllRestaurants(): Observable<Restaurant[]> {
  	return of(this.RESTAURANTS);
  }

  getRestaurantById(id: number): Observable<Restaurant> {
  	return of(this.RESTAURANTS.find(restau => restau.id === id));
  }
}
