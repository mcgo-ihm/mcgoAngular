import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Library google maps
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'

import { DeviceDetectorModule } from 'ngx-device-detector'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandesDetailComponent } from './commandes-detail/commandes-detail.component';
import { MapRouteToRestaurantComponent } from './map-route-to-restaurant/map-route-to-restaurant.component';

import { DistanceFormatPipe } from './distance-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    RestaurantsComponent,
    CommandesDetailComponent,
    MapRouteToRestaurantComponent,
    DistanceFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCv8Bpz2wUBHrl8ed75wyggnTVrregKx14'
    }),
    AgmDirectionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
