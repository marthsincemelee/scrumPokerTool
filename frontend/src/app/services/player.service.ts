import {Injectable} from '@angular/core';
import {Socket} from '@hochdreih/ngx-socket-io-3';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  allPlayers: Array<any>;

  constructor(private socket: Socket) {
  }

  sendMessage(msg: string): void {
    this.socket.emit('connection', msg);
  }
}

