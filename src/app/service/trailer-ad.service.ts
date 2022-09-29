import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrailerAdService {
  serverUrl: string = 'https://iv-solution.net/cdl-zoom/rest/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };


  constructor(private http: HttpClient) { }

  getTrailerAds(obj: any) {
    let json = JSON.stringify(obj);
    return this.http.post(this.serverUrl + 'getTrailerAds.php', json, this.requestOptions);
  }

  getTrailerById(id: number) {
    return this.http.get(this.serverUrl + `getTrailerAdById.php?id=${id}`, this.requestOptions);
  };

  createTrailerAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'createTrailerAd.php', json, this.requestOptions);
  };

  updateTrailerAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'updateTrailerAd.php', json, this.requestOptions);
  };

  deleteTrailerAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'deleteTrailerAd.php', json, this.requestOptions);
  };

}
