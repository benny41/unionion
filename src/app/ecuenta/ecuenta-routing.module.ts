import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcuentaPage } from './ecuenta.page';

const routes: Routes = [
  {
    path: '',
    component: EcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcuentaPageRoutingModule {}
