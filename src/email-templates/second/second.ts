import { Component } from '@angular/core';
import { CardService } from "../../app/services/card-service";
import { Card } from "../../app/interfaces/card";

@Component({
    selector: 'email-template-first',
    templateUrl: 'first.html',
    providers: [CardService]
})
/**
 * This is the class for the component that handles the view for sending cards.
 */
export class EmailFirst {

    private card:Card = {
        image_url: null,
        full_name: null,
        phone1: null,
        phone2: null,
        email: null,
        github: null,
        linkedin: null,
        blurb: null
    };

    /**
     * Constructor
     *
     * @param navCtrl
     * @param cardService
     */
    constructor(private cardService: CardService) {

        let self:EmailFirst = this;

        self.cardService
            .get()
            .then(
                (value) => {

                    self.card = value;

                }
            );

    }

}
