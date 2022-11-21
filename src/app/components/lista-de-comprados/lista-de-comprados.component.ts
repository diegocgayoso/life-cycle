import { ListaDeCompraService } from './../../services/lista-de-compra.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-comprados',
  templateUrl: './lista-de-comprados.component.html',
  styleUrls: ['./lista-de-comprados.component.css']
})
export class ListaDeCompradosComponent implements OnInit {
  listaDeComprados!: any;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnInit(): void {
    this.listaDeCompraService.getListaDeCompra().subscribe((result) => {
      console.log(result);
      this.listaDeComprados = result;
    })
  }

}
