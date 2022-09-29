import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  subject = new Subject<any>();
  serverUrl: string = environment.serverUrl;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };



  constructor(private http: HttpClient) { }

  getAdsByAccount(accountId: number) {
    return this.http.get(this.serverUrl + `getAdsByAccount.php?account_id=${accountId}`, this.requestOptions);
  };

  filterResult(data: any) {
    this.subject.next(data);
  }
}
