import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
