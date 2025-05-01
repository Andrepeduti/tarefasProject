import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Registra o locale pt-BR
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]), // ou suas rotas reais se tiver
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};