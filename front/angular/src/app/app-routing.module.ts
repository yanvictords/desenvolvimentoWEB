import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component'
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
{
  path: 'cadastro',
  component: CadastroComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'cadastro-produto',
  component: CadastroProdutoComponent
},
{
  path: '**',
  component: InicialComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
