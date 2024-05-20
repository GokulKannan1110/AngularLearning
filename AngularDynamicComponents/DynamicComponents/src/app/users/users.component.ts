import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';
import { ViewContainerDirective } from '../directives/view-container.directive';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  showConfirmDeleteComp: Boolean = false;
  userToDelete!: User;
  @ViewChild(ViewContainerDirective)  containerRef!: ViewContainerDirective
  onConfirmationObservable;
  /**
   *
   */
  constructor(private userService: UserService, private componentFactoyResolver: ComponentFactoryResolver) {
   
    
  }
  ngOnInit()
  {
    this.users = this.userService.users;
  }

  OnDeleteClicked(user: User)
  {
    // this.showConfirmDeleteComp = true;
    this.userToDelete = user;    
    this.ShowConfirmDelete(this.userToDelete);
  }

  OnClicked(value: Boolean){
    if(value)
    {
      this.showConfirmDeleteComp = false;
      const index = this.users.indexOf(this.userToDelete);
      this.users.splice(index, 1);
    }
  }
  ShowConfirmDelete(user: User){
  //1.To create instance of the confirm-delete component
   const componentRef = this.containerRef.viewContainer.createComponent(ConfirmDeleteComponent);
    componentRef.instance.userToDelete = user;
    this.onConfirmationObservable = componentRef.instance.OnConfirmDeleteClicked.subscribe((data) => {
      this.onConfirmationObservable.unsubscribe();
      this.containerRef.viewContainer.clear();
      if(data)
        {
          this.showConfirmDeleteComp = false;
          const index = this.users.indexOf(this.userToDelete);
          this.users.splice(index, 1);
        }
    })
  }
}

