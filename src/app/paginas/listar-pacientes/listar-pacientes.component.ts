import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../interfaces/paciente';
import { PacienteService } from '../../servicos/paciente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-pacientes.component.html',
  styleUrl: './listar-pacientes.component.css'
})
export class ListarPacientesComponent implements OnInit {
  pacientes: Paciente[] = []

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.listarPacientes().subscribe(pacientes =>  {
      this.pacientes = pacientes
      console.log(pacientes)
    })
  }

}
