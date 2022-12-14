import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl: string = 'https://iv-solution.net/cdl-zoom/rest/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  register(registerData: any) {
    let json = JSON.stringify(registerData);
      return this.http.post(this.serverUrl + 'createAccount.php', json, this.requestOptions);
  };

  login(loginData: any) {
  let json = JSON.stringify(loginData);
      return this.http.post(this.serverUrl + 'loginAccount.php', json, this.requestOptions);
  };

  get userData() {
    let json: any = localStorage.getItem('user');
    let js = JSON.parse(json);
    return js
  };

  get loggedUser() {
    let json: any = localStorage.getItem('user');
    let js = JSON.parse(json);
    let id = js?.id;
    let logged = id ? true : false;
    return logged
  };
}
