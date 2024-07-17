import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../Model/AuthResponse";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { User } from "../Model/User";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    httpClient: HttpClient = inject(HttpClient);
    userSub = new BehaviorSubject<User | null>(null);

    
    signup(email: string, password: string){
        //console.log(email);
        //console.log(password);
        const data = {email: email, password: password, returnSecureToken: true};
        return this.httpClient
        .post<AuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXPdxAG93BCI-_NhUQSv52NsgqhzfpezA'
            , data
        ).pipe(
            catchError(this.handleError),
            //tap(this.handleCreateUser)------//The issue you're encountering is due to the context of this being lost when handleCreateUser is used as a callback within the tap operator. In JavaScript, when a method is passed as a callback, it loses its context (this), leading to this.userSub being undefined.
            tap((res) => {
                this.handleCreateUser(res);
            })
        );
    }

    signin(email: string, password: string)
    {
        const data = {email: email, password: password, returnSecureToken: true};        
        return this.httpClient.post<AuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXPdxAG93BCI-_NhUQSv52NsgqhzfpezA',
             data
            ).pipe(
                catchError(this.handleError),
                //tap(this.handleCreateUser)------//The issue you're encountering is due to the 
                //context of this being lost when handleCreateUser is used as a callback within the tap operator. In JavaScript, when a method is passed as a callback, it loses its context (this), leading to this.userSub being undefined.
                tap((res) => {
                    this.handleCreateUser(res);
                })           
            );
    }

    private handleCreateUser(res: any){
        const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
        const expiresIn = new Date(expiresInTs);
        const user =  new User(res.email, res.localId, res.idToken, expiresIn);
        console.log(user);
        this.userSub.next(user);
        console.log('test');
    }

    private handleError(err: any){
        console.log(err);
        let errorMessage = "An Unknown Error has Occured";
        if(!err.error || !err.error.error)
        {
            return throwError(() => errorMessage);
        }
        else
        {
            switch (err.error.error.message){
                case 'INVALID_LOGIN_CREDENTIALS':
                    errorMessage = "Invalid Email or Password.";
                    break                
                case 'USER_DISABLED':
                    errorMessage = "User is Disabled.";
                    break;
                case 'EMAIL_EXISTS':
                    errorMessage = "The email address already exists.";
                    break
                case 'OPERATION_NOT_ALLOWED':
                    errorMessage = "This operation is not allowed.";
                    break;
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    errorMessage = "Too Many Attempts. Please Try Again Later.";
            }
            return throwError(() => errorMessage);
        }
    }
}