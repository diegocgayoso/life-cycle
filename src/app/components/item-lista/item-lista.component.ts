import { Produto } from './../../interfaces/IProdutos';
import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers, Output, EventEmitter } from '@angular/core'; import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit, DoCheck {
  faPen = faPen;
  faTrash = faTrash

  @Input() produto!: Produto;
  @Output() aoEditar = new EventEmitter();
  @Output() aoExcluir = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  checked() {
    if (!this.produto.comprado) {
      this.produto.comprado = true;
    }
  }

  editItem() {
    this.aoEditar.emit(this.produto);
  }

  deleteItem() {
    this.aoExcluir.emit(this.produto);
  }
}


