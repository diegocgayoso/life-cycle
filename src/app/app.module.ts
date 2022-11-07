import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CicloComponent } from './components/ciclo/ciclo.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListaComponent } from './components/lista/lista.component';
import { ItemComponent } from './components/item/item.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CicloComponent,
    AddItemComponent,
    ListaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
