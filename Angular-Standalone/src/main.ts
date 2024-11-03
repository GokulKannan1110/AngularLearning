import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ActionService } from './app/shared/action.service';
import { importProvidersFrom } from '@angular/core';
import { APP_ROUTES } from './app/app-route';
import { provideRouter } from '@angular/router';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, {
    providers: [
        ActionService,
        //importProvidersFrom(AppRoutingModule)
        provideRouter(APP_ROUTES)
    ]
});
