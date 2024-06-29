import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './dashboard/create-task/create-task.component';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { LoggingInterceptorService } from './Services/logginginterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}    
  ], //when we set multi to true, we can have many interceptors with same injection token and that will not override each other
  bootstrap: [AppComponent]
})
export class AppModule { }
