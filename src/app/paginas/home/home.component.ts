import { Component } from '@angular/core';
import { InputTextComponent } from "../../componentes/input-text/input-text.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  title = 'Simpress';

  atualizarTitulo(evento: string) {
    this.title = evento;
  }
}
