import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

import { marker } from './marker';

@Injectable({
	providedIn: 'root'
})

export class MarkersService {

	private url = 'assets/steps.json';

	MARKERS: marker[] = [
		
	];

	constructor(private http: HttpClient) { }

	getRoutes(): Observable<any>{
		return this.http.get(this.url);
	}

	getRoutesFromGoogle(origin:string, destination: string, mode?: string): Observable<any> {
		let or = encodeURI(origin); let dest = encodeURI(destination);
		let mo = mode;
		if (mo === undefined || mo === null) {
			mo = "driving";
		}
		let gUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${or}&destination=${dest}&mode=${mode}&key=AIzaSyCv8Bpz2wUBHrl8ed75wyggnTVrregKx14`;
		return this.http.get(gUrl);
	}

	getRoutesFromGoogleWithPositions(origin:string, destination: string, mode?: string): Observable<any> {
		let mo = mode;
		if (mo === undefined || mo === null) {
			mo = "driving";
		}
		let gUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${mode}&key=AIzaSyCv8Bpz2wUBHrl8ed75wyggnTVrregKx14`;
		return this.http.get(gUrl);
	}

	getAllMarkers(): Observable<marker[]>{
		return of(this.MARKERS);
	}
}