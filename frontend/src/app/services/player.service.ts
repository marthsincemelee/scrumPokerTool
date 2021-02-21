import {Injectable} from '@angular/core';
import {Socket} from '@hochdreih/ngx-socket-io-3';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  username: string;
  allPlayers: Array<any>;
  cardValueIsShown: boolean;
  results: any;
  possibleValues: Array<number>;


  constructor(private socket: Socket) {

    this.results = [];
    this.possibleValues = [1, 2, 3, 5, 8, 13];

    this.socket.on('allVotes', (allVotes) => {
      this.allPlayers = allVotes;
    });

    this.socket.on('showCards', () => {
      this.resetResults();
      this.evaluateResults();
      this.cardValueIsShown = true;

    });

    this.socket.on('hideCards', () => {
      this.cardValueIsShown = false;
    });


    this.cardValueIsShown = false;
  }

  sendVote(value: number): void {
    this.socket.emit('vote', {
      name: this.username,
      voteValue: value
    });
  }

  showCards(): void {
    this.socket.emit('showCards');
  }


  resetGame(): void {
    this.socket.emit('reset');
  }

  resetVotes(): void {
    this.socket.emit('resetVotes');
  }

  resetResults(): void {
    this.results = [];
    this.possibleValues.forEach(value => {
      const entry = {
        option: value,
        count: 0
      };
      this.results.push(entry);
    });
  }

  evaluateResults(): void {
    this.allPlayers.forEach(player => {
      this.results.forEach(entry => {
        if (player.voteValue === entry.option) {
          entry.count++;
        }
      });
    });
  }

}

