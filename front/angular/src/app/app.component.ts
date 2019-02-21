  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'project';
  menuVisivel: Boolean; 

  constructor() {

  }

  ngOnInit(): void {
    this.menuVisivel = false
  }

  mostrarMenu(): void {
    this.menuVisivel = !this.menuVisivel;
  }
}
