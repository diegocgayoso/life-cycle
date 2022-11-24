import { Item } from './../../interface/iItem';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output() aoEditar = new EventEmitter();
  @Output() aoExcluir = new EventEmitter();
  @Output() aoMarcarComoComprado = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  @Input() item!: Item;
  oldValorComprado!: boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.oldValorComprado = this.item.comprado;
  }

  checked(){
    if(!this.item.comprado){
      this.item.comprado = true;
      this.aoMarcarComoComprado.emit(this.item)
    }
  }

  editar(){
    this.aoEditar.emit(this.item);
  }

  excluir(){
    this.aoExcluir.emit(this.item);
  }

  ngDoCheck(): void {
    if(this.oldValorComprado === false && this.oldValorComprado !== this.item.comprado){
      this.checked();
    }
  }

}
