import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ServicePersonaService } from './app/providers/service-persona.service';
import { Persona } from './app/interfaces/persona';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

