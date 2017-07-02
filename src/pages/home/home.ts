import { Component } from '@angular/core';
import { Platform, Toast, ToastController } from 'ionic-angular';
import { McCardEdit } from '../card-edit/card-edit';
import { McCardSend } from '../card-send/card-send';
import { EmailComposer } from "@ionic-native/email-composer";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [EmailComposer, ToastController]
})
export class McHomePage {

    private cardSend:any;
    private cardEdit:any;
    private notices:Array<Toast> = [];
    private noticeIsActive:boolean = false;

    /**
     * Constructor
     *
     * @param emailComposer
     * @param toastCtrl
     * @param platform
     */
    constructor(private emailComposer: EmailComposer, private toastCtrl: ToastController, private platform: Platform) {

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

        // Put the toast in the toaster.
        let toast = self.toastCtrl.create({
            message: 'Unable to send your card via email.',
            duration: 3000,
            position: 'bottom'
        });

        if(self.platform.is('cordova')) {

            self.emailComposer.isAvailable().then((available: boolean) =>{

                if(!available) {

                    self.notices.push(toast);

                    if(!self.noticeIsActive) {

                        self.noticeIsActive = true;
                        self.displayNotice();

                    }

                }

            });

        }
        else {

            console.log(self.notices);
            self.notices.push(toast);

            if(!self.noticeIsActive) {

                self.noticeIsActive = true;
                self.displayNotice();

            }
        }

    }

    /**
     * Will show the stored notices one at a time until they're all done.
     */
    private displayNotice():void {

        let self:McHomePage = this;

        let currentNotice:Toast = self.notices.shift();

        if(self.notices.length > 0) {

            // If there're any more notices, display the next one.
            currentNotice.onDidDismiss(() => {

                // I want a small pause before showing the next notice.
                setTimeout(() => {
                    self.displayNotice.bind(self);
                }, 250);
                
            });

        }
        else {

            // If there aren't any more notices, we want to set that the notice is no longer active.
            currentNotice.onDidDismiss(() => {
                self.noticeIsActive = false;
            });
        }

        currentNotice.present();

    }

}
