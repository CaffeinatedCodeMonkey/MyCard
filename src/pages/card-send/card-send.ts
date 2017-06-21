import { Component } from '@angular/core';
import { CardService } from "../../app/services/card-service";
import { Card } from "../../app/interfaces/card";

@Component({
    selector: 'page-card-send',
    templateUrl: 'card-send.html',
    providers: [CardService]
})
/**
 * This is the class for the component that handles the view for sending cards.
 */
export class CardSend {

    private card:Card = {
        image_url: null,
        full_name: null,
        phone1: null,
        phone2: null,
        email: null,
        github: null,
        linkedin: null,
        twitter: null,
        blurb: null
    };

    /**
     * Constructor
     *
     * @param cardService
     * @return void
     */
    constructor(private cardService: CardService) {}

    /**
     * Retrieves the new card each time it enters the view.
     */
    ngOnInit():void {

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
