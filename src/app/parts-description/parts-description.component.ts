import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartsAdService } from '../service/parts-ad.service';

@Component({
  selector: 'app-parts-description',
  templateUrl: './parts-description.component.html',
  styleUrls: ['./parts-description.component.scss']
})
export class PartsDescriptionComponent implements OnInit {
  imagesArr: any;
  adObj: any;
  subscription: any;

  constructor(private route: ActivatedRoute, private partsAdService: PartsAdService) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.subscription = this.partsAdService.getPartAdById(id).subscribe((response: any) => {
      this.adObj = response.result
      this.imagesArr = response.result.images;
      console.log(response.result);
    });
  }

}
