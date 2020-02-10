import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    pathMatch		: 'full'
  },
  {
    path        	: ':route',
    component		: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
