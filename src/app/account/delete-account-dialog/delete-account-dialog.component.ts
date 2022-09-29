import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';
import { DeleteAccountComponent } from '../delete-account/delete-account.component';

@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.scss']
})
export class DeleteAccountDialogComponent implements OnInit {
  deleteForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DeleteAccountComponent>,
              private authService: AuthService,
              private accountService: AccountService) {
                this.deleteForm = new FormGroup({
                  'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
                })  
              }

  ngOnInit(): void {
  }

  deleteAccount() {
    let obj = {
      id: this.authService.userData.id,
      pasword: this.deleteForm.value.password
    }
    this.accountService.deleteAccount(obj);
  }

}
