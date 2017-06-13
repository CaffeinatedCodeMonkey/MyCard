import { Component } from '@angular/core';
declare var jquery:any;
declare var $:any;

/**
 * This will function as a nice file selector. Once the content of this component is clicked/tapped, it will open the file selector.
 */
@Component({
    selector: 'file-selector',
    templateUrl: 'file-selector.html'
})
export class FileSelector {

    public file:any;
    public accept:string;
    private selectors:{file_input:string, select_trigger:string, content:string} = {
        file_input: 'file-selector .hidden-input > input[type="file"]',
        select_trigger: 'file-selector .file-selector-trigger',
        content: 'file-selector .file-selector-trigger > ng-content'
    };

    constructor() {

    }

    /**
     * Using this as an equivalent to $(document).ready(),
     */
    ngAfterViewInit() {

        let self:FileSelector = this;

        // Bind a click on the content as a click on the file input, which is actually hidden.
        $(self.selectors.select_trigger).on('click', () => {
            $(self.selectors.file_input).trigger('click');
        });

    }

}

