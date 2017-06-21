import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService } from "../../app/services/card-service";
import { BaseComponent } from "../../app/components/base-component";
import { Card } from "../../app/interfaces/card";
import { MyLogger } from "../../app/library/my-logger";

@Component({
    selector: 'page-card-edit',
    templateUrl: 'card-edit.html'
})
/**
 * This is the class for the component that handles editing cards.
 */
export class CardEdit extends BaseComponent {

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
     * @param change
     */
    constructor(protected el:ElementRef, public navCtrl: NavController, private cardService: CardService) {

        super(el);

        let self:CardEdit = this;

        self.cardService
            .get()
            .then(
                (value) => {

                    self.card = value;

                }
            );

    }

    /**
     * The event that occurs when the file-selector updates.
     *
     * @param event
     */
    public imageChange(event) {

        let self:CardEdit = this;

        if(!event.target.files.length) {
            return;
        }

        let reader:FileReader = new FileReader();

        reader.onload = (e: any):void => {
            self.card.image_url = e.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);

    }

    /**
     * How to save the card.
     */
    public save() {

        let self:CardEdit = this;

        self.cardService.setCard(self.card);

        MyLogger.log(self.card);

    }

}
