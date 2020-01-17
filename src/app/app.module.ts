import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES } from './app.routes';



//MODULOS
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
/*import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';*/

import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    //NopagefoundComponent
    //DashboardComponent,
    //ProgressComponent,
   // Graficas1Component,
    //HeaderComponent,
    //SidebarComponent,
    //BreadcrumbsComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
