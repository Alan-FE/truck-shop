import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/service/auth.service';
import { MessagesService } from 'src/app/service/messages.service';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private messageService: MessagesService,
              private authService: AuthService,
              public dialogRef: MatDialogRef<MessageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ImageCarouselComponent,
              private _snackBar: MatSnackBar) {
    this.messageForm = new FormGroup({
      'message': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(500)])
    })
  }

  ngOnInit(): void {
 
  }



  send() {
    //Prevent user to send message yourself
    if(this.authService.userData.id !== +this.data.createdBy) {
      let obj = {
        from: this.authService.userData.id,
        to: this.data.createdBy,
        message: this.messageForm.value.message
      };
      this.messageService.sendMessage(obj).subscribe((response: any)=> {
        if(response.result) {
          console.log(response)
          this.dialogRef.close();
          this._snackBar.open(response.message + '!', 'Close',{
            duration: 3000
          });
        } else {
          this._snackBar.open(response.message, 'Close',{
            duration: 3000
          });
        }
      });
    } else {
      this._snackBar.open("You can't write a message to yourself!", 'Close',{
        duration: 3000
      });
    }
  }
}
