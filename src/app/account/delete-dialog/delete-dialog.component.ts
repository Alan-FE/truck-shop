import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActiveAdsComponent } from '../active-ads/active-ads.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
             @Inject(MAT_DIALOG_DATA) public data: ActiveAdsComponent) { }

  ngOnInit(): void {
  }
  //Double check before delete ad
  deleteAd() {
    let category = this.data.category;
    this.dialogRef.close({ data: category })
  }

}
