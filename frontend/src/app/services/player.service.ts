import {Injectable} from '@angular/core';
import {Socket} from '@hochdreih/ngx-socket-io-3';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  username: string;
  allPlayers: Array<any>;

  constructor(private socket: Socket) {
    this.socket.on('allVotes', (allVotes) => {
      this.allPlayers = allVotes;
    });
  }

  sendVote(value: number): void {
    this.socket.emit('vote', {
      name: this.username,
      voteValue: value
    });
  }


  resetGame(): void {
    this.socket.emit('reset');
  }


}

