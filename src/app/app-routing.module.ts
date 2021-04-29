import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registertest',
    loadChildren: () => import('./auth/registertest/registertest.module').then( m => m.RegistertestPageModule)
  },
  {
    path: 'ecuenta',
    loadChildren: () => import('./ecuenta/ecuenta.module').then( m => m.EcuentaPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
