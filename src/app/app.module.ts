import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CicloComponent } from './components/ciclo/ciclo.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListaDeCompraComponent } from './components/lista-de-compra/lista-de-compra.component';
import { ListaDeCompradosComponent } from './components/lista-de-comprados/lista-de-comprados.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemListaComponent } from './components/item-lista/item-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloComponent,
    AddItemComponent,
    ListaDeCompraComponent,
    ListaDeCompradosComponent,
    ItemListaComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
