import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input() texto = ''

  @Output() textoChange = new EventEmitter<string>()

  atualizaTexto(evento: string) {
    this.texto = evento
    this.textoChange.emit(this.texto)
  }
}
