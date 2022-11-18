import { ListaDeCompraService } from './../../services/lista-de-compra.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ListaDeCompra } from 'src/app/interfaces/IProdutos';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  produto = '';
  @Input() produtoEdit!: ListaDeCompra;

  editando = false;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
    console.log(this.produtoEdit);
  }

  private log(texto: string) {
    console.log(texto);
  }

  onSubmit() {
    const item: ListaDeCompra = { nome: this.produto, comprado: false };
    if (!this.editando) {
      this.pushItem(item);
    } else {
      const dados = {
        id: this.produtoEdit.id,
        nome: this.produto,
        comprado: this.produtoEdit.comprado,
        data: this.produtoEdit.data
      }
      this.editItem(dados);
    }
  }

  pushItem(item: any) {
    this.listaDeCompraService.pushListaDeCompras(item).subscribe(res => console.log(res));
    this.cleanInput();
  }

  editItem(dadosEditar: any) {
    console.log(dadosEditar);

    this.listaDeCompraService.editItem(dadosEditar).subscribe((res) => console.log(res));
    this.cleanInput();
  }

  cleanInput() {
    this.produto = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['produtoEdit'].currentValue);
    // this.log('Chamou aqui em?!');
    if (this.produtoEdit !== undefined && !changes['produtoEdit'].firstChange) {
      this.editando = true;
      const dadosEditar = changes['produtoEdit'].currentValue;
      this.produto = dadosEditar.nome;
    }
  }

}
