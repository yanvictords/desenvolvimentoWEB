import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: ['./cadastro-produto.component.css']
  })
export class CadastroProdutoComponent implements OnInit {
    usuario: string
    nomeProduto: string
    preco: number 
    dataCriacao: Date
    plataforma: string
    categoria: string
    fotoCapa: string
    plataformas = [
        'Playstation 4', 'Nintendo Wii', 'Xbox', 'PC'
    ]
    categorias = [
        'Ação', 'Aventura', 'Esporte', 'Estratégia', 'RPG', 'Terror', 'Outros'
    ]

    constructor () {

    }

    ngOnInit(): void {

    }

    onSubmit(): void {
        console.log(this.nomeProduto)
        console.log(this.preco)
        this.dataCriacao = new Date()
        console.log(this.dataCriacao)
        console.log(this.plataforma)
        console.log(this.categoria)
    }
}