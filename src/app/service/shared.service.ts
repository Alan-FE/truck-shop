import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  subject = new Subject<any>();
  serverUrl: string = 'https://iv-solution.net/cdl-zoom/rest/';
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
