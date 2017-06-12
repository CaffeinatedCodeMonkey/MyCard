import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService } from "../../app/services/card-service";

@Component({
    selector: 'page-card-edit',
    templateUrl: 'card-edit.html'
})
export class CardEdit {

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

        let self:CardEdit = this;

        self.card = self.cardService.get();

    }

    ngOnInit() {
        let self:CardEdit = this;

        // Retrieve the card information.
        self.card = self.cardService.get();

    }
}
