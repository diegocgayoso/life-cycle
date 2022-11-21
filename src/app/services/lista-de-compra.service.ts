import { Produto } from './../interfaces/IProdutos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {
  urlJSON = 'http://localhost:3000/listadecompra';
  constructor(
    private http: HttpClient,
  ) {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.http.get<Produto>(this.urlJSON);
  }

  pushListaDeCompras(item: Produto){
    this.datarProduto(item);
    return this.http.post<Produto>(this.urlJSON, item);
  }

  private datarProduto(item: Produto){
    item.data = new Date().toLocaleString('pt-BR');
  }

  editItem(item: Produto){
    const url = `${this.urlJSON}/${item.id}`;
    return this.http.put(url, item);
  }

  deleteItem(id: any){
    const url = `${this.urlJSON}/${id}`;
    return this.http.delete(url);
  }
}
