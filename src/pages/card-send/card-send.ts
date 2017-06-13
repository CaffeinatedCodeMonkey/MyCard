import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService, Card } from "../../app/services/card-service";

@Component({
    selector: 'page-card-send',
    templateUrl: 'card-send.html',
    providers: [CardService]
})
export class CardSend {

    private card:Card;

    constructor(public navCtrl: NavController, private cardService: CardService) {

        let self:CardSend = this;

        self.card = self.cardService.get();

    }

    ngOnInit() {
        let self:CardSend = this;

        // Retrieve the card information.
        self.card = self.cardService.get();

    }

}
