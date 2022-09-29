import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { TruckAdService } from '../service/truck-ad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription1: any;
  subscription2: any;

  clickedFilter: string = 'trucksUpTo7';
  trucksToSeven: string = 'Trucks to 7 tons';
  trucksOverSeven: string = 'Trucks over 7 tons';
  trucksAds: any[] = [];
  trailersAds: any[] = [];
  tiresAds: any[] = [];
  rimsAds: any[] = [];
  partsAds: any[] = [];

  constructor(private truckAdService: TruckAdService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getTruckAds();
    this.filterResult();
  }

  getTruckAds() {
   this.subscription1 = this.truckAdService.getTruckAds({}).subscribe((response: any) => {
      this.trucksAds = response.result;
    });
  };

  filterResult() {
   this.subscription2 = this.sharedService.subject.subscribe((response: any) => {
    console.log(response);
    if(response.length == 0) {
      this.trucksAds = [];
      this.trailersAds = [];
      this.tiresAds = [];
      this.rimsAds = [];
      this.partsAds = [];
    } else {

      if(response[0].category == 'Under7' || response[0]?.category == 'Over7' ) {
        this.trucksAds = [];
        this.trailersAds = [];
        this.tiresAds = [];
        this.rimsAds = [];
        this.partsAds = [];
        this.trucksAds = response;
      };
      
      if(response[0].cdl_category == 'trailers' ) {
        this.trucksAds = [];
        this.trailersAds = [];
        this.tiresAds = [];
        this.rimsAds = [];
        this.partsAds = [];
        this.trailersAds = response;
      };

      if(response[0].cdl_category == 'tires' ) {
        this.trucksAds = [];
        this.trailersAds = [];
        this.tiresAds = [];
        this.rimsAds = [];
        this.partsAds = [];
        this.tiresAds = response;
      };

      if(response[0].cdl_category == 'rims' ) {
        this.trucksAds = [];
        this.trailersAds = [];
        this.tiresAds = [];
        this.rimsAds = [];
        this.partsAds = [];
        this.rimsAds = response;
      };

      if(response[0].cdl_category == 'parts' ) {
        this.trucksAds = [];
        this.trailersAds = [];
        this.tiresAds = [];
        this.rimsAds = [];
        this.partsAds = [];
        this.partsAds = response;
      };

    }

    });
  };

  chooseFilter(value: string) {
    this.clickedFilter = value;
    console.log(value);
  };

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
