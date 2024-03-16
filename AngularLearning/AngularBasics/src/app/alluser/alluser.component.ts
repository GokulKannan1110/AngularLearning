import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UserDetailService } from '../Services/userdetail.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrl: './alluser.component.css'
})
export class AlluserComponent implements OnInit{

  users: {name: string, job: string, gender: string, country: string, age: number, avatar: string}[] = [];

  constructor(private userDetailService: UserDetailService){

  }

  ngOnInit()
  {
    this.users = this.userDetailService.users;
  }

  ShowDetail(user : {name: string, job: string, gender: string, country: string, age: number, avatar: string})
  {
    this.userDetailService.ShowUserDetails(user);
  }
}
