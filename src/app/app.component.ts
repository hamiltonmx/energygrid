import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AlertasPage } from '../pages/alertas/alertas';
import { DicasPage } from './../pages/dicas/dicas';
import { ConfigPage } from './../pages/config/config';
import { GraficosPage } from './../pages/graficos/graficos';
import { TempoRealPage } from './../pages/tempo-real/tempo-real';
import { HistoricoPage } from './../pages/historico/historico';
import { MensalPage } from './../pages/mensal/mensal';
import { TendenciaPage } from './../pages/tendencia/tendencia';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Principal', component: HomePage },
      //{ title: 'Dicas', component: ListPage },
      { title: 'Sair', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
