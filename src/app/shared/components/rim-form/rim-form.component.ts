import { Component, Input, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FiltersDataService } from 'src/app/filters/service/filters-data.service';
import { AuthService } from 'src/app/service/auth.service';
import { PartsAdService } from 'src/app/service/parts-ad.service';

@Component({
  selector: 'app-rim-form',
  templateUrl: './rim-form.component.html',
  styleUrls: ['./rim-form.component.scss']
})
export class RimFormComponent {
  @Input() rimsForm: any;
  @Input() editMode: boolean = false;
  @Input() id: any;
  @ViewChild(FormGroupDirective) form: any;
  
  files: File[] = [];
  shippingMethod: string[] = this.data.shippingMethod;
  none: any = 'none';

  imagesArray: any[] = [];

  constructor(private data: FiltersDataService,
              private partsAdService: PartsAdService,
              private authService: AuthService,
              private _snackBar: MatSnackBar) { }
  //Convert File to base64
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
  //Choose photo
  onSelect(event: any) {
    this.files.push(...event.addedFiles);    
    for(let i=0; i < event.addedFiles.length; i++) {
      this.convertFileToBase64(event.addedFiles[i])
    }
    console.log(this.imagesArray);
  };
  //Remove photo
  onRemove(event: any, index: number) {
      this.files.splice(this.files.indexOf(event), 1);
      this.imagesArray.splice(index, 1);
  };
  //Post or update ad
  postAd() {
    console.log(this.rimsForm.value);
    let formData = this.rimsForm.value;
    let obj: any = {
      account_id: this.authService.userData.id,
      category: "Rims",
      brand: formData.brand,
      images: this.imagesArray,  
      type: formData.type,
      range_holes: formData.noRangeOfHoles,
      diameter: formData.diameter,
      with_tires: formData.withTires,
      et: formData.et,
      used: formData.used,
      price_per_set: formData.pricePerSet,
      price_per_piece: formData.pricePerPiece,
      currency: formData.currency,
      pieces: formData.numberOfPieces,
      width: formData.width,
      fixed_price: formData.fixedPrice,
      manufacturer: formData.manufacturer,
      shipping_method: formData.shippingMethod,
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
    console.log(obj)
    if(!this.editMode) {
      this.partsAdService.createTireRimAd(obj).subscribe((response: any) => {
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
      this.partsAdService.updateTireRimAd(obj).subscribe((response: any) => {
        if(response.result) {
          console.log(response)
          this._snackBar.open('The ad was successfully updated!' + '!', 'Close',{
            duration: 3000
          });
        } else {
          this._snackBar.open(response.message, 'Close',{
            duration: 3000
          });
        }
      });
    }
  }

}
