import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  errorMsg: any;

  constructor(private authService: AuthService, private router: Router,  private _snackBar: MatSnackBar) {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), 
      Validators.minLength(4), Validators.maxLength(100)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(40)])
    })
  }

  ngOnInit(): void {
  }
  //Register
  register() {
    let registerObj = {
      first_name: this.registerForm.value.firstName,
      last_name: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    console.log(registerObj);
  this.authService.register(registerObj).subscribe((response: any) =>{
    if(response.result) {
      console.log(response)
      this.router.navigate(['/login']);
      this._snackBar.open(response.message + '!', 'Close',{
        duration: 3000
      });
    } else {
      console.log(response);
      this.errorMsg = response.message;
    }
  });;

  }

  get firstName() {
    return this.registerForm.get('firstName')
  };
  get lastName() {
    return this.registerForm.get('lastName')
  };
  get email() {
    return this.registerForm.get('email')
  };
  get password() {
    return this.registerForm.get('password')
  };

}
