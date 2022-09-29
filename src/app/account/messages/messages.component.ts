import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  replyForm: FormGroup;
  messages: any[] = [];
  userId: any;

  constructor(private messagesService: MessagesService,
              private authService: AuthService) {
                this.replyForm = new FormGroup({
                  'message': new FormControl(null)
                })
              }

  ngOnInit(): void {
    let id = this.authService.userData.id;
    this.userId = id;

    this.messageDialog(id);
  };

  //Write a message
  messageDialog(id: any) {
    let obj = {
      account_id: id
    }
    this.messagesService.getMessageList(obj).subscribe((response: any) => {
      this.messages = response.result;
      console.log(response);
    })
  }
  //Method for reply 
  reply(to: number) {
    let obj = {
      from: this.authService.userData.id,
      to: to,
      message: this.replyForm.value.message
    };
    console.log(this.replyForm.value);
    this.messagesService.sendMessage(obj).subscribe((response: any) => {
      if(response.result) {
        
       for(let message in this.messages) {
        if(this.messages[message].id == to) {
          let obj = {from: this.authService.userData.id, message: this.replyForm.value.message, 
            timestamp: Date.now(), to:to}
          this.messages[message].messages.push(obj);
          this.replyForm.reset();
        }
       }
      }
    })
  }

}
