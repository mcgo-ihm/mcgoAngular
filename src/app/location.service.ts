import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
	private watchId: any;

  constructor() { }

  getLocation(): Observable<any> {
  	return Observable.create(observer => {
  		if(window.navigator && window.navigator.geolocation) {
  			window.navigator.geolocation.getCurrentPosition(
  				(position) => {
  					observer.next(position);
  					observer.complete();
  				},
  				(error) => observer.error(error)
  				);
  		} else {
  			observer.error('Unsupported Browser');
  		}
  	});
  }

  watchLocation(): Observable<any>{
  	return Observable.create(observer => {
  		if(window.navigator && window.navigator.geolocation) {
  			this.watchId = window.navigator.geolocation.watchPosition(
  				(position) => {
  					observer.next(position);
  					observer.complete();
  				},
  				(error) => observer.error(error)
  				);
  		} else {
  			observer.error('Unsupported Browser');
  		}
  	});
  }

  clearWatch(){
  	window.navigator.geolocation.clearWatch(this.watchId);
  }


}
