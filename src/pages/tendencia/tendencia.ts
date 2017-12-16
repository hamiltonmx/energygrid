import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TendenciaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tendencia',
  templateUrl: 'tendencia.html',
})
export class TendenciaPage {

  chartOptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.chartOptions = {
          chart: {
              type: 'spline'
          },
          title: {
              text: ' '
          },
          credits: {
              enabled: false
          },
          xAxis: {
              categories: [
                  '01',
                  '03',
                  '06',
                  '09',
                  '12',
                  '15',
                  '18',
                  '21',
                  '24',
                  '27',
                  '30',
                  '31',
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Escala',
                  enabled: false
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} kW</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.1,
                  borderWidth: 0,
              }
          },
          series: [{
              name: 'Média',
              color: '#f3750a',
              data: [37, 21, 32, 42, 54, 65, 83, 95, 153, 165, 201, 197]
          },{
              name: 'Seg. 27 Jun',
              color: '#ecba00',
              data: [30, 20, 25, 39, 52, 40, 63, 70, 250, 270, 0, 0]

          },]
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TendenciaPage');
  }

}
