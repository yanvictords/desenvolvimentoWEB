import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() usuarioLogado: Boolean;

  constructor() { }

  ngOnInit() {
    this.usuarioLogado = false;
  }

  onSairClick(): void {
    console.log('Deslogando...')
  }
}
