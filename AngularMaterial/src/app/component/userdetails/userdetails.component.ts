import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../service/master.service';
import { Customer } from '../../Model/Customer';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.scss'
})
export class UserdetailsComponent implements OnInit{

  inputData : any;
  customerData!: Customer;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private dialogRef: MatDialogRef<UserdetailsComponent>,
   private service: MasterService
  ){

  }

  ngOnInit(): void {
    this.inputData = this.data;
    if (this.inputData != null && this.inputData.id > 0) {
      this.service.GetCustomerById(this.inputData.id).subscribe(res => {
        this.customerData = res;
      })
    }
  }

  ClosePopUp(){
    this.dialogRef.close('Closed via function!')
  }


}
