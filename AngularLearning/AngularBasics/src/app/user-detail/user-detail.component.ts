import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../Services/userdetail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent{

  constructor(private userDetailService: UserDetailService){

  }

  user: {name: string, job: string, gender: string, country: string, age: number, avatar: string};

  ngOnInit()
  {
    this.userDetailService.OnShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
    this.user = data;
  });
  }
}
