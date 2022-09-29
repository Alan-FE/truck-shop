import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  serverUrl: string = environment.serverUrl;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) { }

  getAccountById(id: number) {
    return this.http.get(this.serverUrl + `getAccountById.php?id=${id}`, this.requestOptions);
  };

  updateAccount(accountData: any) {
    let json = JSON.stringify(accountData);
    console.log(accountData);
    return this.http.post(this.serverUrl+ 'updateAccount.php', json, this.requestOptions);
  };

  changePassword(data: any) {
    let json = JSON.stringify(data);
      return this.http.post(this.serverUrl + 'changeAccountPassword.php', json, this.requestOptions);
  };

  deleteAccount(userData: any) {
    let json = JSON.stringify(userData);
    this.http.post(this.serverUrl + 'deleteAccount.php', json, this.requestOptions).subscribe((response: any) => {
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
        this.router.navigate(['/'])
      } else {
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
      }
    });
  };

}
