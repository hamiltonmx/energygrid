import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from './../../providers/service/service';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-alertas',
  templateUrl: 'alertas.html',
})
export class AlertasPage {

  leituras: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
  	this.getDados();
  }

  getDados()
  {
    this.service.getLeitura().subscribe(
      data=> this.leituras = data,
      err=> console.log(err)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertasPage');
  }

}
