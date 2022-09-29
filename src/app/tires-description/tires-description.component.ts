import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartsAdService } from '../service/parts-ad.service';

@Component({
  selector: 'app-tires-description',
  templateUrl: './tires-description.component.html',
  styleUrls: ['./tires-description.component.scss']
})
export class TiresDescriptionComponent implements OnInit {
  imagesArr: any;
  adObj: any;

  constructor(private route: ActivatedRoute, private partsAdService: PartsAdService) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.partsAdService.getTireRimAdById(id).subscribe((response: any) => {
      this.adObj = response.result
      this.imagesArr = response.result.images;
      console.log(response.result);
    });
  }

}
