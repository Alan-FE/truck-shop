import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PartsAdService } from 'src/app/service/parts-ad.service';
import { SharedService } from 'src/app/service/shared.service';
import { FiltersDataService } from '../../service/filters-data.service';

@Component({
  selector: 'app-tire-filter',
  templateUrl: './tire-filter.component.html',
  styleUrls: ['./tire-filter.component.scss']
})
export class TireFilterComponent implements OnInit {
  tireForm: FormGroup;
  tiresWidth: number[] = this.data.tiresWidth;
  tiresHeight: number[] = this.data.tiresHeight;
  diameters: number[] = this.data.diameters;
  none: any  = 'none';

  constructor(private data: FiltersDataService, 
              private partsAdService: PartsAdService,
              private sharedService: SharedService) {
    this.tireForm = new FormGroup({
      'tireCategory': new FormControl(null),
      'season': new FormControl(null),
      'width': new FormControl(null),
      'height': new FormControl(null),
      'diameter': new FormControl(null),
      'used': new FormControl(null),
      'new': new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  search() {
    let formData = this.tireForm.value;
    let obj = {
      filter: {
        category: 'tires',
        tire_category: formData.tireCategory,
        season: formData.season,
        width: formData.width,
        height: formData.height,
        diameter: formData.diameter,
        used: formData.used,
        new: formData.new
      }
    }
    console.log(obj)
    this.partsAdService.getTireRimAds(obj).subscribe((response: any) => {
      if(response.result) {
        this.sharedService.subject.next(response.result)
      }
      console.log(response);
    })
  }

}
