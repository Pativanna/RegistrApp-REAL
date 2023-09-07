import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarConstrasennaPageRoutingModule } from './recuperar-constrasenna-routing.module';

import { RecuperarConstrasennaPage } from './recuperar-constrasenna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarConstrasennaPageRoutingModule
  ],
  declarations: [RecuperarConstrasennaPage]
})
export class RecuperarConstrasennaPageModule {}
