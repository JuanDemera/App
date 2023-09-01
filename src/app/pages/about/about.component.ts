import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Tabla de asignacion de tareas del hogar a los miembros de la familia '; /* Cambie el texto con la descripción de su proyecto */
}
