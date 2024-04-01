import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logMessage(name:string, status: string)
  {
    console.log(`A new user named ${name} with status ${status} is added to user list`);
  }
}
