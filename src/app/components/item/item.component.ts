import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(){ }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem() {
    // if(this.item.comprado){
    //   this.item = {
    //     id: this.item.id,
    //     nome: this.item.nome,
    //     data: this.item.data,
    //     comprado: false,
    //   }
    // }else{
    //   this.item = {
    //     id: this.item.id,
    //     nome: this.item.nome,
    //     data: this.item.data,
    //     comprado: true,
    //   }
    // }
    this.item.comprado = !this.item.comprado;
    this.listaService.editarItemDaLista(this.item, this.item.nome );
  }
}
