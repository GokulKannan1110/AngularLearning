import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ActionService } from './app/shared/action.service';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, {
    providers: [
        ActionService,
        importProvidersFrom(AppRoutingModule)
    ]
});
