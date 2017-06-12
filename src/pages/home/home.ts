import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardEdit } from '../card-edit/card-edit';
import { CardSend } from '../card-send/card-send';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private cardSend:any;
    private cardEdit:any;

    constructor(public navCtrl: NavController) {

        let self:HomePage = this;

        self.cardEdit = CardEdit;
        self.cardSend = CardSend;

    }

}
