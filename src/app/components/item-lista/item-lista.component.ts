import { ListaDeCompra } from './../../interfaces/IProdutos';
import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers } from '@angular/core'; import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit, DoCheck {
  faPen = faPen;
  faTrash = faTrash

  @Input() produto!: ListaDeCompra;
  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    // console.log(this.produto);
    console.log('ngDoCheck');
  }

  checked() {
    // console.log('tentou alterar esse aqui oh!');
    if(!this.produto.comprado)
    this.produto = {id: this.produto.id, nome: this.produto.nome, comprado: true, data: 'Segunda-feira (31/10/2022) às 08:30'};
    // {
    //   this.produto.comprado = true
    // }
  }

  arr: any = [10];
  addArray(){
    this.arr.push(12);
    console.log(this.arr);

  }

  editItem() {
    console.log(this.produto);
  }

  deleteItem() {
    console.log(`Excluir item: id`);
  }
}


