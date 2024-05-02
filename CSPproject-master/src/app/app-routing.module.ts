import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NeedComponent } from './need/need.component';



import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { InsertComponent } from './insert/insert.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Hygiene1Component } from './hygiene1/hygiene1.component';
import { Hygiene2Component } from './hygiene2/hygiene2.component';
import { Hygiene3Component } from './hygiene3/hygiene3.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component: AboutComponent,
    path:'about'
  },
  
  {
    component:NeedComponent,
     path:'need'
  },
  {
    component:DetailsComponent,
    path:'details'
  },
  {
    component:InsertComponent,
    path:'insert'
  },
  {
    component:UpdateComponent,
    path:'update'
  },
  {
    component:DeleteComponent,
    path:'delete'
  },
  {
    component:ReadComponent,
    path:'read'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:MainComponent,
    path:''
  },
  {
    component:NavbarComponent,
    path:'navbar'
  },
  {
    component:Hygiene1Component,
    path:'hygiene1'
  },
  {
    component:Hygiene2Component,
    path:'hygiene2'
  },
  {
    component:Hygiene3Component,
    path:'hygiene3'
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:LogoutComponent,
    path:''
  },
  {
    component:ViewComponent,
    path:'view'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
 export const myRountings=[
  InsertComponent,
  ReadComponent,
  DeleteComponent,
  UpdateComponent

]
