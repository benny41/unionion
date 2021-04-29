import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcuentaPageRoutingModule } from './ecuenta-routing.module';

import { EcuentaPage } from './ecuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcuentaPageRoutingModule
  ],
  declarations: [EcuentaPage]
})
export class EcuentaPageModule {}
