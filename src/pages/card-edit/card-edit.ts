import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-card-edit',
    templateUrl: 'card-edit.html'
})
export class CardEdit {

    public card:{image_url:string|null};

    constructor(public navCtrl: NavController) {



    }

}
