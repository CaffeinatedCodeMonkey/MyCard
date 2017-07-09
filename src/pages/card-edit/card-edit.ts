import { Component, ElementRef } from '@angular/core';
import { McCardService } from "../../app/services/card-service";
import { BaseComponent } from "../../app/components/base-component";
import { McCard } from "../../app/interfaces/card";
import { McLogger } from "../../app/library/logger";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'page-card-edit',
    templateUrl: 'card-edit.html',
    providers: [
        FormBuilder
    ]
})
/**
 * This is the class for the component that handles editing cards.
 */
export class McCardEdit extends BaseComponent {

    private cardFormGroup :FormGroup;
    private card: McCard = {
        image_url: null,
        full_name: null,
        phone1: null,
        phone2: null,
        email: null,
        github: null,
        linkedin: null,
        twitter: null,
        blurb: null
    };
    protected selectors:any = {
        component: 'page-card-edit'
    };
    protected elements:any = {};

    /**
     * Constructor
     *
     * @param el
     * @param cardService
     * @param formBuilder
     */
    constructor(protected el:ElementRef, private cardService:McCardService, private formBuilder:FormBuilder) {

        super(el);

        let self: McCardEdit = this;

        self.cardFormGroup = self.formBuilder.group({
            image_url: [''],
            full_name: ['', Validators.required],
            phone1: [''],
            phone2: [''],
            email: ['', Validators.required],
            github: [''],
            linkedin: [''],
            twitter: [''],
            blurb: ['']
        });

        self.cardService
            .get()
            .then(
                (value) => {

                    self.card = value;

                    self.cardFormGroup = self.formBuilder.group({
                        image_url: [self.card.image_url],
                        full_name: [self.card.full_name, Validators.required],
                        phone1: [self.card.phone1],
                        phone2: [self.card.phone2],
                        email: [self.card.email],
                        github: [self.card.github],
                        linkedin: [self.card.linkedin],
                        twitter: [self.card.twitter],
                        blurb: [self.card.blurb]
                    });

                }
            );

    }

    /**
     * The event that occurs when the file-selector updates.
     *
     * @param event
     */
    public imageChange(event) {

        let self: McCardEdit = this;

        if(!event.target.files.length) {
            return;
        }

        let reader: FileReader = new FileReader();

        reader.onload = (e: any):void => {
            self.card.image_url = e.target.result;
        };

        reader.readAsDataURL(event.target.files[0]);

    }

    /**
     * How to save the card.
     */
    public save() {

        let self: McCardEdit = this;

        self.cardService.setCard(self.card);

        McLogger.log(self.card);

    }

}
