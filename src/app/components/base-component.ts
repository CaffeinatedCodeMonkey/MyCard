import { Component, ElementRef } from '@angular/core';
import { MyLogger } from '../library/my-logger';
declare var jquery:any;
declare var $:any;

@Component({
    selector: 'base-component',
    template: ''
})
export class BaseComponent {

    protected selectors:any = {component: 'base-component'};
    protected elements:any = {};

    constructor(protected el:ElementRef) {}

    /**
     * Sets up the elements for the derived class's selectors.
     */
    ngAfterViewInit() {

        let self:any = this; // Set as any to accommodate the extended classes.

        self.initializeElementSet(self.selectors, self.elements)

    }

    /**
     * Initializes elements for the given selectors, prefixing them with '$'.
     * The resulting object will have an identical structure as the selector set.
     *
     * @param selectorSet
     * @param elementSet
     */
    private initializeElementSet(selectorSet:any, elementSet:any):any {

        let self:any = this; // Set as any to accommodate the extended classes.

        for(let i in selectorSet) {

            if(typeof selectorSet[i] == 'object') {

                elementSet[i] = self.initializeElementSet(selectorSet[i], {});

            }
            else if(typeof selectorSet[i] == 'string') {

                elementSet['$' + i] = self.initializeElement(selectorSet[i]);

            }
            else {

                MyLogger.error('Invalid selector property type in ', self)

            }

        }

    }

    /**
     * Returns jQuery object within this component for a given selector.
     *
     * @param selector
     * @returns {any}
     */
    private initializeElement(selector:string):any {

        let self:any = this; // Set as any to accommodate the extended classes.

        return $(selector, $(self.el.nativeElement));

    }

}