import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];

  ngOnInit(): void {
    this.FetchAllTasks();
  }
  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }
  FetchTasksClick(){
    this.FetchAllTasks();
  }
  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateTask(data: Task)
  {
    // console.log('Emitted Value: ');
    // console.log(data);
    const headers = new HttpHeaders({'my-header': 'Hello World'})
    this.http.post<{name: string}>('https://angularhttpclient-9e62b-default-rtdb.firebaseio.com/task.json', data, {headers:headers}).subscribe({
      next: (response) => {
        console.log(response);
        this.FetchAllTasks();
      }
    })
  }

  private FetchAllTasks()
  {
    this.http.get<{[key: string]: Task }>('https://angularhttpclient-9e62b-default-rtdb.firebaseio.com/task.json'      
    ).pipe(map((response) => {
      //Transforming Data
      let tasks = [];
      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({...response[key], id: key});
        }        
      }
      return tasks;
    }))
    .subscribe({
      next: (tasks) => {
        //console.log(tasks);
        this.allTasks = tasks
      }
    })
  }
}
