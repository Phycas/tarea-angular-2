import { Component } from '@angular/core';
import { IndicadorsService } from './indicadors.service';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Super Consulta';
    indicador = '';
    dateInspect = '';
    valueUf = this.indicadorsService.buscarIndicador('uf', '11-11-2011');

     //constructor(private http: Http) {}
     constructor(private indicadorsService: IndicadorsService, private http: Http) { }
     prueba(): void{
     this.title = this.indicadorsService.getAlgo();
     }


     searchIndicator() {
       this.indicadorsService.buscarIndicador2(this.indicador, this.dateInspect)
       .subscribe(
           (res: Response) => {
             const valueIndicator = res.json();
             console.log(valueIndicator);
             this.valueUf = valueIndicator['serie'][0]['valor'];
            }, err => {
             console.log('UPS!');
             console.log(err);
           }, () => {
             console.log('¡Servicio Finalizado!');
           }
       );
     }

    searchIndicator2(){
    this.valueUf = this.indicadorsService.buscarIndicador(this.indicador, this.dateInspect);
    }

}
