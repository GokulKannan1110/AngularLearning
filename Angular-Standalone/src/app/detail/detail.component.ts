import { Component, inject } from '@angular/core';
import { ActionService } from '../shared/action.service';
import { SharedModule } from '../shared/shared/shared.module';
import { HighlightDirective } from '../shared/highlight.directive';

@Component({
  standalone: true,
  imports:[HighlightDirective],
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  action: string = "Done";
  actionService : ActionService = inject(ActionService);
  OnClick()
  {
    this.action = this.actionService.changeAction();
  }
}
