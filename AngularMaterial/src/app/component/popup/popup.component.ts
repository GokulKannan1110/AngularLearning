import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../Model/Customer';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit{
  closeMessage = 'Closed via Directive!';
  inputData: any;
  popupForm!: FormGroup;
  editCustomerCode!: number;
  currentMaxId = 0;
  isEdit = false;
  isDelete = false;

  constructor(private dialogRef: MatDialogRef<PopupComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: MasterService){

  }

  ngOnInit(): void {
    this.inputData = this.data;
    if(this.data != null)
    {
      if(this.data.id > 0)
      {
        if (this.data.isDelete) {
          this.isDelete = this.data.isDelete;
        }
        else{
          this.isEdit = true;
          this.BuildEditForm();   
        }             
      }
      else{
        this.BuildAddUserForm();          
      }
      
    }
    
  }

  BuildEditForm(){
    this.popupForm = this.formBuilder.group({
      name: this.formBuilder.control(this.data.customer.name),
      phone: this.formBuilder.control(this.data.customer.phone),
      email: this.formBuilder.control(this.data.customer.email),
      status: this.formBuilder.control(this.data.customer.status),
      
    })
  }

  BuildAddUserForm(){
    this.popupForm = this.formBuilder.group({
      name: this.formBuilder.control('',Validators.required),
      phone: this.formBuilder.control('',Validators.required),
      email: this.formBuilder.control('',Validators.required),
      status: this.formBuilder.control(false),
      
    })
  }

  ClosePopUp(){
    this.dialogRef.close('Closed via function!')
  }

  SaveUser(){
    console.log(this.data.id);
      if(this.data.id > 0)
      {
        
        var editUser = this.popupForm.value;
          editUser = {id: this.data.id, ...editUser};
          console.log('edit user:', editUser);
          this.service.UpdateCustomer(editUser).subscribe({
            next: (data) => {
              this.ClosePopUp();
            }
          }); 
      }
      else{
        this.service.GetCustomer().subscribe((res) => {
          var customerList = res;
          console.log(customerList);
          this.currentMaxId = Math.max(...customerList.map(user => user.id));
          if(this.currentMaxId > 0)
            {
              var newId = this.currentMaxId+1;
              var newUser = {id:newId, ...this.popupForm.value};
              console.log(newUser);
              this.ClosePopUp();
              this.service.SaveCustomer(newUser).subscribe({
                next: (data) => {
                  this.ClosePopUp()
                }
              });  
            }
            else
            {
              alert('User Creation Failed!');
              this.ClosePopUp();
            }
        });       
                
      }
    
    
  }

  DeleteUser(){
    if(this.isDelete)
      {
        this.service.DeleteCustomer(this.data.id).subscribe({
          next: () =>{
            this.ClosePopUp();
          }
        });
      }
  }
}
