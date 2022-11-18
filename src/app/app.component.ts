import { ListaDeCompraService } from './services/lista-de-compra.service';
import { ListaDeCompra } from 'src/app/interfaces/IProdutos';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'life-cycle';
  item!: ListaDeCompra;
  listaDeCompras: any;
  faPen = faPen;
  faTrash = faTrash

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void {
    this.service.getListaDeCompra().subscribe(
      (res) => {
        this.listaDeCompras = res
        // console.log(this.listaDeCompras)
      }
    );
  }

  // editItem(_t9: any) {
  //   console.log(`Editar item: ${_t9.id}`);
  // }
  // deleteItem(_t9: any) {
  //   console.log(`Excluir item: ${_t9.id}`);
  // }
}


