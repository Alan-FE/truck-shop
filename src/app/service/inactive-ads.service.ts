import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class InactiveAdsService {
  serverUrl: string = 'https://iv-solution.net/cdl-zoom/rest/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }


  getInactiveAds(accountId: number) {
    return this.http.get(this.serverUrl + `getInactiveAdsByAccount.php?account_id=${accountId}`, this.requestOptions);
  };

  renewAd(adData: any) {
    let json = JSON.stringify(adData);
    this.http.post(this.serverUrl + 'renewAd.php', json, this.requestOptions).subscribe((response: any) => {
      console.log(response);
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
      } else {
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
      }
    })
  }
 
}
