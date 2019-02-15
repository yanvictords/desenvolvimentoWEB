import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  imagem: string = "https://pro2-bar-s3-cdn-cf2.myportfolio.com/17e02275616cd3dc21a790d8766b3e59/375713d1fdea41438e0dfda4_rw_1200.gif?h=f1a73f9dd54b65023e877291edf808a5"
  nome: string = ''
  email: string = ''
  senha: string = ''
  cpf: string = ''
  idade: number = null

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('nome', this.nome)
    console.log('email', this.email)
    console.log('senha', this.senha)
    console.log('cpf', this.cpf)
    console.log('idade', this.idade)
  }
}
