import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailerAdService } from '../service/trailer-ad.service';

@Component({
  selector: 'app-trailer-description',
  templateUrl: './trailer-description.component.html',
  styleUrls: ['./trailer-description.component.scss']
})
export class TrailerDescriptionComponent implements OnInit {
  imagesArr: any;
  adObj: any;
  conditionArr: any[] = [];
  equipmentArr: any[] = [];

  constructor(private route: ActivatedRoute, private trailersAdService: TrailerAdService) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.trailersAdService.getTrailerById(id).subscribe((response: any) => {
      this.adObj = response.result
      this.imagesArr = response.result.images;
      this.conditionArr = this.conditionCheckBox(this.adObj);
      this.equipmentArr = this.equipmentCheckBox(this.adObj);
      console.log(response.result);
    });
  }

  conditionCheckBox(adObj: any) {
    let index = 0;
    let arr: any[] = [];
    let obj: any = {
      key1: adObj.first_owner,
      key2: adObj.purchased_new,
      key3: adObj.warranty,
      key4: adObj.service_book,
    };
    let checkBoxValues = ['First owner', 'Purchased new', 'Warranty', 'Service book']


    for(let key in obj) {
      console.log(obj[key]);
      if(obj[key]) {
        arr.push(checkBoxValues[index]);
      }
      index++;
    }
    console.log(arr);
    return arr;
  };

  equipmentCheckBox(adObj: any) {
    let index = 0;
    let arr: any[] = [];
    let obj: any = {
      key1: adObj.ABS,
      key2: adObj.EBS,
      key3: adObj.disk_brakes,
      key4: adObj.air_suspension,
      key5: adObj.parking_sensors,
      key6: adObj.tarpaulin,
      key7: adObj.crane,
      key8: adObj.tail_lift
    };

    let checkBoxValues = ['ABS', 'EBS', 'Disk brakes', 'Air suspension', 'Parking sensors', 'Tarpaulin', 'Crane', 'Tail lift'];


    for(let key in obj) {
      console.log(obj[key]);
      if(obj[key]) {
        arr.push(checkBoxValues[index]);
      }
      index++;
    }
    console.log(arr);
    return arr;
  }

}
