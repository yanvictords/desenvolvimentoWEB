import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: object;
  jogos = [
    {
      usuario: 'yanvictords',
      nomeProduto: 'God of War',
      preco: 220,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      fotoCapa: 'https://i.pinimg.com/originals/1d/96/bb/1d96bb974073705726e646e8a8a51f78.gif'
    },
    {
      usuario: 'yanvictords',
      nomeProduto: 'God of War',
      preco: 220,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      fotoCapa: 'https://i.pinimg.com/originals/1d/96/bb/1d96bb974073705726e646e8a8a51f78.gif'
    },
    {
      usuario: 'yanvictords',
      nomeProduto: 'God of War',
      preco: 220,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      fotoCapa: 'https://i.pinimg.com/originals/1d/96/bb/1d96bb974073705726e646e8a8a51f78.gif'
    },
    {
      usuario: 'yanvictords',
      nomeProduto: 'God of War',
      preco: 220,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      fotoCapa: 'https://i.pinimg.com/originals/1d/96/bb/1d96bb974073705726e646e8a8a51f78.gif'
    },
    {
      usuario: 'yanvictords',
      nomeProduto: 'God of War',
      preco: 220,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      fotoCapa: 'https://i.pinimg.com/originals/1d/96/bb/1d96bb974073705726e646e8a8a51f78.gif'
    },
    {
      usuario: 'yanvictords',
      nomeProduto: 'God of War',
      preco: 220,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      fotoCapa: 'https://i.pinimg.com/originals/1d/96/bb/1d96bb974073705726e646e8a8a51f78.gif'
    },
    {
      usuario: 'yanvictords',
      nomeProduto: 'God of War',
      preco: 220,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      fotoCapa: 'https://i.pinimg.com/originals/1d/96/bb/1d96bb974073705726e646e8a8a51f78.gif'
    },
    {
      usuario: 'yanvictords',
      nomeProduto: 'Gran Turismo 5',
      preco: 200,
      dataCriacao: new Date("22/02/2019"),
      plataforma: 'Playstation 4',
      categoria: 'Esporte',
      fotoCapa: 'https://media.giphy.com/media/3o7aD2DlqnVwKRab4s/giphy.gif'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
