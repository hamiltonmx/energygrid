import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from './../../providers/service/service';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  dicas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {

    this.getDados();

  }

  getDados()
  {
    this.service.getDica().subscribe(
      data=> this.dicas = data,
      err=> console.log(err)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

}
