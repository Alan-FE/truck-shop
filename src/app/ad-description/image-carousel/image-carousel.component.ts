import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ImageItem } from 'ng-gallery';
import { AuthService } from 'src/app/service/auth.service';
import { FavoritesService } from 'src/app/service/favorites.service';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCarouselComponent implements OnInit {
  items: any;
  @Input() imageData: any;
  @Input() obj: any;

  createdBy: any;

  constructor(private favoritesService: FavoritesService,
              private authService: AuthService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private router: Router) {}

  ngOnInit() {
    console.log(this.imageData)
    this.items = this.imageData.map((item: any) => new ImageItem({ src: item, thumb: item }));
    console.log(this.obj);
  };

  addToFavorites() {
    //Prevent user to add own ad to favorites
    if(this.authService.loggedUser) {
      if(this.authService.userData.id !== +this.obj.created_by) {
        let obj = {
          category: this.obj.cdl_category,
          id: this.obj.id,
          account_id: this.authService.userData.id
        }
        this.favoritesService.addToFavorites(obj);
      } else {
        this._snackBar.open("You can't add to favorites your ad!", 'Close',{
          duration: 3000
        });
      };
    } else {
      this._snackBar.open("You must be logged in to add favorites!", 'Close',{
        duration: 3000
      });
    }
  };
  //Dialog
  openDialog(): void {
    if(this.authService.loggedUser) {
      this.dialog.open(MessageDialogComponent, {
        width: '450px',
        data: {
          createdBy: this.obj.created_by
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }


}