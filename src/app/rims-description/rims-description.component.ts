import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartsAdService } from '../service/parts-ad.service';

@Component({
  selector: 'app-rims-description',
  templateUrl: './rims-description.component.html',
  styleUrls: ['./rims-description.component.scss']
})
export class RimsDescriptionComponent implements OnInit, OnDestroy {
  imagesArr: any;
  adObj: any;
  subscription: any;

  constructor(private route: ActivatedRoute, private partsAdService: PartsAdService) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.subscription = this.partsAdService.getTireRimAdById(id).subscribe((response: any) => {
      this.adObj = response.result
      this.imagesArr = response.result.images;
      console.log(response.result);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
