import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService, Card } from "../../app/services/card-service";

@Component({
    selector: 'page-card-edit',
    templateUrl: 'card-edit.html'
})
export class CardEdit {

    private card:Card;

    constructor(public navCtrl: NavController, private cardService: CardService) {

        let self:CardEdit = this;

        self.card = self.cardService.get();

    }

    ngOnInit() {

        let self:CardEdit = this;

        // Retrieve the card information.
        self.card = self.cardService.get();

    }

    public fnSelectImage():void {



    }
}
