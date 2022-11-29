import { Injectable, EventEmitter } from '@angular/core';
import { Item } from '../interfaces/iItem';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {
  emitirItemAdicionado = new EventEmitter();
  emitirItemComprado = new EventEmitter();
  private listaDeCompra: Item[] = [
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

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  pushListaDeCompras(item: Item){
    this.datarProduto(item);
    this.listaDeCompra.push(item);
    this.emitirItemAdicionado.emit(item);
  }

  private datarProduto(item: Item){
    item.data = new Date().toLocaleString('pt-BR');
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

  checkar(item: Item){
    const itemCheckado = item;
    console.log(itemCheckado);

    for(let item of this.listaDeCompra){
      if(item.id === itemCheckado.id){
        item.comprado = itemCheckado.comprado;
      }
    }
    this.emitirItemComprado.emit(item);
  }

  // deleteItem(id: any){
  //   const url = `${this.urlJSON}/${id}`;
  //   return this.http.delete(url);
  // }

  excluir(item: any) {
    const indexItem = this.listaDeCompra.findIndex((i)=> i.id === item.id);
    this.listaDeCompra.splice(indexItem, 1)
  }
}
