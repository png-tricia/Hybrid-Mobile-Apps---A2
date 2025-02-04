import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  /* VARIABLES */
  showInputBoxHowl: boolean = false;
  showInputBoxSophie: boolean = false;

  hideButtonHowl: boolean = true;
  hideButtonSophie: boolean = true;
  date = new Date().toLocaleTimeString();

  /* this variable is for inputting the messages in the html page */
  HowlMsg!: any;
  SophieMsg!: any;

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

  /* ADD HOWL AND SOPHIE AS MEMBERS IN THE GROUPCHAT AND ALLOW THEM TO ENTER MESSAGES */
  newMessageHowl() {
    this.serv.setMessage('\n' + this.HowlMsg + ' ' + this.date + '-Howl');
    this.HowlMsg = ''; // clear the input field
  }
  newMessageSophie() {
    this.serv.setMessage('\n' + this.SophieMsg + ' ' + this.date + '-Sophie');
    this.SophieMsg = ''; // clear the input field
  }

  newMemberHowl() {
    this.serv.setMember('\n' + 'Howl ' + this.date);
  }
  newMemberSophie() {
    this.serv.setMember('\n' + 'Sophie ' + this.date);
  }

  /* When the JOIN CONVERSATION button is clicked: add member, hide join button and show Input TextBox */
  transformHowl() {
    this.showInputBoxHowl = true;
    this.newMemberHowl();
    this.hideButtonHowl = !this.hideButtonHowl;
  }

  transformSophie() {
    this.showInputBoxSophie = true;
    this.newMemberSophie();
    this.hideButtonSophie = !this.hideButtonSophie;
  }
}
