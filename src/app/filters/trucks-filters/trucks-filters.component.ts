import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { TruckAdService } from 'src/app/service/truck-ad.service';
import { FiltersDataService } from '../service/filters-data.service';

@Component({
  selector: 'app-trucks-filters',
  templateUrl: './trucks-filters.component.html',
  styleUrls: ['./trucks-filters.component.scss']
})
export class TrucksFiltersComponent implements OnInit {
  trucksForm: FormGroup;
  @Input() category: any;
  years: number[] = this.data.years;
  marks: string[] = this.data.brandsTo7;
  newOrUsedTrucks: string[] = this.data.newOrUsedTrucks;
  fuel: string[] = this.data.fuel;

  none: any = 'none';

  constructor(private data: FiltersDataService, 
              private truckAdService: TruckAdService,
              private sharedService: SharedService) {
    this.trucksForm = new FormGroup({
      'brand': new FormControl(null),
      'model': new FormControl(null),
      'priceTo': new FormControl(null),
      'yearFrom': new FormControl(null),
      'yearTo': new FormControl(null),
      'bodywork': new FormControl(null),
      'fuel': new FormControl(null),
      'country': new FormControl(null),
      'usedAndNew': new FormControl(null),
      'credit': new FormControl(null),
      'leasing': new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  search() {
    let formData  = this.trucksForm.value;
    let obj = {
      filter: {
        category: this.category,
        brand: formData.brand,
        model: formData.model,
        price_to: formData.priceTo,
        year_from: formData.yearFrom,
        year_to: formData.yearTo,
        bodywork: formData.bodywork,
        fuel: formData.fuel,
        country: formData.country,
        credit: formData.credit,
        leasing: formData.leasing
  
      }
    }

    this.truckAdService.getTruckAds(obj).subscribe((response: any) => {
      if(response.result) {
        this.sharedService.subject.next(response.result);
      }
      console.log(response);
    });
    console.log(obj);
  }

}
