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
      codigo: `<input [type]="type()" 
[id]="inputId()" 
[name]="name()" 
[placeholder]="placeholder()" 
class="form-control form-control-sm shadow-none" 
[value]="value()" 
(input)="onInputChange($event)"
(blur)="onTouched()" 
[disabled]="disabled()" />`,
      tipo: 'html'
    },
    {
      descripcion: 'Ahora debes implementar los estilos scss, puedes agregar tus propios colores y/o estilos.',
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

  textarea = signal<Comandos[]>([
    {
      descripcion: 'Primer paso debes crear el componente textarea.',
      codigo: 'ng g c shared/components/textarea',
      tipo: 'bash'
    },
    {
      descripcion: 'Integra el html en su archivo correspondiente.',
      codigo: `<textarea
  [id]="inputId()"
  [name]="name()"
  [placeholder]="placeholder()"
  class="form-control form-control-sm shadow-none"
  (input)="onInputChange($event)"
  (blur)="onTouched()"
  [value]="value()"
  [disabled]="disabled()"
></textarea>`,
      tipo: 'html'
    },
    {
      descripcion: 'Ahora debes implementar los estilos scss, puedes agregar tus propios colores y/o estilos.',
      codigo: `textarea {
    width: 100%;
    resize: none;
    field-sizing: content !important;
}

textarea::placeholder {
    color: var(--placeholder-input);
}

textarea:focus {
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
  selector: 'app-text-area',
  imports: [],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextAreaComponent,
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor {
  placeholder = input<string>();
  name = input<string>();
  id = input<string>();
  value: WritableSignal<string> = signal('');
  disabled: WritableSignal<boolean> = signal(false);
  
  inputId = computed(() => this.id() || this.name() || 'textarea-' + Math.random().toString(36).substring(2, 9));

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
    const textarea = event.target as HTMLTextAreaElement;
    this.value.set(textarea.value);
    this.onChange(textarea.value);
  }

}
`,
      tipo: 'typescript'
    }
  ]);

  select = signal<Comandos[]>([
    {
      descripcion: 'Primer paso debes crear la interfaz options.',
      codigo: 'ng g i core/components/options',
      tipo: 'bash'
    },
    {
      descripcion: 'Codigo de la interfaz.',
      codigo: `export interface Options {
    label: string;
    value: string;
}`,
      tipo: 'typescript'
    },
    {
      descripcion: 'Segundo paso debes crear el componente select.',
      codigo: 'ng g c shared/components/select',
      tipo: 'bash'
    },
    {
      descripcion: 'Integra el html en su archivo correspondiente.',
      codigo: `<select [id]="inputId()" [name]="name()" class="form-control form-control-sm shadow-none"
    (change)="onInputChange($event)" (blur)="onTouched()" [disabled]="disabled()" >

    <option value="">{{placeholder()}}</option>

    @for (option of options(); track $index) {
    <option [value]="option.value" [selected]="option.value === value()">
        {{ option.label }}
    </option>

    }
</select>`,
      tipo: 'html'
    },
    {
      descripcion: 'Ahora debes implementar los estilos scss, puedes agregar tus propios colores y/o estilos.',
      codigo: `select::placeholder {
    color: var(--placeholder-input);
}

select:focus {
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
  selector: 'app-text-area',
  imports: [],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextAreaComponent,
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor {
  placeholder = input<string>();
  name = input<string>();
  id = input<string>();
  value: WritableSignal<string> = signal('');
  disabled: WritableSignal<boolean> = signal(false);
  
  inputId = computed(() => this.id() || this.name() || 'textarea-' + Math.random().toString(36).substring(2, 9));

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
    const textarea = event.target as HTMLTextAreaElement;
    this.value.set(textarea.value);
    this.onChange(textarea.value);
  }

}`,
      tipo: 'typescript'
    }
  ]);

}
