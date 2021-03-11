import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../services/player.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-set-username-modal',
  templateUrl: './set-username-modal.component.html',
  styleUrls: ['./set-username-modal.component.css']
})
export class SetUsernameModalComponent implements OnInit {
  isVisible: any;
  usernameForm: FormGroup;

  constructor(public playerService: PlayerService, private fb: FormBuilder, private message: NzMessageService) {
    this.isVisible = true;
    this.playerService.getAllPlayer();
    this.usernameForm = this.fb.group({
      username: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  validateNewPlayer(username: string): boolean {

    return this.playerService.allPlayers.some(player => player.name === username);

  }


  handleOk(value: any): void {
    if (this.usernameForm.valid) {
      if (this.validateNewPlayer(value.username)) {
        this.message.error('Sorry, the requested username is already in use.');
      } else {
        this.playerService.username = value.username;
        this.isVisible = false;
        this.playerService.requestNewPlayer();
      }
    }

  }
}
