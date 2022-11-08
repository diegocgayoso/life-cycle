import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaDeCompras = [
    {
      nome: 'Queijo Minas',
      data: 'Segunda-feira (31/10/2022) às 08:30' },
    {
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30' },
    {
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30' },
    {
      nome: 'Pão francês',
      data: 'Segunda-feira (31/10/2022) às 08:30' }
  ]

  faPen = faPen;
  faTrash = faTrash

  constructor() { }


  ngOnInit(): void {
    console.log('ListaComponent iniciado.');
  }

}
