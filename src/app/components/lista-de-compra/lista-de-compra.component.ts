import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListaDeCompra } from 'src/app/interfaces/IProdutos';

@Component({
  selector: 'app-lista-de-compra',
  templateUrl: './lista-de-compra.component.html',
  styleUrls: ['./lista-de-compra.component.css']
})
export class ListaDeCompraComponent implements OnInit {
  listaDeCompras!: any;

  faPen = faPen;
  faTrash = faTrash

  constructor( private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<ListaDeCompra>('../../../assets/dados/lista-de-compra.json').subscribe((result)=> {
      console.log(result);
      this.listaDeCompras = result;
      // console.log(this.listaDeCompras);-
    })
  }
}
