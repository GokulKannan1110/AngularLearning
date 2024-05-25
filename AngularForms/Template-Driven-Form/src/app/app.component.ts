import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Template-Driven-Form';

  @ViewChild('registrationForm') form!: NgForm;
  firstName: string ='';
  lastName: string ='';
  emailAddress: string ='';
  dob: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;
  genders =[
    {id:'check-male', value:'male', display:'Male'},
    {id:'check-female', value:'female', display:'Female'},
    {id:'check-other', value:'other', display:'Prefer not to say'}
  ]
  OnFormSubmitted()
  {
    // console.log(this.form);
    // console.log(this.form.value.firstname);
    // console.log(this.form.touched);
    // console.log(this.form.control.dirty);
    //console.log(this.form.)
    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.emailAddress = this.form.value.email;
    this.dob = this.form.value.dob;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.postal = this.form.value.address.postalcode;
    this.userName = this.form.value.username;
    this.form.reset();

    this.form.form.patchValue({
      gender: 'male',
      address: {
        country: 'India'
      }
    })
  }

  GenerateUsername()
  {
    let username = '';

    if (this.firstName.length>3) {
      username += this.firstName.slice(0,3);
    }
    else{
      username += this.firstName;
    }
    if (this.lastName.length>3) {
      username += this.lastName.slice(0,3);
    }
    else{
      username += this.lastName;
    }

    let datetime = new Date(this.dob)
    username += datetime.getFullYear();

    username.toLowerCase();
    //This is a read only property, so to set the value for the form control we need to use setvalue() method
    // this.form.controls['username'].value = username;
    // console.log(username);
    // this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phonenumber: this.form.value.phonenumber,
    //   dob: this.form.value.dob,
    //   username: username,
    //   gender: this.form.value.gender,
    //   address : {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postalcode:this.form.value.address.postalcode,
    //   }
    // })

    this.form.form.patchValue({
      username: username
    })
  }
}
