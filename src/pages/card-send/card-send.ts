import { Component } from '@angular/core';
import { McCardService } from "../../app/services/card-service";
import { McCard } from "../../app/interfaces/card";
import { ActionSheet, ActionSheetController, AlertController } from "ionic-angular";
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
    private emailAlertConfig: {title: string, message: string, inputs: Array<any>, buttons: Array<any>} = {
        title: 'Email Card',
        message: "Enter an email address to send your card to",
        inputs: [
            {
                name: 'email',
                placeholder: 'Email'
            },
        ],
        buttons: []
    };
    private smsAlertConfig: {title: string, message: string, inputs: Array<any>, buttons: Array<any>} = {
        title: 'Text Card',
        message: "Enter an phone number to send your card to",
        inputs: [
            {
                name: 'phone',
                placeholder: 'Phone Number'
            },
        ],
        buttons: []
    };

    /**
     * Constructor
     *
     * @param cardService
     * @param sendCapabilities
     * @param actionSheetController
     * @param alertController
     * @return void
     */
    constructor(
        private cardService: McCardService,
        private sendCapabilities: McSendCapabilities,
        private actionSheetController: ActionSheetController,
        private alertController: AlertController) {

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

    /**
     * Sets up the action sheet based on the device's capabilities.
     */
    private buildActionSheet(): void {

        let self: McCardSend = this;

        // if(self.sendCapabilities.getEmailAvailability()) {

            self.actionSheetConfig.buttons.push({
                text: 'Send via email',
                handler: () => {

                    self.sendCardViaEmail();

                }
            });

        // }

        // if(self.sendCapabilities.getSmsAvailability()) {

            self.actionSheetConfig.buttons.push({
                text: 'Send via SMS',
                handler: () => {

                    self.sendCardViaSms();

                }
            });

        // }

        self.actionSheetConfig.buttons.push({
            text: 'Cancel',
            role: 'cancel'
        });

        self.actionSheet = self.actionSheetController.create(self.actionSheetConfig);

    }

    /**
     * Shows the action options.
     */
    private showActionOptions(): void {

        let self: McCardSend = this;

        self.actionSheet.present();

    }

    private sendCardViaEmail(): void {

        let self: McCardSend = this;

        let alert = self.alertController.create(self.emailAlertConfig);

        alert.present();

    }

    private sendCardViaSms(): void {

        let self: McCardSend = this;

        let alert = self.alertController.create(self.smsAlertConfig);

        alert.present();

    }

}
