import { ListaDeCompraService } from './services/lista-de-compra.service';
import { Produto } from 'src/app/interfaces/IProdutos';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'life-cycle';
  item!: Produto;
  listaDeCompras: any;
  faPen = faPen;
  faTrash = faTrash

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void {
    this.getLista()
  }
  getLista() {
    this.service.getListaDeCompra().subscribe(
      (res) => {
        this.listaDeCompras = res
      }
    );
  }
  editItem(item: any) {
    this.item = item;
  }
  deleteItem(item: any) {
    console.log(`Excluir item: ${item.id}`);
    this.service.deleteItem(item.id).subscribe(res => {
      console.log(res);
      this.getLista();
    });
  }
}


