const uuidv4 = require("uuid/v4")

class Room {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.sockets = [];
        this.votes = [];
    }


}
