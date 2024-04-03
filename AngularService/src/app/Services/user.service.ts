import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/user';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {

  constructor(private logger: LoggerService) { }

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  users: User[]  = [
    new User('Gokul Kannan', 'Male', 'Monthly', 'Active'),
    new User('Deepan', 'Male', 'Yearly', 'Inactive'), 
    new User('Aadhi', 'Male', 'Quaterly', 'Active') 
  ];

  OnShowUserDetails(user: User)
  {
    this.OnUserDetailsClicked.emit(user);
  }
  GetAllUsers()
  {
    return this.users;
  }

  CreateUser(name: string,gender: string, subType: string, status: string){
    let user = new User(name,gender, subType, status)
    this.users.push(user);
    this.logger.logMessage(name,status);
  }
}
