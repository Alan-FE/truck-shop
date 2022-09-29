import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { InactiveAdsService } from 'src/app/service/inactive-ads.service';

@Component({
  selector: 'app-inactive-ads',
  templateUrl: './inactive-ads.component.html',
  styleUrls: ['./inactive-ads.component.scss']
})
export class InactiveAdsComponent implements OnInit {
  trucksAds: any[] = [];
  trailersAds: any[] = [];
  tiresAds: any[] = [];
  rimsAds: any[] = [];
  partsAds: any[] = [];

  category: any;

  id: any;

  constructor(private authService: AuthService,
              private inactiveAdsService: InactiveAdsService) { }

  ngOnInit(): void {
    let id =  this.authService.userData.id;
    this.inactiveAdsService.getInactiveAds(id).subscribe((response: any) => {
      this.trucksAds = response.result.trucks;
      this.trailersAds = response.result.trailers;
      this.tiresAds = response.result.tires;
      this.rimsAds = response.result.rims;
      this.partsAds = response.result.parts;
      console.log(response)
      console.log(response);
    });
  };

  renewAd(ad: any) {
    let obj ={
      id: ad.id,
      account_id: this.authService.userData.id,
      category: ad.cdl_category
    };
      console.log(obj);
    this.inactiveAdsService.renewAd(obj);
  }
}
