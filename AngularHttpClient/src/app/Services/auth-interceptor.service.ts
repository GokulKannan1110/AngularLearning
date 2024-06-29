import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error("Method not implemented.");
        console.log('Auth Interceptor Called!');
        const modifiedReq = req.clone({headers: req.headers.append('auth','abcdef')});
        return next.handle(modifiedReq).pipe(tap((event) => {
            if(event.type === HttpEventType.Response){
                console.log('Response has arrived, Response data: ');
                console.log(event.body);
            }
        }));
    }

}