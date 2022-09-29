import { Component, Input, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FiltersDataService } from 'src/app/filters/service/filters-data.service';
import { AuthService } from 'src/app/service/auth.service';
import { TruckAdService } from 'src/app/service/truck-ad.service';

@Component({
  selector: 'app-truck-to-seven-form',
  templateUrl: './truck-to-seven-form.component.html',
  styleUrls: ['./truck-to-seven-form.component.scss']
})
export class TruckToSevenFormComponent {
  @Input() truckToSevenForm: any;
  @Input() editMode: boolean = false;
  @Input() id: any;
  @ViewChild(FormGroupDirective) form: any;

  files: File[] = [];
  none: any = 'none';
  brands: string[] = this.data.brandsTo7;
  fuel: string[] = this.data.fuel;
  emissionClass: string[] = this.data.emissionClass;
  transmission: string[] = this.data.transmission;
  suspensions: string[] = this.data.suspensions;
  damaged: string[] = this.data.damaged;
  drive: string[] = this.data.drive;
  colors: string[]= this.data.colors;
  registeredUntil: string[] = this.data.registeredUntil;

  imagesArray: any[] = [];

  constructor(private authService: AuthService,
              private truckAdService: TruckAdService,
              private data: FiltersDataService,
              private _snackBar: MatSnackBar) {}
  //Conver to base64
  convertFileToBase64(event: any) {
    let reader = new FileReader();
    reader.onload = (e: any) => {
      let base64 = e.target.result;
      this.imagesArray.push(base64);
      console.log(this.imagesArray);
    };
    reader.readAsDataURL(event);    
    console.log(this.files);
  };

  onSelect(event: any) {
    this.files.push(...event.addedFiles);    
    for(let i=0; i < event.addedFiles.length; i++) {
      this.convertFileToBase64(event.addedFiles[i])
    }
    console.log(this.imagesArray);
  };

  onRemove(event: any, index: number) {
      this.files.splice(this.files.indexOf(event), 1);
      this.imagesArray.splice(index, 1);
  };
  //Post or update ad
  post() {
    let formData = this.truckToSevenForm.value;
    let obj: any = {
     account_id: this.authService.userData.id,
     category: "Under7",
     images: this.imagesArray,
     brand: formData.brand, 
     model: formData.model, 
     year: formData.year, 
     bodywork: formData.bodywork, 
     fuel: formData.fuel, 
     cubic_capacity: formData.cm3, 
     power_hp: formData.hp, 
     mileage: formData.mileage, 
     max_load_capacity: formData.maxLoadCapacity, 
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
     credit: formData.credit, 
     leasing: formData.leasing, 
     method_sale: formData.salesMethod,
     price: formData.price, 
     price_tax: formData.priceWithOrWithoutTax, 
     fixed_price: formData.fixedPrice, 
     exchange: formData.exchange, 
     description: formData.description, 
     address: formData.address, 
     zip_code: formData.zipCode, 
     city: formData.city, 
     country: formData.country, 
     mobile_1: formData.mobilePhone, 
     mobile_2: formData.mobilePhone2, 
     phone_1: formData.phoneNumber, 
     phone_2: formData.phoneNumber2, 
     fax: formData.fax, 
     first_name: formData.firstName, 
     last_name: formData.lastName
    }
    console.log(obj)
    if(!this.editMode) {
      this.truckAdService.createTruckAd(obj).subscribe((response: any) => {
        if(response.result) {
          console.log(response)
          this._snackBar.open('The ad was successfully published!', 'Close',{
            duration: 3000
          });
          this.files = [];
          this.form.resetForm();
        } else {
          this._snackBar.open(response.message, 'Close',{
            duration: 3000
          });
        }
      });
    } else {
      obj.id = this.id;
      this.truckAdService.updateTruckAd(obj).subscribe((response: any) => {
        if(response.result) {
          console.log(response)
          this._snackBar.open('The ad was successfully updated!', 'Close',{
            duration: 3000
          });
        } else {
          this._snackBar.open(response.message, 'Close',{
            duration: 3000
          });
        }
      });
    }
  };
}
