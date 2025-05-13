import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { SubtitleComponent } from "../../shared/components/subtitle/subtitle.component";
@Component({
  selector: 'app-imputs',
  imports: [MatTabsModule, SubtitleComponent],
  templateUrl: './imputs.component.html',
  styleUrl: './imputs.component.css'
})
export class ImputsComponent {

}
