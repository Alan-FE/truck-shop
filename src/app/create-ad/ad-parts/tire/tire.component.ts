import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tire',
  templateUrl: './tire.component.html',
  styleUrls: ['./tire.component.scss']
})
export class TireComponent {
  tireAdForm: FormGroup;
  imagesArray: any[] = [];

  constructor() {
    this.tireAdForm = new FormGroup({
      'tireCategory': new FormControl(null),
      'season': new FormControl(null),
      'width': new FormControl(null),
      'height': new FormControl(null),
      'radius': new FormControl(null),
      'manufacturer': new FormControl(null),
      'dotMarking': new FormControl(null),
      'numberOfPieces': new FormControl(null),

      'treadDepth': new FormControl(null),
      'used': new FormControl(null),
      'pricePerSet': new FormControl(null),
      'pricePerPiece': new FormControl(null),
      'currency': new FormControl(null),
      'fixedPrice': new FormControl(null),
      'shippingMethod': new FormControl(null),
      'description': new FormControl(null, Validators.maxLength(500)),

      'address': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'zipCode': new FormControl(null, Validators.maxLength(50)),
      'city': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'country': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'mobilePhone': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'mobilePhone2': new FormControl(null, Validators.maxLength(50)),
      'phoneNumber': new FormControl(null, Validators.maxLength(50)),
      'phoneNumber2': new FormControl(null, Validators.maxLength(50)),
      'fax': new FormControl(null, Validators.maxLength(50)),
      'firstName': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'lastName': new FormControl(null, [Validators.required, Validators.maxLength(50)])

    });
  };

}
