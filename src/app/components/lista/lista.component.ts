import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnChanges {

  @Input() listaDeCompra! : Array<string>;
  constructor() { }

  ngOnInit(): void {
    console.log(this.listaDeCompra);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['listaDeCompra'].previousValue){
      console.log(this.listaDeCompra);
    }
  }

}
