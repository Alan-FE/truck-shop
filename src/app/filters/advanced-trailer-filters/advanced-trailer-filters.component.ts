import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TrailerAdService } from 'src/app/service/trailer-ad.service';
import { FiltersDataService } from '../service/filters-data.service';

@Component({
  selector: 'app-advanced-trailer-filters',
  templateUrl: './advanced-trailer-filters.component.html',
  styleUrls: ['./advanced-trailer-filters.component.scss']
})
export class AdvancedTrailerFiltersComponent {
  advancedTrailersForm: FormGroup | any;
  newOrUsedTrailers: string[] = this.data.newOrUsedTrailers;
  years: number[] = this.data.years;
  trailersBrand: string[] = this.data.trailersBrand;
  maxLoadCapacityTrailers: string[] = this.data.maxLoadCapacityTrailers;
  trailerType: string[] = this.data.trailersType;
  regions: string[] = this.data.regions;
  adsPosted: string[] = this.data.adsPosted;
  noOfAxlesTrailers: string[] = this.data.noOfAxlesTrailers;
  suspensions: string[] = this.data.suspensions;
  colors: string[]= this.data.colors;
  registeredUntil: string[] = this.data.registeredUntil;
  damaged: string[] = this.data.damaged;

  none: any = 'none';
  show: boolean = true;

  cards: any[] = [];

  constructor(private data: FiltersDataService, private trailersAdSerivce: TrailerAdService ) {
    this.advancedTrailersForm = new FormGroup({
      'brand': new FormControl(null),
      'model': new FormControl(null),
      'priceFrom': new FormControl(null),
      'priceTo': new FormControl(null),
      'fromYear': new FormControl(null),
      'toYear': new FormControl(null),
      'maxCapacityLoad': new FormControl(null),
      'toCapacityLoad': new FormControl(null),
      'type': new FormControl(null),
      'region': new FormControl(null),
      'credit': new FormControl(null),
      'leasing': new FormControl(null),

      'adsWithPhoto': new FormControl(null),
      'adsWithoutPrice': new FormControl(null),
      'testDrive': new FormControl(null),
      'exchange': new FormControl(null),
      'adsOfAllAdvertises': new FormControl(null),
      'postedFrom': new FormControl(null),
      'weightFrom': new FormControl(null),
      'weightTo': new FormControl(null),
      'country': new FormControl(null),
      'newAndUsed': new FormControl(null),
      'numberOfAxles': new FormControl(null),
      'suspension': new FormControl(null),

      'city': new FormControl(null),
      'distanceKm': new FormControl(null),
      'color': new FormControl(null),
      'registeredUntil': new FormControl(null),
      'damage': new FormControl(null),
      'originOfTheVehicle': new FormControl(null),
      'firstOwner': new FormControl(null),
      'purchasedNew': new FormControl(null),
      'warranty': new FormControl(null),
      'serviceBook': new FormControl(null),
      'abs': new FormControl(null),
      'ebs': new FormControl(null),

      'diskBrakes': new FormControl(null),
      'airSuspension': new FormControl(null),
      'parkingSensors': new FormControl(null),
      'tarpaulin': new FormControl(null),
      'crane': new FormControl(null),
      'tailLift': new FormControl(null),
    })
  }

  searchTrailers() {
    let formData = this.advancedTrailersForm.value;
    let obj = {
      filter: {
        brand: formData.brand,
        model: formData.model,
        price_from: formData.priceFrom,
        price_to: formData.priceTo,
        year_from: formData.fromYear,
        year_to: formData.toYear,
        max_capacity_from: formData.maxCapacityLoad,
        max_capacity_to: formData.toCapacityLoad,
        type: formData.type,
        region: formData.region,
        exchange: formData.exchange,
        posted_from: formData.postedFrom,
        max_mass_from: formData.weightFrom,
        max_mass_to: formData.weightTo,
        new_used: formData.newAndUsed,
        no_of_axles: formData.noOfAxles,
        suspension: formData.suspension,
        color: formData.color,
        registered_until: formData.registeredUntil,
        damaged: formData.damaged,
        vehicle_origin: formData.originOfTheVehicle,
        first_owner: formData.firstOwner,
        purchased_new: formData.purchasedNew,
        warranty: formData.warranty,
        service_book: formData.serviceBook,
        ABS: formData.abs,
        EBS: formData.ebs,
        disk_brakes: formData.diskBrakes,
        air_suspension: formData.airSuspension,
        parking_sensors: formData.parkingSensors,
        tarpaulin: formData.tarpaulin,
        crane: formData.crane,
        tail_lift: formData.tailLift,
        credit: formData.credit,
        leasing: formData.leasing,
        city: formData.city,
        country: formData.country,
      }
    }
    console.log(this.advancedTrailersForm.value);
    this.trailersAdSerivce.getTrailerAds(obj).subscribe((response: any) => {
      this.show = false;
      this.cards = response.result;
      console.log(response);
    })
  }

  resetForm() {
    this.advancedTrailersForm.reset();
  }

}
