import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public playerService: PlayerService) {

  }

  ngOnInit() {
  }
}
