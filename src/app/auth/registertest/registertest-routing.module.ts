import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistertestPage } from './registertest.page';

const routes: Routes = [
  {
    path: '',
    component: RegistertestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistertestPageRoutingModule {}
