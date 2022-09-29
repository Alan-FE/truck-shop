import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PartsAdService } from 'src/app/service/parts-ad.service';
import { SharedService } from 'src/app/service/shared.service';
import { FiltersDataService } from '../../service/filters-data.service';

@Component({
  selector: 'app-rims-filter',
  templateUrl: './rims-filter.component.html',
  styleUrls: ['./rims-filter.component.scss']
})
export class RimsFilterComponent implements OnInit {
  rimsForm: FormGroup;
  diameters: number[] = this.data.diameters;
  none: any = 'none';

  constructor(private data: FiltersDataService, 
              private partsAdService: PartsAdService,
              private sharedService: SharedService) {
    this.rimsForm = new FormGroup({
      'type': new FormControl(null),
      'diameter': new FormControl(null),
      'noAndRangeOfHoles': new FormControl(null),
      'brands': new FormControl(null),
      'used': new FormControl(null),
      'new': new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  search() {
    let formData = this.rimsForm.value;
    let obj = {
      filter: {
        category: 'rims',
        type: formData.type,
        diameter: formData.diameter,
        range_holes: formData.noAndRangeOfHoles,
        brand: formData.brand,
        used: formData.used,
        new: formData.new
      }
    }

    this.partsAdService.getTireRimAds(obj).subscribe((response: any)=> {
      if(response.result) {
        this.sharedService.subject.next(response.result)
      }
      console.log(response)
    })

    console.log(this.rimsForm.value);
  }

}
