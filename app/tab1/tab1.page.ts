import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  /* VARIABLES */
  showInputBox: boolean = false;
  hideButton: boolean = true;
  date = new Date().toLocaleTimeString();

  /* this variable is for inputting the messages in the html page */
  myMsg!: any;

  messages!: any;
  members!: any;
  constructor(private serv: DataService) {}
  ngOnInit() {
    this.serv.asObserver.subscribe({
      next: (message) => {
        if (this.messages == undefined) {
          this.messages = '';
        }
        this.messages += message;
      },
    });
    this.serv.asMember.subscribe({
      next: (member) => {
        if (this.members == undefined) {
          this.members = '';
        }
        this.members += member;
      },
    });
  }

  /* ADD PATRICIA AS A MEMBER IN THE GROUPCHAT AND ALLOW THEM TO ENTER MESSAGES */
  newMessage() {
    this.serv.setMessage('\n' + this.myMsg + ' ' + this.date + '-Patricia');
    this.myMsg = ''; // clear the input field
  }
  newMember() {
    this.serv.setMember('\n' + 'Patricia ' + this.date);
  }

  /* When the JOIN CONVERSATION button is clicked: add member, hide join button and show Input TextBox */
  transform() {
    this.showInputBox = true;
    this.newMember();
    this.hideButton = !this.hideButton;
  }
}
