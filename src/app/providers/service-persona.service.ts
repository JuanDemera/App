import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicePersonaService {
  private URL: string = 'https://tudusapi-production.up.railway.app/rest/Persona/findAll/json';
  //private URL: string = 'http://localhost:3000/rest/Persona/findAll/json';
  constructor(private http: HttpClient) {}

  getResponse() {
    return this.http.get(this.URL);
  }
}
