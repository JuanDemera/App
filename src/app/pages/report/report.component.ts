import { Component } from '@angular/core';
import { ServicePersonaService } from '../../providers/service-persona.service';
import { AsignacionService } from '../../providers/asignacion.service';
import { Persona } from '../../interfaces/persona';
import { Asignacion } from '../../interfaces/asignacion';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  personas: Persona[] = [];
  asignaciones: Asignacion[] = [];
  asignacionesFiltradas: Asignacion[] = [];
 

  constructor(private servicePersona: ServicePersonaService, private serviceAsignacion: AsignacionService ) { }

  ngOnInit(): void {
    this.servicePersona.getResponse().subscribe((response) => {
      this.personas = (response as Persona[]);
    });
    this.serviceAsignacion.getResponse().subscribe((response) => {
      this.asignaciones = (response as Asignacion[]);
      this.asignacionesFiltradas = this.asignaciones;
    })}

    onPersonaSelected(persona: Persona) {
      this.asignacionesFiltradas = this.asignaciones.filter(asignacion => asignacion.ID_Persona == persona.ID_Persona);

    }

}
