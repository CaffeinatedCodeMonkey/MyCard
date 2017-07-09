import { Component } from '@angular/core';
import { McCardService } from "../../app/services/card-service";
import { McCard } from "../../app/interfaces/card";
import { ActionSheet, ActionSheetController } from "ionic-angular";
import { McSendCapabilities } from "../../app/services/send-capabilities";

@Component({
    selector: 'page-card-send',
    templateUrl: 'card-send.html',
    providers: [McCardService, McSendCapabilities]
})
/**
 * This is the class for the component that handles the view for sending cards.
 */
export class McCardSend {

    private isAbleToSendCard: boolean = false;
    private card: McCard = {
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
    private actionSheetConfig: {title: string, buttons: Array<any>} = {
        title: 'Sharing method',
        buttons: [],
    };
    private actionSheet: ActionSheet;

    /**
     * Constructor
     *
     * @param cardService
     * @param sendCapabilities
     * @param actionSheetCtrl
     * @return void
     */
    constructor(private cardService: McCardService, private sendCapabilities: McSendCapabilities, public actionSheetCtrl: ActionSheetController) {

        let self: McCardSend = this;

        self.buildActionSheet();

        self.isAbleToSendCard = self.sendCapabilities.getEmailAvailability() || self.sendCapabilities.getSmsAvailability();

    }

    /**
     * Retrieves the new card each time it enters the view.
     */
    ngOnInit(): void {

        let self: McCardSend = this;

        self.cardService
            .get()
            .then(
                (value) => {

                    self.card = value;

                }
            );

    }

    private buildActionSheet(): void {

        let self: McCardSend = this;

        if(self.sendCapabilities.getEmailAvailability()) {

            self.actionSheetConfig.buttons.push({
                text: 'Email',
                handler: () => {

                }
            });

        }

        if(self.sendCapabilities.getSmsAvailability()) {

            self.actionSheetConfig.buttons.push({
                text: 'SMS',
                handler: () => {

                }
            })

        }

        self.actionSheetConfig.buttons.push({
            text: 'Cancel',
            role: 'cancel'
        });

        self.actionSheet = self.actionSheetCtrl.create(self.actionSheetConfig);

    }

    private send(): void {

        let self: McCardSend = this;

        self.actionSheet.present();

    }

}
