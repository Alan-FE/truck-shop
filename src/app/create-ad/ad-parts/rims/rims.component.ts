import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FiltersDataService } from 'src/app/filters/service/filters-data.service';

@Component({
  selector: 'app-rims',
  templateUrl: './rims.component.html',
  styleUrls: ['./rims.component.scss']
})
export class RimsComponent {
  rimsAdForm: FormGroup;
  files: File[] = [];
  shippingMethod: string[] = this.data.shippingMethod;
  none: any = 'none';

  imagesArray: any[] = [];


  constructor(private data: FiltersDataService) {
    this.rimsAdForm = new FormGroup({
      'brand': new FormControl(null),
      'manufacturer': new FormControl(null),
      'type': new FormControl(null),
      'noRangeOfHoles': new FormControl(null),
      'diameter': new FormControl(null),
      'width': new FormControl(null),
      'numberOfPieces': new FormControl(null),
      'withTires': new FormControl(null),

      'et': new FormControl(null),
      'used': new FormControl(null),
      'pricePerSet': new FormControl(null),
      'pricePerPiece': new FormControl(null),
      'currency': new FormControl(null),
      'fixedPrice': new FormControl(null),
      'shippingMethod': new FormControl(null),
      'description': new FormControl(null, [Validators.maxLength(500)]),

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
      'lastName': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      
    })
  };

}
