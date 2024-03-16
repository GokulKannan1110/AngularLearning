import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggerService{
    LogMessage(newUser: string, status: string )
    {
        console.log("A new user " + newUser + " has been added with the status " + status);
    }
}