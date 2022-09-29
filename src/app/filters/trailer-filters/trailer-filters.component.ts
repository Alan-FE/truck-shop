import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { TrailerAdService } from 'src/app/service/trailer-ad.service';
import { TruckAdService } from 'src/app/service/truck-ad.service';
import { FiltersDataService } from '../service/filters-data.service';

@Component({
  selector: 'app-trailer-filters',
  templateUrl: './trailer-filters.component.html',
  styleUrls: ['./trailer-filters.component.scss']
})
export class TrailerFiltersComponent implements OnInit {
  trailersForm: FormGroup | any;
  trailersBrand: string[] = this.data.trailersBrand;
  years: number[] = this.data.years;
  newOrUsedTrailers: string[] = this.data.newOrUsedTrailers;
  trailersType: string[] = this.data.trailersType;
  none: any = 'none';

  constructor(private data: FiltersDataService, 
              private trailerAdService: TrailerAdService,
              private sharedService: SharedService) {
    this.trailersForm = new FormGroup({
      'brand': new FormControl(null),
      'model': new FormControl(null),
      'priceTo': new FormControl(null),
      'yearFrom': new FormControl(null),
      'yearTo': new FormControl(null),
      'type': new FormControl(null),
      'country': new FormControl(null),
      'usedAndNew': new FormControl(null),
      'credit': new FormControl(null),
      'leasing': new FormControl(null),

    })
  }

  ngOnInit(): void {
  }

  searchTrailers() {
    let formData  = this.trailersForm.value;
    let obj = {
      filter: {
        brand: formData.brand,
        model: formData.model,
        price_to: formData.priceTo,
        year_from: formData.yearFrom,
        year_to: formData.yearTo,
        type: formData.type,
        country: formData.country,
        credit: formData.credit,
        leasing: formData.leasing
  
      }
    }

    this.trailerAdService.getTrailerAds(obj).subscribe((response: any) => {
      if(response.result) {
        this.sharedService.subject.next(response.result)
      }
      console.log(response);
    });
    console.log(obj);
  }

}
