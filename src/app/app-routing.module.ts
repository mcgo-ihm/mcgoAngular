import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommandesComponent } from './commandes/commandes.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CommandesDetailComponent } from './commandes-detail/commandes-detail.component';
import { MapRouteToRestaurantComponent } from './map-route-to-restaurant/map-route-to-restaurant.component';

const routes: Routes = [
  {
    path: 'commandes',
    component: CommandesComponent
  },
  {
    path: 'restaurant',
    component: RestaurantsComponent
  },
  {
    path: 'mapRoute/:id',
    component: MapRouteToRestaurantComponent
  },
  {
    path: 'commandes/:id',
    component: CommandesDetailComponent
  },
  {
    path: 'restaurant',
    component: RestaurantsComponent
  },
  {
    path: '',
    redirectTo: '/restaurant',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/commandes',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
