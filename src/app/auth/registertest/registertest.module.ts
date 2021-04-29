import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistertestPageRoutingModule } from './registertest-routing.module';

import { RegistertestPage } from './registertest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistertestPageRoutingModule
  ],
  declarations: [RegistertestPage]
})
export class RegistertestPageModule {}
