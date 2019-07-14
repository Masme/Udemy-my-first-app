import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`.online {color:white;}`]
})

export class ServerComponent {
    ServerId = 10;
    ServerStatus = 'offline';

    constructor() {
        this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }
    getServerStatus() {
        return this.ServerStatus;
    }

    getColor() {
        return this.ServerStatus === 'online' ? 'green' : 'red';
    }
}