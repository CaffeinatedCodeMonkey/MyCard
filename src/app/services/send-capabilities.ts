import { Injectable } from "@angular/core";
import { EmailComposer } from "@ionic-native/email-composer";
import { SMS } from "@ionic-native/sms";
import { Platform } from "ionic-angular";

@Injectable()
export class McSendCapabilities {

    private emailAvailable: boolean;
    private smsAvailable: boolean;

    /**
     * Constructor
     *
     * @param emailComposer
     * @param smsComposer
     * @param platform
     */
    constructor(private emailComposer: EmailComposer, private smsComposer: SMS, private platform: Platform) {

        let self: McSendCapabilities = this;

        self.checkEmailAvailability();
        self.checkSmsAvailability();

    }

    /**
     * Gets whether email composition is available.
     *
     * @returns {boolean}
     */
    public getEmailAvailability(): boolean {

        let self: McSendCapabilities = this;

        return self.emailAvailable;

    }

    /**
     * Gets whether SMS composition is available.
     *
     * @returns {boolean}
     */
    public getSmsAvailability(): boolean {

        let self: McSendCapabilities = this;

        return self.smsAvailable;

    }

    /**
     * Determines whether email composition is available.
     */
    private checkEmailAvailability(): void {

        let self: McSendCapabilities = this;

        self.emailAvailable = false;

        if(self.platform.is('cordova')) {

            self.emailComposer.isAvailable().then((available: boolean) =>{

                if(available) {

                    // Now we know we can send emails.
                    self.emailAvailable = true;

                }

            });

        }

    }

    /**
     * Determines whether SMS composition is available.
     */
    private checkSmsAvailability(): void {

        let self: McSendCapabilities = this;

        self.smsAvailable = false;

        if(self.platform.is('cordova')) {

            self.smsComposer.hasPermission().then((available: boolean) =>{

                if(available) {

                    // Now we know we can send text messages.
                    self.smsAvailable = true;

                }

            });

        }

    }
}