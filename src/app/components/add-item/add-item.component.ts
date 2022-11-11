import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit, DoCheck {

  produto: string = '';

  constructor() { }

  ngOnInit(): void {
    this.log('AddItemComponent iniciado.');
  }

  private log(texto: string){
    console.log(texto);
  }

  ngDoCheck(): void {
    this.log('M~etodo DOCheck chamado')

  }
  onSubmit() {
    console.log(`Item adicionado: ${this.produto}`);
    this.cleanInput();
  }
  cleanInput(){
    this.produto = '';
  }

}
