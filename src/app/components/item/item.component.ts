import { Component, EventEmitter, Input, OnInit, Output, DoCheck, KeyValueDiffers } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, DoCheck {

  @Output() aoEditar = new EventEmitter();
  @Output() aoExcluir = new EventEmitter();
  @Output() aoMarcarComoComprado = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  @Input() item!: Item;
  // oldValorComprado!: boolean;
  changelogList: Array<string> = [];

  differ: any;
  constructor(private differs: KeyValueDiffers) {
  }

  ngOnInit(): void {
    // this.oldValorComprado = this.item.comprado;
    this.differ = this.differs.find(this.item).create();
  }

  checked() {
    console.log('aaaaaaaaaaa');
    if (!this.item.comprado) {
      this.item.comprado = true;
      this.aoMarcarComoComprado.emit(this.item);
    }
  }

  editar() {
    this.aoEditar.emit(this.item);
  }

  excluir() {
    this.aoExcluir.emit(this.item);
  }

  ngDoCheck(): void {
    // if(this.item.comprado){
    //   console.log(`Item do id: ${this.item.id} é ${this.oldValorComprado}`);
    // }
    const itemChanges = this.differ.diff(this.item);
    if (itemChanges) {
      itemChanges.forEachChangedItem((changeRecord: any) => {
        this.changelogList.push('item changed: ' + changeRecord.key + ' ' + JSON.stringify(changeRecord.currentValue));
        console.log(this.changelogList);
      })
      itemChanges.forEachAddedItem((changeRecord: any) => {
        this.changelogList.push('item added: ' + changeRecord.key + ' ' + JSON.stringify(changeRecord.currentValue))
        console.log(this.changelogList);
      })
    }
  }

}
