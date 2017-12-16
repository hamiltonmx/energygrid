import { GraficosPage } from './../graficos/graficos';
import { ConfigPage } from './../config/config';
import { DicasPage } from './../dicas/dicas';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertasPage } from '../alertas/alertas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Dicas(){
        this.navCtrl.push(DicasPage);
  }

  Graficos(){
        this.navCtrl.push(GraficosPage);
  }

  Alertas(){
        this.navCtrl.push(AlertasPage);
  }

  Config(){
        this.navCtrl.push(ConfigPage);
  }  

}
