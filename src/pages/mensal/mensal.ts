import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from './../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-mensal',
  templateUrl: 'mensal.html',
})
export class MensalPage {

  chartOptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {


    this.service.getLeituraDiaria().subscribe(
        data=> {
  
          let categorias: string[] = [];
          let dados: number[] = [];
  
          let contador = 0;
  
          for(const leitura of data) {
            if(contador == 10) break;
  
            categorias.push(leitura.dia);
            dados.push(parseFloat(leitura.soma));
  
            contador++;
          }
  
          console.log(categorias, dados);    

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
              categories: categorias,
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
              name: 'Meu Consumo',
              color: '#ecba00',
              data: dados
          }]
        }
      },
      err=> console.log(err)
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensalPage');
  }

}
