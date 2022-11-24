import { Item } from './interfaces/iItem';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-lista-de-compras';
  listaDeCompra = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  item!: any;
  itemEditar!: Item;

  adicionar(item: any) {
    console.log('Chegou no AppComponent o Adicionar');
    console.log(item);
    item = this.criarItem(item);
    this.listaDeCompra.push(item);
  }

  criarItem(item: any) {
    const id = this.listaDeCompra.length + 1;
    const novoItem: Item = {
      id: id,
      nome: item,
      data: new Date,
      comprado: false
    }
    return novoItem;
  }

  editar(item: Item) {
    this.itemEditar = item;
  }

  checkar(item: Item){
    const itemCheckado = item;
    console.log(itemCheckado);

    for(let item of this.listaDeCompra){
      if(item.id === itemCheckado.id){
        item.comprado = itemCheckado.comprado;
      }
    }
  }

  editarItem(item: Item) {
    const itemUpdate = item;
    console.log(itemUpdate);

    for(let item of this.listaDeCompra){
      if(item.id === itemUpdate.id){
        item.nome = itemUpdate.nome;
      }
    }
  }

  excluir(item: any) {
    const indexItem = this.listaDeCompra.findIndex((i)=> i.id === item.id);
    this.listaDeCompra.splice(indexItem, 1)
  }
}
