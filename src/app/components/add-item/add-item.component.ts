import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() aoAdicionar = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(itemCompra: any) {
    this.aoAdicionar.emit(itemCompra.value);
  }
}
