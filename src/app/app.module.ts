import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from "@angular/forms";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardEdit } from '../pages/card-edit/card-edit';
import { CardSend } from '../pages/card-send/card-send';
import { CardService } from './services/card-service';
import { FileSelector } from "./components/file-selector/file-selector";
import { EmailFirst } from "../email-templates/first/first";
import { EmailSecond } from "../email-templates/second/second";
import { Rounded } from "./directives/rounded";
import { PaddingTop, PaddingRight, PaddingBottom, PaddingLeft } from "./directives/padding";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CardEdit,
        CardSend,
        EmailFirst,
        EmailSecond,
        FileSelector,
        Rounded,
        PaddingTop,
        PaddingRight,
        PaddingBottom,
        PaddingLeft
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        CardEdit,
        CardSend,
        FileSelector
    ],
    providers: [
        StatusBar,
        SplashScreen,
        CardService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
