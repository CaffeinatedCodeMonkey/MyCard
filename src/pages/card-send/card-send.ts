import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService } from "../../app/services/card-service";
import {Card} from "../../app/interfaces/card";

@Component({
    selector: 'page-card-send',
    templateUrl: 'card-send.html',
    providers: [CardService]
})
/**
 * This is the class for the component that handles the view for sending cards.
 */
export class CardSend {

    private card:Card;

    /**
     * Constructor
     *
     * @param navCtrl
     * @param cardService
     */
    constructor(public navCtrl: NavController, private cardService: CardService) {

        let self:CardSend = this;

        self.cardService
            .get()
            .then(
                (value) => {

                    self.card = value;

                }
            );

    }

}
