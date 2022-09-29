import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TruckAdService {
  serverUrl: string = 'https://iv-solution.net/cdl-zoom/rest/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getTruckAds(obj: any) {
    let json = JSON.stringify(obj);
    return this.http.post(this.serverUrl + 'getTruckAds.php', json, this.requestOptions);
  };

  getTruckById(id: number) {
    return this.http.get(this.serverUrl + `getTruckAdById.php?id=${id}`, this.requestOptions);
  };

  createTruckAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'createTruckAd.php', json, this.requestOptions);
  };

  updateTruckAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'updateTruckAd.php', json, this.requestOptions);
  };

  deleteTruckAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'deleteTruckAd.php', json, this.requestOptions);
  };

}
