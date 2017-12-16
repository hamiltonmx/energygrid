import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProvider {

  api:String = 'http://34pass.com.br/ws-energygrid/api/'

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getDica(){
    return this.http.get(this.api+'listar-dicas.php').map(res=>res.json())
  }

  getLeitura(){
    return this.http.get(this.api+'listar-leituras.php').map(res=>res.json())
  }

  getLeituraDiaria(){
    return this.http.get(this.api+'listar-leituras-diarias.php').map(res=>res.json())
  }  

  getLeituraSoma(){
    return this.http.get(this.api+'listar-soma-leituras.php').map(res=>res.json())
  }    

}
