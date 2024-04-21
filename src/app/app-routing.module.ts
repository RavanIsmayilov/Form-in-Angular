import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[authGuard]
  },
  {
    path: 'about', 
    component: AboutComponent,
    canActivate:[authGuard]

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**', 
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
