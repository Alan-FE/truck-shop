import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PartsAdService } from 'src/app/service/parts-ad.service';
import { SharedService } from 'src/app/service/shared.service';
import { FiltersDataService } from '../../service/filters-data.service';

@Component({
  selector: 'app-parts-filters',
  templateUrl: './parts-filters.component.html',
  styleUrls: ['./parts-filters.component.scss']
})
export class PartsFiltersComponent implements OnInit {
  partsForm: FormGroup;
  trucksCategory: string[] = this.data.trucksCategory;
  none: any = 'none';

  constructor(private data: FiltersDataService, 
              private partsAdService: PartsAdService,
              private sharedService: SharedService) {
    this.partsForm = new FormGroup({
      'category': new FormControl(null),
      'parts': new FormControl(null),
      'used': new FormControl(null),
      'new': new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  search() {
    let formData = this.partsForm.value;
    let obj = {
      filter: {
        category: formData.category,
        search: formData.parts,
        used: formData.used,
        new: formData.new
        
      }
    }

    this.partsAdService.getPartAds(obj).subscribe((response: any) => {
      if(response.result) {
        this.sharedService.subject.next(response.result);
      }
      console.log(response);
    })
    console.log(obj);
  }

}
