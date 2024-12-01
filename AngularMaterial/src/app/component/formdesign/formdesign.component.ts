import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrl: './formdesign.component.scss'
})
export class FormdesignComponent implements OnInit{
  countriesList: string[] = ['India','USA','UK','Canada','Australia'];
  termList: string[] = ['15days','30days','45days','60days'];
  customerForm!: FormGroup;
  /**
   *
   */
  constructor(private formBuilder: FormBuilder) {
    this.customerForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', Validators.compose([Validators.required,Validators.email])),
      phone: this.formBuilder.control('',Validators.required),
      country: this.formBuilder.control('',Validators.required),
      address: this.formBuilder.control('',Validators.required),
      term: this.formBuilder.control('',Validators.required),
      dob: this.formBuilder.control(new Date()),
      gender: this.formBuilder.control('Male',Validators.required),
      status: this.formBuilder.control(true)      
    });
  }
  ngOnInit(): void {
    this.customerForm.setValue({name:'Gokul Kannan',email:'gokulsmuse@gmail.com',phone:'77678899',
      country:'USA',term:'45days',address:'add1',dob:new Date(2001,2,3),gender:'Male',status:true})

    
  }

  SaveCustomer(){
    console.log(this.customerForm.value);
  }
  
  Clear(){
    this.customerForm.reset({gender:'Male'});
  }

  
}
