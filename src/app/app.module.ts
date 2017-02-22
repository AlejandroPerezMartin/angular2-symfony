import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { IdeasModule } from './ideas/ideas.module';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

import { HttpClient, AuthService, IdeasService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    IdeasModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ HttpClient, AuthService, IdeasService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
