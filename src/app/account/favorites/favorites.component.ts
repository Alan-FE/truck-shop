import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/service/auth.service';
import { FavoritesService } from 'src/app/service/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  subscription: any;
  trucksAds: any[] = [];
  trailersAds: any[] = [];
  tiresAds: any[] = [];
  rimsAds: any[] = [];
  partsAds: any[] = [];

  id: any;

  constructor(private favoritesService: FavoritesService, 
              private authService: AuthService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let id = this.authService.userData.id;
    this.id = id;
    this.getFavorites(id);
  };

  getFavorites(id: number) {
    this.subscription = this.favoritesService.getFavorites(id).subscribe((response: any) => {
      console.log(response);
      
      this.trucksAds = response.result.trucks;
      this.trailersAds = response.result.trailers;
      this.tiresAds = response.result.tires;
      this.rimsAds = response.result.rims;
      this.partsAds = response.result.parts;
    })
  }
  //Remove from favorites
  removeFromFavorites(ad: any) {
    let obj = {
      category: ad.cdl_category,
      id: ad.id,
      account_id: this.authService.userData.id
    };
    this.favoritesService.deleteFromFavorites(obj).subscribe((response: any) => {
      if(response.result) {
        console.log(response)
        this.getFavorites(this.id);
        this._snackBar.open(response.message + '!', 'Close',{
          duration: 3000
        });
      } else {
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
