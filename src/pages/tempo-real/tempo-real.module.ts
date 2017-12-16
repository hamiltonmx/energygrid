import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TempoRealPage } from './tempo-real';

@NgModule({
  declarations: [
    TempoRealPage,
  ],
  imports: [
    IonicPageModule.forChild(TempoRealPage),
  ],
  exports: [
    TempoRealPage
  ]
})
export class TempoRealPageModule {}
