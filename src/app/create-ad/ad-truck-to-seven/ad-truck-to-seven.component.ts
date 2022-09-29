import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-truck-to-seven',
  templateUrl: './ad-truck-to-seven.component.html',
  styleUrls: ['./ad-truck-to-seven.component.scss']
})
export class AdTruckToSevenComponent {
  adTruckToSevenForm: FormGroup;

  constructor() {
    this.adTruckToSevenForm = new FormGroup({
      'brand': new FormControl(null),
      'model': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'year': new FormControl(null),
      'bodywork': new FormControl(null),
      'fuel': new FormControl(null),
      'cm3': new FormControl(null),
      'hp': new FormControl(null),
      'mileage': new FormControl(null),
      'maxLoadCapacity': new FormControl(null),
      'noOfDoors': new FormControl(null),
      'emissionClass': new FormControl(null),
      'transmission': new FormControl(null),
      'suspension': new FormControl(null),
      'drive': new FormControl(null),

      'color': new FormControl(null),
      'registeredUntil': new FormControl(null),
      'damaged': new FormControl(null),
      'originOfTheVehicle': new FormControl(null),
      'firstOwner': new FormControl(null),
      'purchasedNew': new FormControl(null),
      'warranty': new FormControl(null),
      'garaged': new FormControl(null),
      'serviceBook': new FormControl(null),
      'spareKey': new FormControl(null),
      'airbag': new FormControl(null),
      'codedKey': new FormControl(null),
      'centralLocking': new FormControl(null),
      'alarm': new FormControl(null),
      'abs': new FormControl(null),

      'esp': new FormControl(null),
      'asr': new FormControl(null),
      'pneumaticBrakes': new FormControl(null),
      'powerfulAuxiliaryBrakes': new FormControl(null),
      'airConditioning': new FormControl(null),
      'powerSteering': new FormControl(null),
      'electricWindows': new FormControl(null),
      'electricMirrors': new FormControl(null),
      'travelComputer': new FormControl(null),
      'tachograph': new FormControl(null),
      'cruiseControl': new FormControl(null),
      'navigation': new FormControl(null),
      'sunroof': new FormControl(null),
      'glazed': new FormControl(null),
      'tintedWindows': new FormControl(null),

      'leftSlidingDoor': new FormControl(null),
      'rightSlidingDoor': new FormControl(null),
      'allWheelDrive': new FormControl(null),
      'reinforcedRearSuspension': new FormControl(null),
      'roofRack': new FormControl(null),
      'towHitch': new FormControl(null),
      'tarpaulin': new FormControl(null),
      'cargoAreaProtection': new FormControl(null),
      'tailLift': new FormControl(null),
      'crane': new FormControl(null),
      'fogLights': new FormControl(null),
      'xenonLights': new FormControl(null),
      'lightSensors': new FormControl(null),
      'rainSensors': new FormControl(null),
      'parkingSensors': new FormControl(null),

      'webasto': new FormControl(null),
      'seatHeating': new FormControl(null),
      'sleepingBed': new FormControl(null),
      'dvdTv': new FormControl(null),
      'radioCassettePlayer': new FormControl(null),
      'radioCd': new FormControl(null),
      'cdChanger': new FormControl(null),
      'credit': new FormControl(null),
      'leasing': new FormControl(null),
      'salesMethod': new FormControl(null),
      'price': new FormControl(null),
      'priceWithOrWithoutTax': new FormControl(null),
      'fixedPrice': new FormControl(null),
      'exchange': new FormControl(null),

      'description': new FormControl(null, Validators.maxLength(500)),
      'address': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      'zipCode': new FormControl(null, Validators.maxLength(50)),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'mobilePhone': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'mobilePhone2': new FormControl(null, Validators.maxLength(50)),
      'phoneNumber': new FormControl(null, Validators.maxLength(50)),
      'phoneNumber2': new FormControl(null, Validators.maxLength(50)),
      'fax': new FormControl(null, Validators.maxLength(50)),
      'firstName': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'lastName': new FormControl(null, [Validators.required, Validators.maxLength(50)])

    })
  }

}
