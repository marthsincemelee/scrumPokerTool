import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  allPlayers: Array<any>;

  constructor(private socket: Socket) { }

  sendMessage(msg: string){
    this.socket.emit("connection", msg);
}
}

