import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FiltersDataService } from 'src/app/filters/service/filters-data.service';
import { AuthService } from 'src/app/service/auth.service';
import { PartsAdService } from 'src/app/service/parts-ad.service';

@Component({
  selector: 'app-tire-form',
  templateUrl: './tire-form.component.html',
  styleUrls: ['./tire-form.component.scss']
})
export class TireFormComponent implements OnInit {
  @Input() tireForm: any;
  @Input() editMode: boolean = false;
  @Input() id: any;
  @ViewChild(FormGroupDirective) form: any;

  files: File[] = [];
  none: any = 'none';
  season: string[] = this.data.season;
  tiresWidth: number[] = this.data.tiresWidth;
  tiresHeight: number[] = this.data.tiresHeight;
  tireRadius: number[] = this.data.tireRadius;
  shippingMethod: string[] = this.data.shippingMethod;

  imagesArray: any[] = [];

  constructor(private data: FiltersDataService,
              private partsAdService: PartsAdService,
              private authService: AuthService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  //Convert file to base 64
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
  //Remove photo
  onRemove(event: any, index: number) {
      this.files.splice(this.files.indexOf(event), 1);
      this.imagesArray.splice(index, 1);
  };
  //Post or update ad 
  post() {
    let formData = this.tireForm.value;
    let obj: any = {
      account_id: this.authService.userData.id,
      category: "Tires",
      tire_category: formData.tireCategory,
      images: this.imagesArray,
      season: formData.season,
      height: formData.height,
      radius: formData.radius,
      dot_marking: formData.dotMarking,
      tread_depth: formData.treadDepth,
      width: formData.width,
      fixed_price: formData.fixedPrice,
      manufacturer: formData.manufacturer,
      pieces: formData.numberOfPieces,
      used: formData.used,
      price_per_set: formData.pricePerSet,
      price_per_piece: formData.pricePerPiece,
      currency: formData.currency,
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
    }

    console.log(obj);
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
  }

}
