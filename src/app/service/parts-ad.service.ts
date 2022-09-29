import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartsAdService {
  serverUrl: string = environment.serverUrl;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getTireRimAds(obj: any) {
    let json = JSON.stringify(obj);
    return this.http.post(this.serverUrl + 'getTireRimAds.php', obj, this.requestOptions);
  };

  getPartAds(obj: any) {
    return this.http.post(this.serverUrl + 'getPartAds.php', obj, this.requestOptions);
  };

  getTireRimAdById(id: number) {
    return this.http.get(this.serverUrl + `getTireRimAdById.php?id=${id}`, this.requestOptions);
  };

  getPartAdById(id: number) {
    return this.http.get(this.serverUrl + `getPartAdById.php?id=${id}`, this.requestOptions);
  };

  createTireRimAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'createTireRimAd.php', json, this.requestOptions);
  };

  createPartAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'createPartAd.php', json, this.requestOptions);
  };

  updateTireRimAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'updateTireRimAd.php', json, this.requestOptions);
  };

  updatePartAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'updatePartAd.php', json, this.requestOptions);
  };

  deleteTireRimAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'deleteTireRimAd.php', json, this.requestOptions);
  };

  deletePartAd(adData: any) {
    let json = JSON.stringify(adData);
    return this.http.post(this.serverUrl + 'deletePartAd.php', json, this.requestOptions);
  };


}
