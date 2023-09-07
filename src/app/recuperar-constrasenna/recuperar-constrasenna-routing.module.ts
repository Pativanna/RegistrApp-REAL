import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarConstrasennaPage } from './recuperar-constrasenna.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarConstrasennaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarConstrasennaPageRoutingModule {}
