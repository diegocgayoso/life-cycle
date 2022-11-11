import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeCompradosComponent } from './lista-de-comprados.component';

describe('ListaDeCompradosComponent', () => {
  let component: ListaDeCompradosComponent;
  let fixture: ComponentFixture<ListaDeCompradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeCompradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
