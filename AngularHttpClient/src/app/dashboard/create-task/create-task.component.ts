import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  FormSubmitted(form: NgForm)
  {
    console.log(form);
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }
}
