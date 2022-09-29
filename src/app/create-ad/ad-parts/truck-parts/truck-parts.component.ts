import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-truck-parts',
  templateUrl: './truck-parts.component.html',
  styleUrls: ['./truck-parts.component.scss']
})
export class TruckPartsComponent {
  truckAdForm: FormGroup;

  constructor() {
    this.truckAdForm = new FormGroup({
      'subcategory': new FormControl(null),
      'brand': new FormControl(null),
      'partsAndEquipmentGroup': new FormControl(null),
      'used': new FormControl(null),
      'adTitle': new FormControl(null),
      'price': new FormControl(null),
      'currency': new FormControl(null),
      'fixedPrice': new FormControl(null),
      'shippingMethod': new FormControl(null),
      'description': new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      'address': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'zipCode': new FormControl(null, [Validators.required, Validators.maxLength(50)]),

      'city': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'country': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'mobilePhone': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'mobilePhone2': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'phoneNumber2': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'fax': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'firstName': new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      'lastName': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    })
  }

}
