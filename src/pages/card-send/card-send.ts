import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService } from "../../app/services/card-service";

@Component({
    selector: 'page-card-send',
    templateUrl: 'card-send.html',
    providers: [CardService]
})
export class CardSend {

    private card:{
        image_url: string|null,
        full_name: string|null,
        phone1: string|null,
        phone2: string|null,
        email: string|null,
        github: string|null,
        linkedin: string|null,
        blurb: string|null
    };

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
