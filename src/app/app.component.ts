import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { McHomePage } from '../pages/home/home';
import { McSendCapabilities } from "./services/send-capabilities";

@Component({
    templateUrl: 'app.html',
    providers: [
        // McSendCapabilities
    ]
})

export class McApp {
    rootPage:any = McHomePage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

}

