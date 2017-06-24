import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { McCardEdit } from '../card-edit/card-edit';
import { McCardSend } from '../card-send/card-send';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class McHomePage {

    private cardSend:any;
    private cardEdit:any;

    constructor(public navCtrl: NavController) {

        let self:McHomePage = this;

        self.cardEdit = McCardEdit;
        self.cardSend = McCardSend;

    }

}
