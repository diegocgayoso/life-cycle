import { Item } from './interfaces/iItem';
import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from './services/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompra: Item[] = [];

  item!: any;
  itemEditar!: Item;

  constructor(private service: ListaDeCompraService){}
  ngOnInit(): void {
    this.listaDeCompra = this.service.getListaDeCompra();
    this.service.emitirItemAdicionado.subscribe(
      item => console.log(item)
    );
    this.service.emitirItemComprado.subscribe(itemComprado => console.log(itemComprado)
    )
  }
  adicionar(item: any) {
    console.log('Chegou no AppComponent o Adicionar');
    // console.log(item);
    item = this.service.criarItem(item);
    this.service.pushListaDeCompras(item);
  }

  editar(item: Item) {
    this.itemEditar = item;
  }

  editarItem(item: Item){
    this.service.editarItem(item);
  }

  checkar(item: Item){
    this.service.checkar(item);
  }

  excluir(item: any) {
    this.service.excluir(item);
  }
}
