import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	USERS: Users[] = [
	    {id: 0, username: 'rico', level: 0, email: 'dzag@gfds.com' , password: ''},
	];

  constructor() { }

  getAllUsers(): Observable<Users[]> {
  	return of(this.USERS);
  }
}
