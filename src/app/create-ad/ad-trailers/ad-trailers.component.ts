import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-trailers',
  templateUrl: './ad-trailers.component.html',
  styleUrls: ['./ad-trailers.component.scss']
})
export class AdTrailersComponent {
  adTrailerForm: FormGroup;

  constructor() {
    this.adTrailerForm = new FormGroup({
      'brand': new FormControl(null),
      'model': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'year': new FormControl(null),
      'type': new FormControl(null),
      'maxPermissibleMass': new FormControl(null),
      'payload': new FormControl(null),
      'noOfAxles': new FormControl(null),
      'suspension': new FormControl(null),
      'color': new FormControl(null),
      'registeredUntil': new FormControl(null),
      'damaged': new FormControl(null),
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
      'credit': new FormControl(null),

      'leasing': new FormControl(null),
      'salesMethod': new FormControl(null),
      'price': new FormControl(null),
      'priceWithOrWithoutTax': new FormControl(null),
      'fixedPrice': new FormControl(null),
      'exchange': new FormControl(null),
      'description': new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      'address': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      'zipCode': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'city': new FormControl(null),
      'country': new FormControl(null),
      'mobilePhone': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'mobilePhone2': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'phoneNumber2': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'fax': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'firstName': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'lastName': new FormControl(null, [Validators.required, Validators.maxLength(50)])

    })
  }
  
}
