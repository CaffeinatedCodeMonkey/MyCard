import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const CARD = 'card';

@Injectable()
export class CardService {

    public card:{
        image_url: string|null,
        full_name: string|null,
        phone1: string|null,
        phone2: string|null,
        email: string|null,
        github: string|null,
        linkedin: string|null,
        blurb: string|null
    };

    constructor(public storage: Storage) {

        let self:CardService = this;

        // Initialize all the variables.
        self.card.image_url = null;
        self.card.full_name = null;
        self.card.phone1 = null;
        self.card.phone2 = null;
        self.card.email = null;
        self.card.github = null;
        self.card.linkedin = null;
        self.card.blurb = null;

        self.populate();
    }

    /**
     * Populates the CardService with all of the user's information.
     */
    public populate() {

        let self:CardService = this;

        // Retrieve all of the variables from storage.
        self.storage.get(CARD)
            .then(
                (card) => {
                    if(card) {
                        self.card = JSON.parse(card);
                    }
                }
            );

    }

    /**
     * Returns the value corresponding to the specified key (string or null).
     * If a key is not passed, it returns all of the card information in the form of an object.
     * If a key is passed, but is not a property of the service, it returns undefined.
     *
     * @param key
     * @returns {any}
     */
    public get(key?:string):object|string|null|undefined {

        let self:CardService = this;

        if(!key) {
            return self.card;
        }

        if(self.card.hasOwnProperty(key)) {
            return self.card[key];
        }

        return undefined;

    }

    /**
     * Sets the value of a property, both locally, and in the database.
     *
     * @param key
     * @param value
     */
    public set(key:string, value:string|null):void {

        let self:CardService = this;

        self.card[key] = value;

        self.commit();

    }

    /**
     * Sets all of the matching keys of the card to the appropriate values of the passed object.
     *
     * @param card
     */
    public setCard(card:object):void {

        let self:CardService = this;

        for(let i in card) {
            if(self.card.hasOwnProperty(i)) {
                self.card[i] = card[i];
            }
        }

        self.commit();

    }

    /**
     * Sets the value of a variable to null.
     *
     * @param key
     */
    public unset(key:string):void {

        let self:CardService = this;

        self.set(key, null);

    }

    /**
     * Commits changes to the local database.
     */
    private commit():void {

        let self:CardService = this;

        self.storage.set(CARD, JSON.stringify(self.card));

    }
}