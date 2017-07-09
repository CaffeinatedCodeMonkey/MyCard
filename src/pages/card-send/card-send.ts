import { Component } from '@angular/core';
import { McCardService } from "../../app/services/card-service";
import { McCard } from "../../app/interfaces/card";
import { EmailComposer } from "@ionic-native/email-composer";
import { ActionSheetController, Platform } from "ionic-angular";

@Component({
    selector: 'page-card-send',
    templateUrl: 'card-send.html',
    providers: [McCardService, EmailComposer]
})
/**
 * This is the class for the component that handles the view for sending cards.
 */
export class McCardSend {

    private canEmail: boolean = false;
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

    /**
     * Constructor
     *
     * @param cardService
     * @param emailComposer
     * @param platform
     * @param actionSheetCtrl
     * @return void
     */
    constructor(private cardService: McCardService, private emailComposer: EmailComposer, private platform: Platform, public actionSheetCtrl: ActionSheetController) {

        let self: McCardSend = this;

        self.checkEmailAvailability()

    }

    /**
     * Retrieves the new card each time it enters the view.
     */
    ngOnInit():void {

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
     * Checks to see if the email composer is available.
     */
    private checkEmailAvailability():void {

        let self: McCardSend = this;

        if(self.platform.is('cordova')) {

            self.emailComposer.isAvailable().then((available: boolean) =>{

                if(available) {

                    //Now we know we can send emails
                    self.canEmail = true;

                }

            });

        }

    }

    private send():void {

        let self: McCardSend = this;



    }

}
