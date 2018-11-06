interface position{
	long: number;
	lat: number;
}

export class Restaurant implements position {
	constructor(
		public id: number, public name: string, public description: string, 
		public address: string, public logoURL: string, public long: number, public lat: number
	){}
}
