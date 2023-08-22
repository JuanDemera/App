import { Component } from '@angular/core';
import { ServicePersonaService } from './providers/service-persona.service';
import { Persona } from './interfaces/persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'core-app';
}
