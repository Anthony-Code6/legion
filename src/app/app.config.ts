import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), {
    provide: YOUTUBE_PLAYER_CONFIG, useValue: {
      disablePlaceholder: true,

    }
  }]
};
