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

  constructor(private dialogRef: MatDialogRef<PopupComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: MasterService){

  }

  ngOnInit(): void {
    this.inputData = this.data;
    if(this.data != null)
    {
      switch (this.data.type) {
        case 'Edit':
          this.editCustomerCode = this.data.customer.code;    
          this.BuildEditForm();
          break;
        case 'Add':
          this.BuildAddUserForm();
          break
        default:
          this.ClosePopUp();
          break;
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
    switch (this.data.type) {
      case 'Edit':
        var editUser = this.popupForm.value;
        editUser = {code: this.editCustomerCode, ...editUser};
        console.log(editUser);
        this.ClosePopUp();
        break;
      case 'Add':
        this.service.SaveCustomer(this.popupForm.value).subscribe({
          next: (data) => {
            this.ClosePopUp()
          }
        });
        break
      default:
        this.ClosePopUp();
        break;
    }
    
  }
}
