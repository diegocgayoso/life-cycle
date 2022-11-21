import { ListaDeCompraService } from './../../services/lista-de-compra.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Produto } from 'src/app/interfaces/IProdutos';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  produto = '';
  @Input() produtoEdit!: Produto;

  editando = false;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void {
    console.log(this.produtoEdit);
  }

  private log(texto: string) {
    console.log(texto);
  }

  onSubmit() {
    const item: Produto = { nome: this.produto, data: new Date, comprado: false };
    console.log(this.editando);

    if (!this.editando) {
      if(this.produto !== ''){
        this.pushItem(item);
      }
    } else {
      const dados = {
        id: this.produtoEdit.id,
        nome: this.produto,
        data: this.produtoEdit.data,
        comprado: this.produtoEdit.comprado
      }
      this.editItem(dados);
    }
  }

  pushItem(item: any) {
    this.service.pushListaDeCompras(item).subscribe(res => console.log(res));
    this.cleanInput();
  }

  editItem(dadosEditar: any) {
    console.log(dadosEditar);

    this.service.editItem(dadosEditar).subscribe((res) => {
      console.log(res);
      this.editando = false
    });
    this.cleanInput();

  }

  cleanInput() {
    this.produto = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['produtoEdit'].currentValue);
    this.log('Chamou aqui em?!');
    if (this.produtoEdit !== undefined && !changes['produtoEdit'].firstChange) {
      this.editando = true;
      const dadosEditar = changes['produtoEdit'].currentValue;
      this.produto = dadosEditar.nome;
    }
  }

}
