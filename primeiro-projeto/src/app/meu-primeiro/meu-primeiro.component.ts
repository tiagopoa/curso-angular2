import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  template: `
  <p>meu primeiro component com angular2</p>
  `,
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
