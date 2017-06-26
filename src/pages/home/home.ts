import { Component } from '@angular/core';
import {Platform, Toast, ToastController} from 'ionic-angular';
import { McCardEdit } from '../card-edit/card-edit';
import { McCardSend } from '../card-send/card-send';
import { EmailComposer } from "@ionic-native/email-composer";
import {ArrayObservable} from "rxjs/observable/ArrayObservable";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [EmailComposer, ToastController]
})
export class McHomePage {

    private cardSend:any;
    private cardEdit:any;
    private notices:Observable<Array<any>>;

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

        self.notices.subscribe((fn:any) => {

        });
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

                    self.notices.
                    // Pop the toast.
                    toast.present();

                }

            });

        }
        else {

            // Pop the toast.
            toast.present();

        }

    }

}
