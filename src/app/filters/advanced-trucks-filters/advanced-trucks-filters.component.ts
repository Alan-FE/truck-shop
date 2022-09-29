import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { TruckAdService } from 'src/app/service/truck-ad.service';
import { FiltersDataService } from '../service/filters-data.service';

@Component({
  selector: 'app-advanced-trucks-filters',
  templateUrl: './advanced-trucks-filters.component.html',
  styleUrls: ['./advanced-trucks-filters.component.scss']
})
export class AdvancedTrucksFiltersComponent implements OnInit {
  advancedFilters: FormGroup;
  years: number[] = this.data.years;
  brandsTo7: string[] = this.data.brandsTo7;
  newOrUsedTrucks: string[] = this.data.newOrUsedTrucks;
  maxCapacityLoad: string[] = this.data.maxCapacityLoad;
  fuel: string[] = this.data.fuel;
  regions: string[] = this.data.regions;
  cubics: string[] = this.data.cubics;
  adsPosted: string[] = this.data.adsPosted;
  noOfSeats: string[] = this.data.noOfSeats;
  emissionClass: string[] = this.data.emissionClass;
  transmission: string[] = this.data.transmission;
  suspensions: string[] = this.data.suspensions;
  damaged: string[] = this.data.damaged;
  drive: string[] = this.data.drive;
  colors: string[] = this.data.colors;
  registeredUntil: string[] = this.data.registeredUntil;

  none: any = 'none';
  show: boolean = true;

  cards: any[] = [];

  brand: any;

  sortArr: any[] = [
    {value: 'P ASC', viewValue: 'Price (High/Low)'},
    {value: 'P DESC', viewValue: 'Price (Low/High)'},
    {value: 'M ASC', viewValue: 'Mileage (High/Low)'},
    {value: 'M DESC', viewValue: 'Mileage (Low/High)'},
    {value: 'Y ASC', viewValue: 'Year (High/Low)'},
    {value: 'Y DESC', viewValue: 'Year (Low/High)'}
  ]

  constructor(private data: FiltersDataService, 
              private trucksAdService: TruckAdService) {
    this.advancedFilters = new FormGroup({
      'brand': new FormControl(null),
      'model': new FormControl(null),
      'priceFrom': new FormControl(null),
      'priceTo': new FormControl(null),
      'fromYear': new FormControl(null),
      'toYear': new FormControl(null),
      'maxCapacityLoad': new FormControl(null),
      'toCapacityLoad': new FormControl(null),
      'bodywork': new FormControl(null),
      'fuel': new FormControl(null),
      'region': new FormControl(null),
      'credit': new FormControl(null),
      'leasing': new FormControl(null),

      'adsWithPhoto': new FormControl(null),
      'adsWithoutPrice': new FormControl(null),
      'testDrive': new FormControl(null),
      'exchange': new FormControl(null),
      'usedAndNew': new FormControl(null),
      'adsOfAllAdvertises': new FormControl(null),
      'postedFrom': new FormControl(null),
      'cm3From': new FormControl(null),
      'cm3To': new FormControl(null),
      'hpFrom': new FormControl(null),
      'hpTo': new FormControl(null),
      'kmFrom': new FormControl(null),
      'kmTo': new FormControl(null),

      'noOfDoors': new FormControl(null),
      'noOfSeats': new FormControl(null),
      'emissionClass': new FormControl(null),
      'transmission': new FormControl(null),
      'suspension': new FormControl(null),
      'country': new FormControl(null),
      'drive': new FormControl(null),
      'color': new FormControl(null),
      'registeredUntil': new FormControl(null),
      'city': new FormControl(null),
      'distanceKm': new FormControl(null),
      'originOfTheVehicle': new FormControl(null),
      'damage': new FormControl(null),

      'firstOwner': new FormControl(null),
      'purchasedNew': new FormControl(null),
      'warranty': new FormControl(null),
      'garaged': new FormControl(null),
      'serviceBook': new FormControl(null),
      'spareKey': new FormControl(null),
      'airbag': new FormControl(null),
      'codedKey': new FormControl(null),
      'centralLocking': new FormControl(null),
      'alarm': new FormControl(null),
      'abs': new FormControl(null),
      'esp': new FormControl(null),
      'asr': new FormControl(null),

      'pneumaticBrakes': new FormControl(null),
      'powerfulAuxiliaryBrakes': new FormControl(null),
      'airConditioning': new FormControl(null),
      'powerSteering': new FormControl(null),
      'electricWindows': new FormControl(null),
      'electricMirrors': new FormControl(null),
      'travelComputer': new FormControl(null),
      'tachograph': new FormControl(null),
      'cruiseControl': new FormControl(null),
      'navigation': new FormControl(null),
      'sunroof': new FormControl(null),
      'glazed': new FormControl(null),
      'tintedWindows': new FormControl(null),

      'leftSlidingDoor': new FormControl(null),
      'rightSlidingDoor': new FormControl(null),
      'allWheelDrive': new FormControl(null),
      'reinforcedRearSuspension': new FormControl(null),
      'roofRack': new FormControl(null),
      'towHitch': new FormControl(null),
      'tarpaulin': new FormControl(null),
      'cargoAreaProtection': new FormControl(null),
      'tailLift': new FormControl(null),
      'crane': new FormControl(null),
      'fogLights': new FormControl(null),
      'xenonLights': new FormControl(null),
      'lightSensors': new FormControl(null),

      'rainSensors': new FormControl(null),
      'parkingSensors': new FormControl(null),
      'webasto': new FormControl(null),
      'seatHeating': new FormControl(null),
      'sleepingBed': new FormControl(null),
      'dvdTv': new FormControl(null),
      'radioCassettePlayer': new FormControl(null),
      'radioCd': new FormControl(null),
      'cdChanger': new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  search() {
    let formData = this.advancedFilters.value;
    let obj = {
      filter: {
        category: "Under7",
        brand: formData.brand, 
        model: formData.model, 
        year_from: formData.fromYear,
        year_to: formData.toYear,
        price_from: formData.priceFrom,
        price_to: formData.priceTo,
        max_load_capacity_from: formData.maxLoadCapacity,
        max_load_capacity_to: formData.toCapacityLoad,
        bodywork: formData.bodywork, 
        fuel: formData.fuel, 
        region: formData.region,
        credit: formData.credit,
        leasing: formData.leasing,
        posted_from: formData.postedFrom,
        cubic_capacity_from: formData.cm3From,
        cubic_capacity_to: formData.cm3To,
        power_hp_from: formData.hpFrom,
        power_hp_to: formData.hpTo,
        mileage_from: formData.kmFrom,
        mileage_to: formData.kmTo,
        number_door: formData.noOfDoors,
        
        engine_emission: formData.emissionClass, 
        transmission: formData.transmission, 
        suspension: formData.suspension, 
        drive: formData.drive, 
        color: formData.color, 
        registered_until: formData.registeredUntil, 
        damaged: formData.damaged, 
        vehicle_origin: formData.originOfTheVehicle, 
        first_owner: formData.firstOwner, 
        purchased_new: formData.purchasedNew, 
        warranty: formData.warranty, 
        garaged: formData.garaged, 
        service_book: formData.serviceBook, 
        spare_key: formData.spareKey, 
        airbag: formData.airbag, 
        coded_key: formData.codedKey, 
        central_locking: formData.centralLocking, 
        alarm: formData.alarm, 
        ABS: formData.abs, 
        ESP: formData.esp, 
        ASR: formData.asr, 
        pneumatic_brakes: formData.pneumaticBrakes, 
        powerful_auxillary: formData.powerfulAuxiliaryBrakes, 
        air_conditioning: formData.airConditioning, 
        power_steering: formData.powerSteering, 
        electric_windows: formData.electricWindows, 
        electric_mirrors: formData.electricMirrors, 
        travel_computer: formData.travelComputer, 
        tachograph: formData.tachograph, 
        cruise_control: formData.cruiseControl, 
        navigation: formData.navigation, 
        sunroof: formData.sunroof,
        glazed: formData.glazed, 
        tinted_windows: formData.tintedWindows, 
        left_side_sliding_door: formData.leftSlidingDoor, 
        right_side_sliding_door: formData.rightSlidingDoor, 
        all_wheel_drive: formData.allWheelDrive, 
        reinforced_rear: formData.reinforcedRearSuspension, 
        roof_rack: formData.roofRack, 
        tow_hitch: formData.towHitch, 
        tarpaulin: formData.tarpaulin, 
        cargo_protection: formData.cargoAreaProtection, 
        tall_lift: formData.tailLift, 
        crane: formData.crane, 
        fog_lights: formData.fogLights, 
        xenon_lights: formData.xenonLights, 
        light_sensors: formData.lightSensors, 
        rain_sensors: formData.rainSensors, 
        parking_sensors: formData.parkingSensors, 
        webasto: formData.webasto, 
        seat_heating: formData.seatHeating, 
        sleeping_bed: formData.sleepingBed, 
        dvd_tv: formData.dvdTv, 
        radio_cassette: formData.radioCassettePlayer, 
        radio_cd: formData.radioCd, 
        cd_changer: formData.cdChanger, 
        exchange: formData.exchange, 
        city: formData.city, 
        country: formData.country, 
        
      }
    }
    this.brand = formData.brand;
    this.trucksAdService.getTruckAds(obj).subscribe((response: any) => {
      this.show = false;
      this.cards = response.result;
      console.log(response)
    })
    console.log(this.advancedFilters.value);
  };

  sort(sort: any) {
    let checkSort = sort.value?.split(' ') ? sort.value?.split(' ') : [];
    let price: string = '';
    let mileage: string = '';
    let year: string = '';

    if(checkSort[0] == 'P') {
      price = checkSort[1];
    };

    if(checkSort[0] == 'M') {
      mileage = checkSort[1];
    };

    if(checkSort[0] == 'Y') {
      year = checkSort[1];
    }

    let obj = {
      filter: {
        category: "Under7",
        brand: this.brand
      },
      sort: {
        price: price,
        mileage: mileage,
        year: year
      }
    }

    this.trucksAdService.getTruckAds(obj).subscribe((response: any) => {
      this.cards = [];
      this.cards = response.result;
      console.log(response)
    })

    console.log(obj);
  }

  resetForm() {
    this.advancedFilters.reset();
  }

}
