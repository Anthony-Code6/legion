import { Component, inject, input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-card-code',
  imports: [Highlight],
  templateUrl: './card-code.component.html',
  styleUrl: './card-code.component.css'
})
export class CardCodeComponent {
  codigo = input.required<string>()
  lenguaje = input.required<string>()

  private clipboard = inject(Clipboard)

  copiarTexto() {
    this.clipboard.copy(this.codigo());
    console.log('Texto copiado:', this.codigo());
  }
}
