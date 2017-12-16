
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
import { ServiceProvider } from '../providers/service/service';

@NgModule({
  declarations: [
    LoginPage,
    AlertasPage,
    MyApp,
    GraficosPage,
    DicasPage,
    MensalPage,
    TendenciaPage,
    HistoricoPage,
    TempoRealPage,
    ConfigPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), ChartModule.forRoot(highcharts),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    AlertasPage,
    MyApp,
    MensalPage,
    TendenciaPage,
    HistoricoPage,
    TempoRealPage,    
    GraficosPage,
    HomePage,
    ConfigPage,
    DicasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
