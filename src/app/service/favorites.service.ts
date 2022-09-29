import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  serverUrl: string = 'https://iv-solution.net/cdl-zoom/rest/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getFavorites(id: number) {
    return this.http.get(this.serverUrl + `getFavorites.php?account_id=${id}`, this.requestOptions);
  }

  addToFavorites(adData: any) {
    let json = JSON.stringify(adData);
    this.http.post(this.serverUrl + 'addToFavorites.php', json, this.requestOptions).subscribe((response: any) => {
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
    });
  };

  deleteFromFavorites(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'deleteFromFavorites.php', json, this.requestOptions);
  }
}
