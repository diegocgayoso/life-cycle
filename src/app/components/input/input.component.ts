import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
  Input,
  SimpleChanges
} from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  textoBotao = 'Salvar item'
  item!: string;
  @Input() itemEditar!: Item;
  @Input() editando: boolean = false;

  itemEditado!: Item;
  @Output() aoAdicionar = new EventEmitter();
  @Output() aoEditar = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('fui chamado-salvar');

    if (this.item !== '') {
      console.log(this.item);

      this.aoAdicionar.emit(this.item);
    } else {
      console.log('Campo vazio');
    }
    this.limparCampo();
  }

  limparCampo() {
    this.item = '';
  }

  editarItem() {
    console.log('fui chamado- editar');

    const itemUpdate: Item = {
      id: this.itemEditado.id,
      nome: this.item,
      data: this.itemEditado.data,
      comprado: this.itemEditado.comprado,
    }
    this.aoEditar.emit(itemUpdate);
    this.editando = false;
    this.textoBotao = 'Salvar item';
    this.limparCampo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const itemEditarChanges = changes['itemEditar'].currentValue;
    if (itemEditarChanges !== undefined && !changes['itemEditar'].firstChange) {
      this.editando = true;
      this.textoBotao = "Editar item";
      this.item = itemEditarChanges.nome;
      this.itemEditado = itemEditarChanges;
    }
  }
}
