import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../services/player.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-username-modal',
  templateUrl: './set-username-modal.component.html',
  styleUrls: ['./set-username-modal.component.css']
})
export class SetUsernameModalComponent implements OnInit {
  isVisible: any;
  usernameForm: FormGroup;

  constructor(public playerService: PlayerService, private fb: FormBuilder) {
    this.isVisible = true;
    this.usernameForm = this.fb.group({
      username: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  handleOk(value: any): void {
    if (this.usernameForm.valid){
      this.playerService.username = value.username;
      this.isVisible = false;
      this.playerService.sendVote(0);
    }

  }
}
