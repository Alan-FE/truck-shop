import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FiltersDataService } from 'src/app/filters/service/filters-data.service';
import { AuthService } from 'src/app/service/auth.service';
import { TrailerAdService } from 'src/app/service/trailer-ad.service';

@Component({
  selector: 'app-trailer-form',
  templateUrl: './trailer-form.component.html',
  styleUrls: ['./trailer-form.component.scss']
})
export class TrailerFormComponent implements OnInit {
  @Input() trailerForm: any;
  @Input() editMode: boolean = false;
  @Input() id: any;
  @ViewChild(FormGroupDirective) form: any;

  files: File[] = [];
  none: any = 'none';
  trailersBrands: string[] = this.data.trailersBrand;
  trailersType: string[] = this.data.trailersType;
  noOfAxlesTrailers: string[] = this.data.noOfAxlesTrailers;
  suspensions: string[] = this.data.suspensions;
  colors: string[] = this.data.colors;
  registeredUntil: string[] = this.data.registeredUntil;
  damaged: string[] = this.data.damaged;

  imagesArray: any[] = [];

  constructor(private data: FiltersDataService,
              private authService: AuthService,
              private trailerAdService: TrailerAdService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  //Convert to base64
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
  postAd() {
    console.log(this.trailerForm.value);
    let formData = this.trailerForm.value;
    let obj: any = {
      account_id:  this.authService.userData.id,
      images: this.imagesArray,
      brand: formData.brand,
      model: formData.model,
      year: formData.year,
      type: formData.type,
      max_mass: formData.maxPermissibleMass,
      payload: formData.payload,
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
      sales_method: formData.salesMethod,
      price: formData.price,
      price_with_tax: formData.priceWithOrWithoutTax,
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
    };
    console.log(obj);

   if(!this.editMode) {
    this.trailerAdService.createTrailerAd(obj).subscribe((response: any) => {
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
    })
  } else {
    obj.id = this.id;
    this.trailerAdService.updateTrailerAd(obj).subscribe((response: any) => {
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
    })
  }
  }

}
