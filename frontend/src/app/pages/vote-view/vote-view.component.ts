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

  constructor() {
    this.pointOptions = [1, 2, 3, 5, 8, 13];
    this.votedAlready = false;
    this.currentlySelectedValue = 0;
  }

  ngOnInit(): void {
  }

  onVoteClick(points: number): void {
    this.currentlySelectedValue = points;
    this.votedAlready = true;

  }

}
