import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distanceFormat'
})
export class DistanceFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	let distanceType = (value < 1) ? 'm' : 'km';
  	let distance = (value < 1) ? value*1000 : value;
    return `${distance} ${distanceType}`;
  }

}
