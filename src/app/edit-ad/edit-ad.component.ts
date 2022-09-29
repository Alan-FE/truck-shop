import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartsAdService } from '../service/parts-ad.service';
import { TrailerAdService } from '../service/trailer-ad.service';
import { TruckAdService } from '../service/truck-ad.service';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.scss']
})
export class EditAdComponent implements OnInit, OnDestroy {
  @Input() initForm: any;
  edit: boolean = true;
  adId: any;
  subscription: any;

  category: any;
  

  constructor(private route: ActivatedRoute,
              private truckAdService: TruckAdService,
              private trailerAdService: TrailerAdService,
              private partsAdService: PartsAdService) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    let category: any = this.route.snapshot.paramMap.get('category');
    this.adId = id;
    this.category = category;
    if(category == 'trucks-under-seven') {
      this.initFormTruckToSeven(id);
    };

    if(category == 'trucks-over-seven') {
      this.initFormTruckOverSeven(id);
    };

    if(category == 'trailer') {
      this.initTrailerForm(id);
    };

    if(category == 'rims') {
      this.initRimForm(id);
    };

    if(category == 'tires') {
      this.initTireForm(id);
    };

    if(category == 'parts') {
      this.initPartsForm(id);
    };
  };


  initFormTruckToSeven(id: number) {
    this.subscription = this.truckAdService.getTruckById(id).subscribe((response: any)=> {
      let formData = response.result;
      console.log(formData)
      this.initForm = new FormGroup({
        'brand': new FormControl(formData.brand),
        'images': new FormControl(response.result.images),
        'model': new FormControl(formData.model),
        'year': new FormControl(formData.year),
        'bodywork': new FormControl(formData.bodywork),
        'fuel': new FormControl(formData.fuel),
        'cm3': new FormControl(formData.cubic_capacity),
        'hp': new FormControl(formData.power_hp),
        'mileage': new FormControl(formData.mileage),
        'maxLoadCapacity': new FormControl(formData.max_load_capacity),
        'noOfDoors': new FormControl(formData.number_door),
        'emissionClass': new FormControl(formData.engine_emission),
        'transmission': new FormControl(formData.transmission),
        'suspension': new FormControl(formData.suspension),
        'drive': new FormControl(formData.drive),

        'color': new FormControl(formData.color),
        'registeredUntil': new FormControl(formData.registered_until),
        'damaged': new FormControl(formData.damaged),
        'originOfTheVehicle': new FormControl(formData.vehicle_origin),
        'firstOwner': new FormControl(formData.first_owner),
        'purchasedNew': new FormControl(formData.purchased_new),
        'warranty': new FormControl(formData.warranty),
        'garaged': new FormControl(formData.garaged),
        'serviceBook': new FormControl(formData.service_book),
        'spareKey': new FormControl(formData.spare_key),
        'airbag': new FormControl(formData.airbag),
        'codedKey': new FormControl(formData.coded_key),
        'centralLocking': new FormControl(formData.central_locking),
        'alarm': new FormControl(formData.alarm),
        'abs': new FormControl(formData.ABS),

        'esp': new FormControl(formData.ESP),
        'asr': new FormControl(formData.ASR),
        'pneumaticBrakes': new FormControl(formData.pneumatic_brakes),
        'powerfulAuxiliaryBrakes': new FormControl(formData.powerful_auxillary),
        'airConditioning': new FormControl(formData.air_conditioning),
        'powerSteering': new FormControl(formData.power_steering),
        'electricWindows': new FormControl(formData.electric_windows),
        'electricMirrors': new FormControl(formData.electric_mirrors),
        'travelComputer': new FormControl(formData.travel_computer),
        'tachograph': new FormControl(formData.tachograph),
        'cruiseControl': new FormControl(formData.cruise_control),
        'navigation': new FormControl(formData.navigation),
        'sunroof': new FormControl(formData.sunroof),
        'glazed': new FormControl(formData.glazed),
        'tintedWindows': new FormControl(formData.tinted_windows),

        'leftSlidingDoor': new FormControl(formData.left_side_sliding_door),
        'rightSlidingDoor': new FormControl(formData.right_side_sliding_door),
        'allWheelDrive': new FormControl(formData.all_wheel_drive),
        'reinforcedRearSuspension': new FormControl(formData.reinforced_rear),
        'roofRack': new FormControl(formData.roof_rack),
        'towHitch': new FormControl(formData.tow_hitch),
        'tarpaulin': new FormControl(formData.tarpaulin),
        'cargoAreaProtection': new FormControl(formData.cargo_protection),
        'tailLift': new FormControl(formData.tall_lift),
        'crane': new FormControl(formData.crane),
        'fogLights': new FormControl(formData.fog_lights),
        'xenonLights': new FormControl(formData.xenon_lights),
        'lightSensors': new FormControl(formData.light_sensors),
        'rainSensors': new FormControl(formData.rain_sensors),
        'parkingSensors': new FormControl(formData.parking_sensors),

        'webasto': new FormControl(formData.webasto),
        'seatHeating': new FormControl(formData.seat_heating),
        'sleepingBed': new FormControl(formData.sleeping_bed),
        'dvdTv': new FormControl(formData.dvd_tv),
        'radioCassettePlayer': new FormControl(formData.radio_cassette),
        'radioCd': new FormControl(formData.radio_cd),
        'cdChanger': new FormControl(formData.cd_changer),
        'credit': new FormControl(formData.credit),
        'leasing': new FormControl(formData.leasing),
        'salesMethod': new FormControl(formData.method_sale),
        'price': new FormControl(formData.price),
        'priceWithOrWithoutTax': new FormControl(formData.price_tax),
        'fixedPrice': new FormControl(formData.fixed_price),
        'exchange': new FormControl(formData.exchange),

        'description': new FormControl(formData.description),
        'address': new FormControl(formData.address),
        'zipCode': new FormControl(formData.zip_code),
        'city': new FormControl(formData.city),
        'country': new FormControl(formData.country),
        'mobilePhone': new FormControl(formData.mobile_1),
        'mobilePhone2': new FormControl(formData.mobile_2),
        'phoneNumber': new FormControl(formData.phone_1),
        'phoneNumber2': new FormControl(formData.phone_2),
        'fax': new FormControl(formData.fax),
        'firstName': new FormControl(formData.first_name),
        'lastName': new FormControl(formData.last_name)
      });
    });
  };

  initFormTruckOverSeven(id: number) {
       
    this.subscription = this.truckAdService.getTruckById(id).subscribe((response: any)=> {
      console.log(response)
      let formData = response.result;
      this.initForm = new FormGroup({
        'brand': new FormControl(formData.brand),
        'images': new FormControl(response.result.images),
        'model': new FormControl(formData.model),
        'year': new FormControl(formData.year),
        'bodywork': new FormControl(formData.bodywork),
        'fuel': new FormControl(formData.fuel),
        'cm3': new FormControl(formData.cubic_capacity),
        'hp': new FormControl(formData.power_hp),
        'mileage': new FormControl(formData.mileage),
        'maxLoadCapacity': new FormControl(formData.max_load_capacity),
        'chassisHeight': new FormControl(formData.chassis_height),
        'emissionClass': new FormControl(formData.engine_emission),
        'transmission': new FormControl(formData.transmission),
        'suspension': new FormControl(formData.suspension),
        'noOfAxles': new FormControl(formData.no_of_axles),
        'drive': new FormControl(formData.drive),

        'color': new FormControl(formData.color),
        'registeredUntil': new FormControl(formData.registered_until),
        'damaged': new FormControl(formData.damaged),
        'originOfTheVehicle': new FormControl(formData.vehicle_origin),
        'firstOwner': new FormControl(formData.first_owner),
        'purchasedNew': new FormControl(formData.purchased_new),
        'warranty': new FormControl(formData.warranty),
        'garaged': new FormControl(formData.garaged),
        'serviceBook': new FormControl(formData.service_book),
        'spareKey': new FormControl(formData.spare_key),
        'airbag': new FormControl(formData.airbag),
        'codedKey': new FormControl(formData.coded_key),
        'centralLocking': new FormControl(formData.central_locking),
        'alarm': new FormControl(formData.alarm),
        'abs': new FormControl(formData.ABS),

        'esp': new FormControl(formData.ESP),
        'asr': new FormControl(formData.ASR),
        'pneumaticBrakes': new FormControl(formData.pneumatic_brakes),
        'powerfulAuxiliaryBrakes': new FormControl(formData.powerful_auxillary),
        'airConditioning': new FormControl(formData.air_conditioning),
        'powerSteering': new FormControl(formData.power_steering),
        'electricWindows': new FormControl(formData.electric_windows),
        'electricMirrors': new FormControl(formData.electric_mirrors),
        'travelComputer': new FormControl(formData.travel_computer),
        'cruiseControl': new FormControl(formData.cruise_control),
        'navigation': new FormControl(formData.navigation),
        'radioConnection': new FormControl(formData.radio_connection),
        'tintedWindows': new FormControl(formData.tinted_windows),
        'allWheelDrive': new FormControl(formData.all_wheel_drive),

        'reinforcedRearSuspension': new FormControl(formData.reinforced_rear),
        'tarpaulin': new FormControl(formData.tarpaulin),
        'cargoAreaProtection': new FormControl(formData.cargo_protection),
        'hydraulicLifters': new FormControl(formData.hydraulic_lifters),
        'tailLift': new FormControl(formData.tall_lift),
        'crane': new FormControl(formData.crane),
        'fogLights': new FormControl(formData.fog_lights),
        'xenonLights': new FormControl(formData.xenon_lights),
        'lightSensors': new FormControl(formData.light_sensors),
        'rainSensors': new FormControl(formData.rain_sensors),
        'parkingSensors': new FormControl(formData.parking_sensors),

        'webasto': new FormControl(formData.webasto),
        'seatHeating': new FormControl(formData.seat_heating),
        'sleepingCabin': new FormControl(formData.sleeping_cabin),
        'dvd': new FormControl(formData.dvd),
        'tv': new FormControl(formData.tv),
        'radioCassettePlayer': new FormControl(formData.radio_cassette),
        'radioCd': new FormControl(formData.radio_cd),
        'cdChanger': new FormControl(formData.cd_changer),
        'credit': new FormControl(formData.credit),
        'leasing': new FormControl(formData.leasing),
        'salesMethod': new FormControl(formData.method_sale),
        'price': new FormControl(formData.price),
        'priceWithOrWithoutTax': new FormControl(formData.price_tax),
        'fixedPrice': new FormControl(formData.fixed_price),
        'exchange': new FormControl(formData.exchange),

        'description': new FormControl(formData.description),
        'address': new FormControl(formData.address),
        'zipCode': new FormControl(formData.zip_code),
        'city': new FormControl(formData.city),
        'country': new FormControl(formData.country),
        'mobilePhone': new FormControl(formData.mobile_1),
        'mobilePhone2': new FormControl(formData.mobile_2),
        'phoneNumber': new FormControl(formData.phone_1),
        'phoneNumber2': new FormControl(formData.phone_2),
        'fax': new FormControl(formData.fax),
        'firstName': new FormControl(formData.first_name),
        'lastName': new FormControl(formData.last_name)
      });
    });
  };

  initTrailerForm(id: number) {
    this.subscription = this.trailerAdService.getTrailerById(id).subscribe( (response: any) => {
      console.log(response);
      let formData = response.result;
      this.initForm = new FormGroup ({
        'brand': new FormControl(formData.brand),
        'model': new FormControl(formData.model),
        'year': new FormControl(formData.year),
        'type': new FormControl(formData.type),
        'maxPermissibleMass': new FormControl(formData.max_mass),
        'payload': new FormControl(formData.payload),
        'noOfAxles': new FormControl(formData.no_of_axles),
        'suspension': new FormControl(formData.suspension),
        'color': new FormControl(formData.color),
        'registeredUntil': new FormControl(formData.registered_until),
        'damaged': new FormControl(formData.damaged),
        'originOfTheVehicle': new FormControl(formData.vehicle_origin),
  
        'firstOwner': new FormControl(formData.first_owner),
        'purchasedNew': new FormControl(formData.purchased_new),
        'warranty': new FormControl(formData.warranty),
        'serviceBook': new FormControl(formData.service_book),
        'abs': new FormControl(formData.ABS),
        'ebs': new FormControl(formData.EBS),
        'diskBrakes': new FormControl(formData.disk_brakes),
        'airSuspension': new FormControl(formData.air_suspension),
        'parkingSensors': new FormControl(formData.parking_sensors),
        'tarpaulin': new FormControl(formData.tarpaulin),
        'crane': new FormControl(formData.crane),
        'tailLift': new FormControl(formData.tail_lift),
        'credit': new FormControl(formData.credit),
  
        'leasing': new FormControl(formData.leasing),
        'salesMethod': new FormControl(formData.sales_method),
        'price': new FormControl(formData.price),
        'priceWithOrWithoutTax': new FormControl(formData.price_tax),
        'fixedPrice': new FormControl(formData.fixed_price),
        'exchange': new FormControl(formData.exchange),
        'description': new FormControl(formData.description),
        'address': new FormControl(formData.address),
        'zipCode': new FormControl(formData.zip_code),
        'city': new FormControl(formData.city),
        'country': new FormControl(formData.country),
        'mobilePhone': new FormControl(formData.mobile_1),
        'mobilePhone2': new FormControl(formData.mobile_2),
        'phoneNumber': new FormControl(formData.phone_1),
        'phoneNumber2': new FormControl(formData.phone_2),
        'fax': new FormControl(formData.fax),
        'firstName': new FormControl(formData.first_name),
        'lastName': new FormControl(formData.last_name)
      })
    } )
  }

  initRimForm(id: number) {
    this.subscription = this.partsAdService.getTireRimAdById(id).subscribe((response: any) => {
      console.log(response);
      let formData = response.result;
      this.initForm = new FormGroup({
        'brand': new FormControl(formData.brand),
        'manufacturer': new FormControl(formData.manufacturer),
        'type': new FormControl(formData.type),
        'noRangeOfHoles': new FormControl(formData.range_holes),
        'diameter': new FormControl(formData.diameter),
        'width': new FormControl(formData.width),
        'numberOfPieces': new FormControl(formData.pieces),
        'withTires': new FormControl(formData.with_tires),
  
        'et': new FormControl(formData.et),
        'used': new FormControl(formData.used),
        'pricePerSet': new FormControl(formData.price_per_set),
        'pricePerPiece': new FormControl(formData.price_per_piece),
        'currency': new FormControl(formData.currency),
        'fixedPrice': new FormControl(formData.fixed_price),
        'shippingMethod': new FormControl(formData.shipping_method),
        'description': new FormControl(formData.description),
  
        'address': new FormControl(formData.address),
        'zipCode': new FormControl(formData.zip_code),
        'city': new FormControl(formData.city),
        'country': new FormControl(formData.country),
        'mobilePhone': new FormControl(formData.mobile_1),
        'mobilePhone2': new FormControl(formData.mobile_2),
        'phoneNumber': new FormControl(formData.phone_1),
        'phoneNumber2': new FormControl(formData.phone_2),
        'fax': new FormControl(formData.fax),
        'firstName': new FormControl(formData.first_name),
        'lastName': new FormControl(formData.last_name),
        
      });
    });
  };

  initTireForm(id: number) {
    this.subscription = this.partsAdService.getTireRimAdById(id).subscribe((response: any) => {
      console.log(response)
      let formData = response.result;
      this.initForm = new FormGroup({
        'tireCategory': new FormControl(formData.tire_category),
        'season': new FormControl(formData.season),
        'width': new FormControl(formData.width),
        'height': new FormControl(formData.height),
        'radius': new FormControl(formData.radius),
        'manufacturer': new FormControl(formData.manufacturer),
        'dotMarking': new FormControl(formData.dotMarking),
        'numberOfPieces': new FormControl(formData.pieces),
  
        'treadDepth': new FormControl(formData.tread_depth),
        'used': new FormControl(formData.used),
        'pricePerSet': new FormControl(formData.price_per_set),
        'pricePerPiece': new FormControl(formData.price_per_piece),
        'currency': new FormControl(formData.currency),
        'fixedPrice': new FormControl(formData.fixed_price),
        'shippingMethod': new FormControl(formData.shipping_method),
        'description': new FormControl(formData.description),
  
        'address': new FormControl(formData.address),
        'zipCode': new FormControl(formData.zip_code),
        'city': new FormControl(formData.city),
        'country': new FormControl(formData.country),
        'mobilePhone': new FormControl(formData.mobile_1),
        'mobilePhone2': new FormControl(formData.mobile_2),
        'phoneNumber': new FormControl(formData.phone_1),
        'phoneNumber2': new FormControl(formData.phone_2),
        'fax': new FormControl(formData.fax),
        'firstName': new FormControl(formData.first_name),
        'lastName': new FormControl(formData.last_name)
      });
    })
  };

  initPartsForm(id: number) {
    this.subscription = this.partsAdService.getPartAdById(id).subscribe((response: any) => {
      console.log(response.result);
      let formData = response.result;
      this.initForm = new FormGroup({
        'subcategory': new FormControl(formData.subcategory),
        'brand': new FormControl(formData.brand),
        'partsAndEquipmentGroup': new FormControl(formData.parts_group),
        'used': new FormControl(formData.used),
        'adTitle': new FormControl(formData.ad_title),
        'price': new FormControl(formData.price),
        'currency': new FormControl(formData.currency),
        'fixedPrice': new FormControl(formData.fixed_price),
        'shippingMethod': new FormControl(formData.shipping_method),
        'description': new FormControl(formData.description),
        'address': new FormControl(formData.address),
        'zipCode': new FormControl(formData.zip_code),

        'city': new FormControl(formData.city),
        'country': new FormControl(formData.country),
        'mobilePhone': new FormControl(formData.mobile_1),
        'mobilePhone2': new FormControl(formData.mobile_2),
        'phoneNumber': new FormControl(formData.phone_1),
        'phoneNumber2': new FormControl(formData.phone_2),
        'fax': new FormControl(formData.fax),
        'firstName': new FormControl(formData.first_name),
        'lastName': new FormControl(formData.last_name),
      })
    })
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

}
