import { PlayerService } from '../../services/player.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vote-view',
  templateUrl: './vote-view.component.html',
  styleUrls: ['./vote-view.component.css']
})
export class VoteViewComponent implements OnInit {

  pointOptions: Array<number>;
  votedAlready: boolean;
  currentlySelectedValue: number;

  constructor(public playerService: PlayerService) {
  }

  ngOnInit(): void {
  }


}
