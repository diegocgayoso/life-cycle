import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 10
  constructor() {
    this.log('constructor');
   }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngOnChanges(): void {
    this.log('OnChanges')
  }

  ngDoCheck(): void {
    this.log('DoCheck')
  }

  ngAfterContentChecked(): void {
    this.log('AfterContentChecked')
  }

  ngAfterContentInit(): void {
    this.log('AfterContentInit')
  }

  ngAfterViewChecked(): void {
    this.log('AfterViewChecked')
  }

  ngAfterViewInit(): void {
    this.log('AfterViewInit')
  }

  ngOnDestroy(): void {
    this.log('OnDestroy')
  }

  private log(hook: string){
    console.log(hook);
  }
}
