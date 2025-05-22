import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { authProviders } from '../../infrastructure/providers/auth.providers';
import { productProviders } from '../../infrastructure/providers/product.providers';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { productReducer } from '../store/cart/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    authProviders,
    productProviders,
    provideStore({products: productReducer}),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ],
};
