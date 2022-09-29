import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/service/auth.service';
import { PartsAdService } from 'src/app/service/parts-ad.service';
import { SharedService } from 'src/app/service/shared.service';
import { TrailerAdService } from 'src/app/service/trailer-ad.service';
import { TruckAdService } from 'src/app/service/truck-ad.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-active-ads',
  templateUrl: './active-ads.component.html',
  styleUrls: ['./active-ads.component.scss']
})
export class ActiveAdsComponent implements OnInit {
  trucksAds: any[] = [];
  trailersAds: any[] = [];
  tiresAds: any[] = [];
  rimsAds: any[] = [];
  partsAds: any[] = [];

  category: any;

  id: any;

  constructor(private sharedService: SharedService, 
              public dialog: MatDialog,
              private authService: AuthService, 
              private truckAdService: TruckAdService,
              private trailerAdService: TrailerAdService,
              private partsAdService: PartsAdService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let id = this.authService.userData.id;
    this.id = id;
    this.getAdsByAccount(id);
  };

  getAdsByAccount(id: number) {
    this.sharedService.getAdsByAccount(id).subscribe((response: any) => {
      this.trucksAds = response.result.trucks;
      this.trailersAds = response.result.trailers;
      this.tiresAds = response.result.tires;
      this.rimsAds = response.result.rims;
      this.partsAds = response.result.parts;
      console.log(response)
    })
  }

  openDialog(ad: any, category: string): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {
        category: category
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      if(result.data == 'Truck') {
        console.log(result);
        this.deleteTruckAd(ad);
      };

      if(result.data == 'Trailer') {
        this.deleteTrailerAd(ad);
      };  

      if(result.data == 'Tire' || result.data == 'Rim') {
        this.deleteTireRimAd(ad);
      };

      if(result.data == 'Parts') {
        this.deletePartsAd(ad);
      };

    });
  };

  deleteTruckAd(ad: any) {
    let obj = {
      id: ad.id,
      account_id: this.authService.userData.id
    }
    this.truckAdService.deleteTruckAd(obj).subscribe((response: any) => {
      console.log(response);
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
        this.getAdsByAccount(this.id);
      } else {
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
      }
    });;
  };

  deleteTrailerAd(ad: any) {
    let obj = {
      id: ad.id,
      account_id: this.authService.userData.id
    };
    this.trailerAdService.deleteTrailerAd(obj).subscribe((response: any) => {
      console.log(response);
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
        this.getAdsByAccount(this.id);
      } else {
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
      }
    });;
  };

  deleteTireRimAd(ad: any) {
    let obj = {
      id: ad.id,
      account_id: this.authService.userData.id
    };
    this.partsAdService.deleteTireRimAd(obj).subscribe((response: any) => {
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
        this.getAdsByAccount(this.id);
      } else {
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
      }
    });;
  };

  deletePartsAd(ad: any) {
    let obj = {
      id: ad.id,
      account_id: this.authService.userData.id
    };
    this.partsAdService.deletePartAd(obj).subscribe((response: any) => {
      console.log(response);
      if(response.result) {
        console.log(response)
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
        this.getAdsByAccount(this.id);
      } else {
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
      }
    });;
  };

}
