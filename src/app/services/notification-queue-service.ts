import { Injectable } from "@angular/core";
import { Toast, ToastController } from "ionic-angular";

const DEFAULT_DURATION = 3000;
const DEFAULT_POSITION = 'bottom';

@Injectable()
export class McNotificationQueueService {

    private toastController: ToastController;
    private notices:Array<Toast> = [];
    private noticeIsActive:boolean = false;

    /**
     * Constructor
     *
     * @param toastController
     */
    constructor(toastController: ToastController) {

        let self: McNotificationQueueService = this;

        self.toastController = toastController;

    }

    /**
     * Throws a new notification onto the notification queue.
     *
     * @param message
     * @param duration
     */
    public addNotification(message: string, duration?: number): void {

        let self: McNotificationQueueService = this;

        let toast: Toast = self.toastController.create({
            message: message,
            duration: duration || DEFAULT_DURATION,
            position: DEFAULT_POSITION
        });

        self.notices.push(toast);

        self.kickOffNotification();

    }

    /**
     * Starts the queue notification display.
     */
    private kickOffNotification(): void {

        let self: McNotificationQueueService = this;

        if(!self.noticeIsActive) {

            self.noticeIsActive = true;
            self.displayNotice();

        }

    }

    /**
     * Will show the stored notices one at a time until they're all done.
     */
    private displayNotice():void {

        let self: McNotificationQueueService = this;

        let currentNotice: Toast = self.notices.shift();

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