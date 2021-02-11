import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-current-player-tag',
  templateUrl: './current-player-tag.component.html',
  styleUrls: ['./current-player-tag.component.css']
})
export class CurrentPlayerTagComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
