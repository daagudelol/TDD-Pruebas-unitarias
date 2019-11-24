import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'introPruebasUnitarias';
  myVar = 'Hola Mundo'
  nombre = 'Diego'

  par(numero:number):boolean{
    return numero%2===0 ? true : false
  }
}
