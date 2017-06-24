import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { McApp } from './app.component';
import { McHomePage } from '../pages/home/home';
import { McCardEdit } from '../pages/card-edit/card-edit';
import { McCardSend } from '../pages/card-send/card-send';
import { McCardService } from './services/card-service';
import { McFileSelector } from "./components/file-selector/file-selector";
import { McEmailFirst } from "../email-templates/first/first";
import { McEmailSecond } from "../email-templates/second/second";
import { McRounded } from "./directives/rounded";
import { McPaddingTop, McPaddingRight, McPaddingBottom, McPaddingLeft } from "./directives/padding";

@NgModule({
    declarations: [
        McApp,
        McHomePage,
        McCardEdit,
        McCardSend,
        McEmailFirst,
        McEmailSecond,
        McFileSelector,
        McRounded,
        McPaddingTop,
        McPaddingRight,
        McPaddingBottom,
        McPaddingLeft
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(McApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        McApp,
        McHomePage,
        McCardEdit,
        McCardSend,
        McFileSelector
    ],
    providers: [
        StatusBar,
        SplashScreen,
        McCardService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
