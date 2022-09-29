import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  accountForm: FormGroup;

  constructor(private authService: AuthService,
              private accountService: AccountService,
              private _snackBar: MatSnackBar) {
    this.accountForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      'lastName': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      'address': new FormControl(null,  [Validators.required, Validators.maxLength(100)]),
      'city': new FormControl(null,  [Validators.required, Validators.maxLength(30)]),
      'country': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      'zipCode': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'phoneNumber': new FormControl(null,  [Validators.required, Validators.maxLength(30)]),
      'phoneNumber2': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      'mobilePhone': new FormControl(null,  [Validators.required, Validators.maxLength(30)]),
      'mobilePhone2': new FormControl(null, [Validators.required, Validators.maxLength(30)]),

    })
  }

  ngOnInit(): void {
    let id: number = this.authService.userData.id;
    this.accountService.getAccountById(id).subscribe((response: any) => {
      let result = response.result[0];
      this.accountForm.setValue({
        'firstName': result.first_name,
        'lastName': result.last_name,
        'address': result.address,
        'city': result.city,
        'country': result.country,
        'zipCode': result.zipcode,
        'phoneNumber': result.phone_1,
        'phoneNumber2': result.phone_2,
        'mobilePhone': result.mobile_1,
        'mobilePhone2': result.mobile_2,
      })
      console.log(response);
    });
  }

  update() {
    let accountObj = {
      id: this.authService.userData.id,
      first_name: this.accountForm.value.firstName,
      last_name: this.accountForm.value.lastName,
      address: this.accountForm.value.address,
      city: this.accountForm.value.city,
      country: this.accountForm.value.country,
      zipcode: this.accountForm.value.zipCode,
      phone_1: this.accountForm.value.phoneNumber,
      phone_2: this.accountForm.value.phoneNumber2,
      mobile_1: this.accountForm.value.mobilePhone,
      mobile_2: this.accountForm.value.mobilePhone2
    }
    this.accountService.updateAccount(accountObj).subscribe((response: any) => {
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
      } else {
        this._snackBar.open('Failed to update account!', 'Close',{
          duration: 3000
        });
      }
     
    });
  }

}
