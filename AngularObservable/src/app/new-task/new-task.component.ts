import { Component, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  newTask: string;

  taskService = inject(TaskService);

  OnCreateTask()
  {
    this.taskService.OnCreateTaskEvent(this.newTask);
  }
}
