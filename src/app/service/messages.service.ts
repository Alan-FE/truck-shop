import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  serverUrl: string = 'https://iv-solution.net/cdl-zoom/rest/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  sendMessage(messageData: any) {
    let json = JSON.stringify(messageData);
    return this.http.post(this.serverUrl + 'sendMessage.php', json, this.requestOptions);
  };

  getMessageList(obj: any) {
    return this.http.post(this.serverUrl + 'getMessageList.php', obj, this.requestOptions);
  };
}
