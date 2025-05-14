import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SubtitleComponent } from "../../shared/components/subtitle/subtitle.component";
import { Comandos } from '../../interfaces/comandos';
import { RegistrosComponent } from "../../components/imputs/registros/registros.component";
@Component({
  selector: 'app-imputs',
  imports: [MatTabsModule, SubtitleComponent, RegistrosComponent],
  templateUrl: './imputs.component.html',
  styleUrl: './imputs.component.css'
})
export class ImputsComponent {

  inputs = signal<Comandos[]>([
    {
      descripcion: 'Primer paso debes crear el componente input.',
      codigo: 'ng g c shared/components/input',
      tipo: 'bash'
    },
    {
      descripcion: 'Integra el html en su archivo correspondiente.',
      codigo: `<input [type]="type()" [id]="inputId()" [name]="name()" 
[placeholder]="placeholder()" 
class="form-control form-control-sm shadow-none" 
[value]="value()" (input)="onInputChange($event)"
(blur)="onTouched()" [disabled]="disabled()" />`,
      tipo: 'html'
    },
    {
      descripcion: 'Ahora te daremos los estilos scss puedes agregar tus propios colores y/o estilos.',
      codigo: `input::placeholder {
    color: var(--placeholder-input);
}

input:focus {
    border-color: var(--border-input) ;
}
`,
      tipo: 'scss'
    },
    {
      descripcion: 'Aqui te mostramos el codigo typescript.',
      codigo: `import { Component, computed, input, signal, WritableSignal } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  type = input<"text" | "email" | "password">();
  placeholder = input<string>();
  name = input<string>();
  id = input<string>();
  value: WritableSignal<string> = signal('');
  disabled: WritableSignal<boolean> = signal(false);

  inputId = computed(() => this.id() || this.name() || 'input-' + Math.random().toString(36).substring(2, 9));

  onChange = (value: string) => { };
  onTouched = () => { };

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this.onChange(input.value);
  }

}
`,
      tipo: 'typescript'
    }
  ])


  
}
