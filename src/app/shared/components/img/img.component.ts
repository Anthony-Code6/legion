import { Component, input } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {
  imagen = input.required<string>()
  alts = input.required<string>()
}
