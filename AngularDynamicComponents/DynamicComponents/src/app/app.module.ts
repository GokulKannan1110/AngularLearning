import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ConfirmDeleteComponent } from './users/confirm-delete/confirm-delete.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { ViewContainerDirective } from './directives/view-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ConfirmDeleteComponent,
    HomeComponent,
    ViewContainerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
