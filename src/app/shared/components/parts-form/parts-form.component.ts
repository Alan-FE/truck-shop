import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FiltersDataService } from 'src/app/filters/service/filters-data.service';
import { AuthService } from 'src/app/service/auth.service';
import { PartsAdService } from 'src/app/service/parts-ad.service';

@Component({
  selector: 'app-parts-form',
  templateUrl: './parts-form.component.html',
  styleUrls: ['./parts-form.component.scss']
})
export class PartsFormComponent implements OnInit {
  @Input() partsForm: any;
  @Input() editMode: boolean = false;
  @Input() id: any;
  @ViewChild(FormGroupDirective) form: any;

  files: File[] = [];
  trucksCategory: string[] = this.data.trucksCategory;
  groupParts: string[] = this.data.groupParts;
  none: any = 'none';

  imagesArray: any[] = [];

  constructor(private data: FiltersDataService,
              private partsAdService: PartsAdService,
              private authService: AuthService,
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
    let formData = this.partsForm.value;
    let obj: any = {
      account_id: this.authService.userData.id,
      subcategory : formData.subcategory,
      images: this.imagesArray,
      brand : formData.brand,
      parts_group: formData.partsAndEquipmentGroup,
      used : formData.used,
      ad_title: formData.adTitle,
      price: formData.price,
      currency: formData.currency,
      fixed_price: formData.fixedPrice,
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
    console.log(obj);
    if(!this.editMode) {
      this.partsAdService.createPartAd(obj).subscribe((response: any) => {
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
      this.partsAdService.updatePartAd(obj).subscribe((response: any) => {
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

