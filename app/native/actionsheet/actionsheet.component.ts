import { Component, OnInit } from '@angular/core';
import {
  ActionSheet,
  ActionSheetOptions,
} from '@awesome-cordova-plugins/action-sheet/ngx';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.component.html',
  styleUrls: ['./actionsheet.component.scss'],
})
export class ActionsheetComponent implements OnInit {
  constructor(private actionSheet: ActionSheet) {}

  openActionSheet() {
    let buttonLabels = ['Add', 'Change'];
    const options: ActionSheetOptions = {
      title: 'Action Sheet Title',
      subtitle: 'Choose an action',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      addDestructiveButtonWithLabel: 'Delete',
      destructiveButtonLast: true,
    };
    this.actionSheet.show(options).then((buttonIndex: number) => {
      console.log('Button pressed: ' + buttonIndex);
    });
  }

  ngOnInit() {}
}
