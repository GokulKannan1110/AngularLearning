import { Component, inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {

  selectedUser: User;

  ngOnInit()
  {
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
      console.log(this.selectedUser);
    } );
  }
  userService = inject(USER_TOKEN);


  

}
