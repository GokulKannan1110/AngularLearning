import { Component, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent {

  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  taskService = inject(TaskService);

  ngOnInit()
  {
    this.taskService.CreateTask.subscribe((value) => {
      this.tasks.push(value);
    })
  }
}
