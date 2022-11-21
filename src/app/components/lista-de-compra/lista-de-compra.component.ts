import { ListaDeCompraService } from './../../services/lista-de-compra.service';
import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Produto } from 'src/app/interfaces/IProdutos';

@Component({
  selector: 'app-lista-de-compra',
  templateUrl: './lista-de-compra.component.html',
  styleUrls: ['./lista-de-compra.component.css']
})
export class ListaDeCompraComponent implements OnInit, DoCheck {
  listaDeCompras!: any;
  @Output() aoEditarItem: any = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }
  ngDoCheck(): void {
    console.log('chamei');
  }

  ngOnInit(): void {
    this.getLista();
  }

  getLista() {
    this.listaDeCompraService.getListaDeCompra().subscribe((result) => {
      console.log(result);
      this.listaDeCompras = result;
    })
  }

  editarItem(item: any) {
    // console.log(`Editar item ${item.id}`);
    // console.table(item);
    this.aoEditarItem.emit(item);
  }

  deleteItem(item: Produto){
    console.log(`Excluir item ${item.id}`);
    this.listaDeCompraService.deleteItem(item.id).subscribe((res)=> console.log(res));
    this.listaDeCompras.splice(item.id, 1);
  }
}
