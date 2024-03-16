import { Component } from '@angular/core';
import { UserDetailService } from './Services/userdetail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserDetailService]
})
export class AppComponent {
  title = 'AngularComponent';

  constructor(private userDetailService: UserDetailService){}
}
