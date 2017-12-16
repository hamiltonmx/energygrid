import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensalPage } from './mensal';

@NgModule({
  declarations: [
    MensalPage,
  ],
  imports: [
    IonicPageModule.forChild(MensalPage),
  ],
  exports: [
    MensalPage
  ]
})
export class MensalPageModule {}
