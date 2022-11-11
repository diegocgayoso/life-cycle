import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListaDeCompra } from 'src/app/interfaces/IProdutos';

@Component({
  selector: 'app-lista-de-comprados',
  templateUrl: './lista-de-comprados.component.html',
  styleUrls: ['./lista-de-comprados.component.css']
})
export class ListaDeCompradosComponent implements OnInit {
  listaDeComprados!: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<ListaDeCompra>('../../../assets/dados/lista-de-compra.json').subscribe((result)=> {
      console.log(result);
      this.listaDeComprados = result;
      console.log(this.listaDeComprados);
    })
  }

}
