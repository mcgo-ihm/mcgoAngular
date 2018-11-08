import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

import { RestaurantsService } from './restaurants.service';


@Component({
	selector: 'app-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
	isMobile: boolean = undefined;
	plats: Plat[];

	constructor(private restau: RestaurantsService, private device: DeviceDetectorService) { }

	ngOnInit() {
		this.isMobile = this.device.isMobile();
		this.restau.getMenu().subscribe(data => this.plats = data);
	}

}
