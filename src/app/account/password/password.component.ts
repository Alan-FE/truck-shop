import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';
import { samePassword } from 'src/app/shared/directive/same.password.directive';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  passwordForm: FormGroup;

  constructor(private accountService: AccountService,
              private authService: AuthService,
              private _snackBar: MatSnackBar) {
    this.passwordForm = new FormGroup({
      'oldPassword': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
      'passwordGroup': new FormGroup({
        'password': new FormControl(null, 
          [ Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
        'confirmPassword': new FormControl(null, [Validators.required,Validators.minLength(6), Validators.maxLength(40)])
      }, {validators: samePassword()})
    })
  }


  change() {
    let obj = {
      id: this.authService.userData.id,
      old_password: this.passwordForm.value.oldPassword,
      new_password: this.passwordGroupVal.value.password
    }
    console.log(obj);
    this.accountService.changePassword(obj).subscribe((response: any) => {
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
      } else {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
      }
    })
  };

  get password() {
    return this.passwordForm.get('oldPassword')
  };

  get passwordGroupVal() {
    return this.passwordForm.controls['passwordGroup'];
  }

  get passwordGroup() {
    let group: any = this.passwordForm['controls']; 
    return  group.passwordGroup['controls'];
  };

}
