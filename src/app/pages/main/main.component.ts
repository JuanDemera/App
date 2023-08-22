import { Component } from '@angular/core';
import { ServicePersonaService } from '../../providers/service-persona.service';
import { Persona } from '../../interfaces/persona';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private servicePersona: ServicePersonaService) { }
  public personas: Persona[] = [];

  ngOnInit(): void {
    this.servicePersona.getResponse().subscribe(
      (response) => {
        this.personas = (response as Persona[]);
      });
    }
  
  displayedColumns: string[] = ['ID_Persona', 'Nombre', 'Edad'];
}
