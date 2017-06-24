import { Component } from '@angular/core';
import { McCardService } from "../../app/services/card-service";
import { McCard } from "../../app/interfaces/card";

@Component({
    selector: 'email-template-first',
    templateUrl: 'first.html',
    providers: [McCardService]
})
/**
 * This is the class for the component that handles the view for sending cards.
 */
export class McEmailFirst {

    private card:McCard = {
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
     */
    constructor(private cardService: McCardService) {

        let self:McEmailFirst = this;

        self.cardService
            .get()
            .then(
                (value) => {

                    self.card = value;

                }
            );

    }

}
