import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base-component";

/**
 * This will function as a nice file selector. Once the content of this component is clicked/tapped, it will open the file selector.
 */
@Component({
    selector: 'file-selector',
    templateUrl: 'file-selector.html'
})
export class McFileSelector extends BaseComponent {

    @Input('file') public file:any;
    @Input('accept') public accept:string;
    protected selectors:{file_input:string, select_trigger:string} = {
        file_input: '.hidden-input > input[type="file"]',
        select_trigger: '.file-selector-trigger',
    };
    protected elements:any;

    /**
     * Using this as an equivalent to $(document).ready(),
     */
    ngAfterViewInit() {

        super.ngAfterViewInit();

        let self:McFileSelector = this;

        // Bind a click on the content as a click on the file input, which is actually hidden.
        self.elements.$select_trigger.on('click', () => {
            self.elements.$file_input.trigger('click');
        });

    }

}

