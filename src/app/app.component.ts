import { ListaDeCompra } from 'src/app/interfaces/IProdutos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  item! : ListaDeCompra;



  editandoItem(ev: ListaDeCompra){
    console.table(ev);
    this.item = ev;
  }
}


