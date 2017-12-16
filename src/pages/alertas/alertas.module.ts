import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertasPage } from './alertas';

@NgModule({
  declarations: [
    AlertasPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertasPage),
  ],
  exports: [
    AlertasPage
  ]
})
export class AlertasPageModule {}
