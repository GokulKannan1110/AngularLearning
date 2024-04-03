import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {

  constructor(@Inject(USER_TOKEN) private userService: UserService){

  }

  users: User[] = this.userService.GetAllUsers();

  ShowUserDetails(user: User)
  {
    this.userService.OnShowUserDetails(user);
  }
}
