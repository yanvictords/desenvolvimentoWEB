import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component'
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { InicialComponent } from './inicial/inicial.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

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
  path: 'lista-produtos',
  component: ListaProdutosComponent
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
