import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Reactive-Form';
  formStatus: string = '';
  formData: any = {};
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null,Validators.required, CustomValidators.checkUserName),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        country: new FormControl('India'),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required)        
      ]),
      experience: new FormArray([
        
      ])
    });

    // this.reactiveForm.get('firstname').valueChanges.subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    // });

    // this.reactiveForm.get('address').valueChanges.subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    // });

    this.reactiveForm.statusChanges.subscribe({
      next(status) {
        console.log(status);
        this.formStatus = status;

      },
    });
  }

  OnFormSubmitted(){
    console.log(this.formData);
    this.formData = this.reactiveForm.value;
    this.reactiveForm.reset();
  }

  OnAddSkill(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null));
  }

  DeleteSkill(index: number)
  {
    const controls = (<FormArray>this.reactiveForm.get('skills'));
    controls.removeAt(index);
  }

  AddExperience()
  {
    const formGroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      startdate: new FormControl(null),
      enddate: new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }

  DeleteExperience(index: number){
    const formArray = <FormArray>this.reactiveForm.get('experience');
    formArray.removeAt(index);
  }

  GenerateUsername(){
    let username = '';
    const fName: string = this.reactiveForm.get('firstname').value;
    const lName: string = this.reactiveForm.get('lastname').value;
    const dob: string = this.reactiveForm.get('dob').value;

    if(fName.length >= 3)
    {
      username += fName.slice(0, 3);
    }
    else{
      username += fName;
    }

    if(lName.length >= 3)
    {
      username += lName.slice(0, 3);
    }
    else{
      username += lName;
    }
    
    let dateTime = new Date(dob);
    username += dateTime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

  //   this.reactiveForm.setValue({
  //     firstname: this.reactiveForm.get('firstname').value,
  //     lastname: this.reactiveForm.get('lastname').value,
  //     email: this.reactiveForm.get('email').value,
  //     username: username,
  //     dob: this.reactiveForm.get('dob').value,
  //     gender: '',
  //     address: {
  //       street: '',
  //       city: '',
  //       country: '',
  //       region: '',
  //       postal: '',
  //     },
  //     skills: [''],
  //     experience: ['']
  //   })
  // }
  this.reactiveForm.get('username').setValue(username);
  }
}
