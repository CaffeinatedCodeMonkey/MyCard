import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Card } from "../interfaces/card";

const CARD = 'card';

@Injectable()
export class CardService {

    private ready:boolean = false;
    public card:Card = {
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

    /**
     * Constructor
     *
     * @param storage
     */
    constructor(public storage: Storage) {

        let self:CardService = this;

        self.populate();

    }

    /**
     * Populates the CardService with all of the user's information.
     */
    public populate(): Promise<Card|any> {

        let self:CardService = this;

        return new Promise((resolve, reject) => {

                // Retrieve all of the variables from storage.
                self.storage.get(CARD)
                    .then(
                        (card) => {
                            if(card) {
                                self.card = JSON.parse(card);

                                resolve(self.card);
                            }
                        },
                        (error) => {
                            reject(error);
                        }
                    );

            });

    }

    /**
     * Returns the value corresponding to the specified key (string or null).
     * If a key is not passed, it returns all of the card information in the form of an object.
     * If a key is passed, but is not a property of the service, it returns undefined.
     *
     * @param key
     * @returns {Promise<T>}
     */
    public get(key?:string):Promise<object|string|any> {

        let self:CardService = this;

        return new Promise((resolve, reject) => {

            if(!self.ready) {

                // If I haven't populated the card yet with what's in storage, do so.

                return self.populate()
                    .then(
                        () => { // If I've successfully populated the card.

                            if(!key) {
                                resolve(self.card);
                            }
                            else if(self.card.hasOwnProperty(key)) {
                                resolve(self.card[key]);
                            }
                            else {
                                reject();
                            }

                        },
                        (error:any) => { // If getting the card resulted in an error.

                            reject(error);

                        }
                    );

            }
            else {

                // If I've already retrieved the card, let's deal with the info we've got.

                if(!key) {
                    resolve(self.card);
                }
                else if(self.card.hasOwnProperty(key)) {
                    resolve(self.card[key]);
                }
                else {
                    reject();
                }

            }

        });
    }

    /**
     * Sets the value of a property, both locally, and in the database.
     *
     * @param key
     * @param value
     */
    public set(key:string, value:string|null):void {

        let self:CardService = this;

        // Set the value.
        self.card[key] = value;

        // Commit the change to storage.
        self.commit();

    }

    /**
     * Sets all of the matching keys of the card to the appropriate values of the passed object.
     *
     * @param card
     */
    public setCard(card:object):void {

        let self:CardService = this;

        // Set the values.
        for(let i in card) {
            if(self.card.hasOwnProperty(i)) {
                self.card[i] = card[i];
            }
        }

        // Commit the change(s) to storage.
        self.commit();

    }

    /**
     * Sets the value of a variable to null.
     *
     * @param key
     */
    public unset(key:string):void {

        let self:CardService = this;

        // Leverage this class's set function.
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