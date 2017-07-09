import { Component } from '@angular/core';
import { McCardEdit } from '../card-edit/card-edit';
import { McCardSend } from '../card-send/card-send';
import { McNotificationQueueService } from "../../app/services/notification-queue-service";
import { McSendCapabilities } from "../../app/services/send-capabilities";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [McNotificationQueueService, McSendCapabilities]
})
export class McHomePage {

    private cardSend:any;
    private cardEdit:any;

    /**
     * Constructor
     *
     * @param notificationQueue
     * @param sendCapabilities
     */
    constructor(private notificationQueue: McNotificationQueueService, private sendCapabilities: McSendCapabilities) {

        let self:McHomePage = this;

        self.cardEdit = McCardEdit;
        self.cardSend = McCardSend;

        self.alertIfEmailUnavailable();
        self.alertIfSmsUnavailable();

    }

    /**
     * Pops up toast if emails aren't able to be sent.
     */
    public alertIfEmailUnavailable():void {

        let self:McHomePage = this;

        if(!self.sendCapabilities.getEmailAvailability()) {

            self.notificationQueue.addNotification('Unable to send your card via email.');
            console.log('email disabled');

        }

    }

    /**
     * Pops up toast if SMS messages aren't able to be sent.
     */
    public alertIfSmsUnavailable():void {

        let self:McHomePage = this;

        if(!self.sendCapabilities.getSmsAvailability()) {

            console.log('sms disabled');
            self.notificationQueue.addNotification('Unable to send your card via SMS.');

        }

    }

}
