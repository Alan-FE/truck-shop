import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TruckAdService } from '../service/truck-ad.service';

@Component({
  selector: 'app-ad-description',
  templateUrl: './ad-description.component.html',
  styleUrls: ['./ad-description.component.scss']
})
export class AdDescriptionComponent implements OnInit {
  imagesArr: any;
  adObj: any;
  securityArr: any[] = [];
  equipmentArr: any[] = [];
  conditionArr: any[] = [];

  constructor(private route: ActivatedRoute,
              private truckAdService: TruckAdService) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.truckAdService.getTruckById(id).subscribe((response: any) => {
      this.imagesArr = response.result.images;
      this.adObj = response.result;
      this.securityArr = this.securityCheckBox(this.adObj);
      this.equipmentArr = this.equipmentCheckBox(this.adObj);
      this.conditionArr = this.conditionCheckBox(this.adObj);
      console.log(response.result);
    });
  };



  securityCheckBox(adObj: any) {
    let index = 0;
    let arr: any[] = [];
    let obj: any = {
      key1: adObj.airbar,
      key2: adObj.coded_key,
      key3: adObj.central_locking,
      key4: adObj.alarm,
      key5: adObj.ABS,
      key6: adObj.ESP,
      key7: adObj.ASR,
      key8: adObj.pneumatic_brakes,
      key9: adObj.powerful_auxillary  
    };
    let checkBoxValues = ['Airbag', 'Coded key', 'Central locking', 'Alarm', 'ABS', 
    'ESP', 'ASR', 'Pneumatic brakes', 'Powerful auxillary']


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
      key1: adObj.air_conditioning,
      key2: adObj.power_steering,
      key3: adObj.electric_windows,
      key4: adObj.electric_mirrors,
      key5: adObj.travel_computer,
      key6: adObj.tachograph,
      key7: adObj.cruise_control,
      key8: adObj.cargo_protection,
      key9: adObj.crane,
      key10: adObj.fog_lights,
      key11: adObj.xenon_lights,
      key12: adObj.webasto,
      key13: adObj.seat_heating,
      key14: adObj.sleeping_cabin,
      key15: adObj.radio_cd,
      key16: adObj.navigation,
      key17: adObj.sunroof,
      key18: adObj.glazed,
      key19: adObj.tinted_windows,
      key20: adObj.left_side_sliding_door,
      key21: adObj.right_side_sliding_door,
      key22: adObj.all_wheel_drive,
      key23: adObj.reinforced_rear,
      key24: adObj.roof_rack,
      key25: adObj.tow_hitch,
      key26: adObj.tarpaulin,
      key27: adObj.tall_lift,
      key28: adObj.rain_sensors,
      key29: adObj.parking_sensors,
      key30: adObj.sleeping_bed,
      key31: adObj.dvd_tv,
      key32: adObj.radio_cassette,
      key33: adObj.cd_changer,
      key34: adObj.radio_connection,
      key35: adObj.hydraulic_lifters,
      key36: adObj.tv,
      key37: adObj.dvd,
    };

    let checkBoxValues = ['Air conditioning', 'Power steering', 'Electric windows', 'Electric mirrors', 'Travel computer', 
    'Tachograph', 'Cruise control', 'Cargo protection', 'Crane', 'Fog lights', 'Xenon lights', 'Webasto', 'Seat heating',
  'Sleeping cabin', 'Radio cd', 'Navigation', 'Sunroof', 'Glazed', 'Tinted windows', 'Left side sliding door',
  'Right side sliding door', 'All-wheel drive', 'Reinforced rear suspension', 'Roof rack', 'Tow hitch', 'Tarpaulin',
  'Tail lift', 'Rain sensors', 'Parking sensors', 'Sleeping_bad', 'DVD/TV', 'Radio/Cassette player', 'CD changer', 
  'Radio connection', 'TV', 'DVD']


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

  conditionCheckBox(adObj: any) {
    let index = 0;
    let arr: any[] = [];
    let obj: any = {
      key1: adObj.first_owner,
      key2: adObj.purchased_new,
      key3: adObj.warranty,
      key4: adObj.garaged,
      key5: adObj.service_book,
      key6: adObj.spare_key,
    };
    let checkBoxValues = ['First owner', 'Purchased new', 'Warranty', 'Garaged', 'Service book', 'Spare key']


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
