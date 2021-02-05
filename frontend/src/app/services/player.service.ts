import {Injectable} from '@angular/core';
import {Socket} from '@hochdreih/ngx-socket-io-3';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  username: string;
  allPlayers: Array<any>;
  cardValueIsShown: boolean;

  constructor(private socket: Socket) {
    this.socket.on('allVotes', (allVotes) => {
      this.allPlayers = allVotes;
    });

    this.socket.on('showCards', () => {
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


}

