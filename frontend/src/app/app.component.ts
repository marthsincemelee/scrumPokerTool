import { Component } from '@angular/core';
import {PlayerService} from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';


  constructor(public playerService: PlayerService) {
  }
}
