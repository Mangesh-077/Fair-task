import { Injectable } from '@angular/core';
import { Iuser, uRole } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersArray: Array<Iuser> = [
    {
      name: 'Jhon',
      id: 1,
      userRole: 1
    },
    {
      name: 'July',
      id: 2,
      userRole: 0
    },
    {
      name: 'May',
      id: 3,
      userRole: 1
    },
    {
      name: 'James',
      id: 4,
      userRole: 0
    },
  ]
  constructor() { }

  getAllUsers(): Array<Iuser> {
    return this.usersArray
  }

  getUser(id: number): Iuser {
    return this.usersArray.find(e => e.id === id)!
  }

  updateUser(obj: Iuser): void {
    this.usersArray.forEach(e => {
      if (e.id === obj.id) {
        e.name = obj.name
      }
    })
  }
}
