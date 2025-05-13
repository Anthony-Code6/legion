import { Component, input } from '@angular/core';
import { Comandos } from '../../../interfaces/comandos';
import { CardCodeComponent } from "../../../shared/components/card-code/card-code.component";

@Component({
  selector: 'app-registros',
  imports: [CardCodeComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  comandos = input<Comandos>()
}
