// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private loggerservice: LoggerService){

  }
  users = [
    {name: 'John', status: 'active'},
    {name: 'Mark', status: 'inactive'},
    {name: 'Steve', status: 'active'}
]

AddNewUser(name: string, status: string)
{
  this.users.push({name: name, status: status});
  this.loggerservice.LogMessage(name, status);
}

}
