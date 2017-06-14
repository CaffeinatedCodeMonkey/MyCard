import {Component, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService, Card } from "../../app/services/card-service";
import { BaseComponent } from "../../app/components/base-component";

@Component({
    selector: 'page-card-edit',
    templateUrl: 'card-edit.html'
})
export class CardEdit extends BaseComponent {

    private card:Card;
    protected selectors:any = {
        component: 'page-card-edit'
    };
    protected elements:any = {};

    /**
     * Constructor
     *
     * @param el
     * @param navCtrl
     * @param cardService
     */
    constructor(protected el:ElementRef, public navCtrl: NavController, private cardService: CardService) {

        super(el);

        let self:CardEdit = this;

        self.card = self.cardService.get();

    }

    /**
     * Upon initialization: retrieves the card.
     */
    ngOnInit() {

        let self:CardEdit = this;

        // Retrieve the card information.
        self.card = self.cardService.get();

    }

    public fnSelectImage():void {



    }
}
