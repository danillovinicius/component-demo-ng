import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  // ,
  // {
  //   component: AcessoNegadoComponent,
  //   path: 'acesso-negado',
  // },
];

@NgModule ({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule {
}

