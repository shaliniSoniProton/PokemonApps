import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './page/pokemon-list/pokemon-list.component';

const routes: Routes = [];
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',//'dashboard/dashboard1',
    pathMatch: 'full',
  },
  {  
    path: 'pokemon-list',  
    component: PokemonListComponent,  
    // canActivate: [MsalGuard]  
  }  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
