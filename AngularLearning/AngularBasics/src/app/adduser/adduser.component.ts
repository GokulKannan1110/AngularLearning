import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css',
  //providers: [UserService]
})
export class AdduserComponent implements OnInit{
  username: string = '';
  status: string = '';
  @ViewChild("userinput") userInput : ElementRef;
  constructor(private userService: UserService){

  }

  ngOnInit(){

  }

  AddNewUser()
  {
    //console.log(this.username);
    this.userService.AddNewUser(this.username, this.status)
    this.userInput.nativeElement.value = '';
  }

}
