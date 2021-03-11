export class Player {

  id: number;
  username: string;
  selectedValue: number;
  isSpectator: boolean;


  constructor(id: number, username: string, selectedValue: number, isSpectator: boolean) {
    this.id = id;
    this.username = username;
    this.selectedValue = selectedValue;
    this.isSpectator = isSpectator;
  }
}
