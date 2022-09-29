import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAccountDialogComponent } from '../delete-account-dialog/delete-account-dialog.component';
@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDeleteDialog() {
      this.dialog.open(DeleteAccountDialogComponent, {
        width: '250px',
      });
  }

}
