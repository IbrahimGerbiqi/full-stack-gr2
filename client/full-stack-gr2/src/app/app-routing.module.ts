import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'not-found', component:NotFoundComponent},
  { path: '**', redirectTo: 'not-found' },
  { path: 'movie', component:MovieComponent }
];

// const routes: Routes = [
//   { path: 'heroes', component: HeroesComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
