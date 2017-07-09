import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { McCardEdit } from '../card-edit/card-edit';
import { McCardSend } from '../card-send/card-send';
import { EmailComposer } from "@ionic-native/email-composer";
import { McNotificationQueueService } from "../../app/services/notification-queue-service";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [EmailComposer, McNotificationQueueService]
})
export class McHomePage {

    private cardSend:any;
    private cardEdit:any;

    /**
     * Constructor
     *
     * @param emailComposer
     * @param notificationQueue
     * @param platform
     */
    constructor(private emailComposer: EmailComposer, private notificationQueue: McNotificationQueueService, private platform: Platform) {

        let self:McHomePage = this;

        self.cardEdit = McCardEdit;
        self.cardSend = McCardSend;

        self.alertIfEmailUnavailable();

    }

    /**
     * Pops up toast if the device isn't able to be sent.
     */
    public alertIfEmailUnavailable():void {

        let self:McHomePage = this;

        if(self.platform.is('cordova')) {

            self.emailComposer.isAvailable().then((available: boolean) =>{

                if(!available) {

                    self.notificationQueue.addNotification('Unable to send your card via email.');

                }

            });

        }
        else {

            self.notificationQueue.addNotification('Unable to send your card via email.');

        }

    }

}
