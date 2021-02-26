import {Injectable} from '@angular/core';
import {Socket} from '@hochdreih/ngx-socket-io-3';
import {NzMessageService} from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  username: string;
  allPlayers: Array<any>;
  cardValueIsShown: boolean;
  results: any;
  possibleValues: Array<number>;
  currentSelfValue: number;

  constructor(private socket: Socket, private message: NzMessageService) {
    this.results = [];
    this.possibleValues = [1, 2, 3, 5, 8, 13, 21];
    this.currentSelfValue = 0;

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
    if (!this.cardValueIsShown) {
      this.socket.emit('vote', {
        name: this.username,
        voteValue: value,
      });
      this.currentSelfValue = value;

      if (value !== 0) {
        this.message.success('Vote submitted');
      }

    } else {
      this.message.error('Could not send vote since the current round is completed!');
    }
  }

  showCards(): void {
    this.socket.emit('showCards');
  }

  resetGame(): void {
    this.socket.emit('reset');
    this.currentSelfValue = 0;
  }

  resetVotes(): void {
    this.socket.emit('resetVotes');
    this.currentSelfValue = 0;
  }

  resetResults(): void {
    this.results = [];
    this.possibleValues.forEach((value) => {
      const entry = {
        name: value,
        value: 0,
      };
      this.results.push(entry);
    });
  }

  evaluateResults(): void {
    this.allPlayers.forEach((player) => {
      this.results.forEach((entry) => {
        if (player.voteValue === entry.name) {
          entry.value++;
        }
      });
    });
  }
}
