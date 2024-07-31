import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ListarPacientesComponent } from './paginas/listar-pacientes/listar-pacientes.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pacientes', component: ListarPacientesComponent, pathMatch: 'full' }
];
