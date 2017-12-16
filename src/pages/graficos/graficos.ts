import { HistoricoPage } from './../historico/historico';
import { MensalPage } from './../mensal/mensal';
import { TendenciaPage } from './../tendencia/tendencia';
import { ConfigPage } from './../config/config';
import { AlertasPage } from './../alertas/alertas';
import { DicasPage } from './../dicas/dicas';
import { TempoRealPage } from './../tempo-real/tempo-real';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'graficos.html'
})
export class GraficosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TempoRealPage;
  tab2Root: any = MensalPage;
  tab3Root: any = HistoricoPage;
  tab4Root: any = TendenciaPage;
 
  constructor() {
 
  }
}

