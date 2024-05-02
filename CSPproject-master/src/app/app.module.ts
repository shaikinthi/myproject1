import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatButtonModule}  from'@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { NeedComponent } from './need/need.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Hygiene1Component } from './hygiene1/hygiene1.component';
import { Hygiene2Component } from './hygiene2/hygiene2.component';
import { Hygiene3Component } from './hygiene3/hygiene3.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    NeedComponent,
    UpdateComponent,
    ReadComponent,
    DeleteComponent,
    InsertComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    NavbarComponent,
    Hygiene1Component,
    Hygiene2Component,
    Hygiene3Component,
    ContactComponent,
    LogoutComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
