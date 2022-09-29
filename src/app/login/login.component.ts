import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  errorMsg: any;

  constructor(private authService: AuthService,
              private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }
  //Login
  login() {
    let loginObj = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.authService.login(loginObj).subscribe((response: any) =>{

        if(response.result) {
          let obj: any = {
            id: response.id,
            first_name: response.first_name,
            last_name: response.last_name
          }
          localStorage.setItem('user', JSON.stringify(obj));
          this.router.navigate(['/account/settings'])
          console.log(response);
        } else {
          this.errorMsg = response.message;
          console.log(response);
        }

    });
  }

  get email() {
    return this.loginForm.get('email')
  };

  get password() {
    return this.loginForm.get('password')
  };

}
