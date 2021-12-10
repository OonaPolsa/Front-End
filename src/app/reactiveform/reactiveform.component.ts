import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  profileForm!: FormGroup;


  constructor() {

  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      personId: new FormControl('', [Validators.required, Validators.minLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z ]*$')]),
      password2: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z ]*$')]),
      termAndConditions: new FormControl('', [Validators.requiredTrue]),

    })
  };

  onSubmit() {
    console.log('profileForm.value: ' + this.profileForm.value);
    console.log('profileForm.value: ' + this.profileForm.value.firstName);
    console.log('profileForm.value: ' + this.profileForm.value.lastName);
    console.log('profileForm.value: ' + this.profileForm.value.personId);
    console.log('profileForm.value: ' + this.profileForm.value.email);
    console.log('profileForm.value: ' + this.profileForm.value.userName);
    console.log('profileForm.value: ' + this.profileForm.value.password);
    console.log('profileForm.value: ' + this.profileForm.value.password2);
    console.log('profileForm.value: ' + this.profileForm.value.termAndConditions);
    console.log('profileForm.value: ' + this.profileForm.valid);
    this.profileForm.reset();

    //this.router.navigate(['calculator']);


  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get personId() {
    return this.profileForm.get('personId');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get username() {
    return this.profileForm.get('username');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get password2() {
    return this.profileForm.get('password2')
  }

  get termsAndConditions() {
    return this.profileForm.get('termsAndConditions')
  }
}

