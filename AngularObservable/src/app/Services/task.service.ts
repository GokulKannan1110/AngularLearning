import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //CreateTask: EventEmitter<string> = new EventEmitter<string>();

  CreateTask = new Subject<string>();

  OnCreateTaskEvent(value: string)
  {
    this.CreateTask.next(value);
  }
}
