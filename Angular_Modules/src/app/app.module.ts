import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteModule } from './route.module';
import { HomeComponent } from './home/home.component';
import { DashBoardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core.module';
import { AuthModule } from './login/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent        
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    HttpClientModule,
    RouteModule,
    DashBoardModule,
    CoreModule,
    AuthModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
