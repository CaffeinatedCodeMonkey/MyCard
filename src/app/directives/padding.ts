import { Directive, HostBinding, Input } from '@angular/core';

/**
 * This directive allows me to set the top-side padding using the attribute pt="##px".
 */
@Directive({
    selector: '[pt]'
})
export class McPaddingTop {
    @HostBinding('style.padding-top')
    @Input('pt') paddingTop : string;
}

/**
 * This directive allows me to set the right-side padding using the attribute pr="##px".
 */
@Directive({
    selector: '[pr]'
})
export class McPaddingRight {
    @HostBinding('style.padding-right')
    @Input('pr') paddingRight : string;
}

/**
 * This directive allows me to set the bottom-side padding using the attribute pb="##px".
 */
@Directive({
    selector: '[pb]'
})
export class McPaddingBottom {
    @HostBinding('style.padding-bottom')
    @Input('pb') paddingBottom : string;
}

/**
 * This directive allows me to set the left-side padding using the attribute pl="##px".
 */
@Directive({
    selector: '[pl]'
})
export class McPaddingLeft {
    @HostBinding('style.padding-left')
    @Input('pl') paddingLeft : string;
}