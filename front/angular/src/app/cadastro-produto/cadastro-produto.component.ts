import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: ['./cadastro-produto.component.css']
  })
export class CadastroProdutoComponent implements OnInit {
    nomeProduto: string = ''
    descricaoProduto: string = ''
    preco: string = ''
    dataCriacao: Date = null
    
    constructor () {

    }

    ngOnInit(): void {

    }

    onSubmit(): void {
        console.log(this.nomeProduto)
        console.log(this.descricaoProduto)
        console.log(this.preco)
        this.dataCriacao = new Date()
        console.log(this.dataCriacao)
    }
}