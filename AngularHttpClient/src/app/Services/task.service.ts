import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Model/Task";
import { catchError, map, Observable, Subject, Subscription, tap, throwError } from "rxjs";
import { LoggingService } from "./Logging.service";
import { ErrorLog } from "../Model/ErrorLog";

@Injectable({
    providedIn: "root"
})
export class TaskService {

    http: HttpClient = inject(HttpClient);
    loggingService: LoggingService = inject(LoggingService);

    allTasks: Task[] = [];
    errorSubject: Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>();
    
    CreateTask(task: Task){
        const headers = new HttpHeaders({ 'my-header': 'Hello World' })
        this.http.post<{ name: string }>('https://angularhttpclientssss-9e62b-default-rtdb.firebaseio.com/task.json',
            task, { headers: headers }).subscribe({error: (err) => {
                this.errorSubject.next(err);
            }});
    }

    UpdateTask(id: string | undefined, data: Task ): Observable<any>{
       return this.http.put('https://angularhttpclient-9e62b-default-rtdb.firebaseio.com/task/' + id+'.json', data)
        
    }

    DeleteTask(id: string | undefined) {
        this.http.delete("https://angularhttpclient-9e62b-default-rtdb.firebaseio.com/task/" + id + '.json',{observe: 'events'})
            .pipe(tap((event) => {
                console.log(event);
                if(event.type === HttpEventType.Response){

                }
            }))
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.FetchAllTasks();
                }
            })
    }

    DeleteAllTasks() {
        this.http.delete('https://angularhttpclient-9e62b-default-rtdb.firebaseio.com/task.json')
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.FetchAllTasks();
                }
            })
    }

    FetchAllTasks(): Observable<Task[]> {
        let headers = new HttpHeaders();
        headers = headers.set('content-type','application/json');
        headers = headers.append('content-type','text/xml');

        let queryParams = new HttpParams();
        queryParams = queryParams.set('page',2);
        queryParams = queryParams.set('items', 10);

        return this.http.get<{ [key: string]: Task }>('https://angularhttpclient-9e62b-default-rtdb.firebaseio.com/task.json',
            {headers: headers, params: queryParams}).pipe(map((response) => {
            console.log(response);
            //Transforming Data
            let tasks = [];
            for (let key in response) {
                if (response.hasOwnProperty(key)) {
                    tasks.push({ ...response[key], id: key });
                }
            }
            return tasks;
        }), catchError((err: HttpErrorResponse) => {
            //Logging the error to DB
            const errorLog = new ErrorLog(err.status, err.message, new Date())
            this.loggingService.logError(errorLog);
            return throwError(() => err);
        }))
    }

    FetchSpecificTask(id: string | undefined){
       return this.http.get('https://angularhttpclient-9e62b-default-rtdb.firebaseio.com/task/' +id+'.json')
       .pipe(map((response) => {
        let task = {};
        task = {...response, id: id};

        return task;
       }));       
    }
}