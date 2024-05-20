import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent {

  @Input() userToDelete!: User;

  @Output() OnConfirmDeleteClicked: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  OnButtonClicked(value: Boolean)
  {
    this.OnConfirmDeleteClicked.emit(value);
  }
}
