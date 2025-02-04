import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActionsheetComponent } from './actionsheet/actionsheet.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { NetworkComponent } from './network/network.component';

@NgModule({
  declarations: [ActionsheetComponent, ToastComponent, NetworkComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [ActionsheetComponent, ToastComponent, NetworkComponent],
})
export class NativeModule {}
