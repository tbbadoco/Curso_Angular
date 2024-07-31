import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiURL = 'https://inspirare.azurewebsites.net/api/Paciente'

  constructor(private httpClient: HttpClient) { }

  listarPacientes() {
    return this.httpClient.get<Paciente[]>(this.apiURL);
  }
}
