import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root', // Seleor usado para esse componente
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit{ // Passa para o fronts
  @ViewChild("meuCanvas", {static: true}) private elemento: ElementRef;
  
  constructor() { }

  nome = 'Gráfico Legal';
  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [1, 2, 3, 4, 5 ,6]
          }
        ]
      }
    });
  }
}