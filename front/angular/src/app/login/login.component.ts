import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ""
  senha: string = ""

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.email)
    console.log(this.senha)
  }

}
