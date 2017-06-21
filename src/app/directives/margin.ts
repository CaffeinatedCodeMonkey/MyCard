import { Directive, HostBinding, Input } from '@angular/core';

/**
 * This directive allows me to set the top-side margin using the attribute mt="##px".
 */
@Directive({
    selector: '[mt]'
})
export class MarginTop {
    @HostBinding('style.margin-top')
    @Input('mt') marginTop : string;
}

/**
 * This directive allows me to set the right-side margin using the attribute mr="##px".
 */
@Directive({
    selector: '[mr]'
})
export class MarginRight {
    @HostBinding('style.margin-right')
    @Input('mr') marginRight : string;
}

/**
 * This directive allows me to set the bottom-side margin using the attribute mb="##px".
 */
@Directive({
    selector: '[mb]'
})
export class MarginBottom {
    @HostBinding('style.margin-bottom')
    @Input('mb') marginBottom : string;
}

/**
 * This directive allows me to set the left-side margin using the attribute ml="##px".
 */
@Directive({
    selector: '[ml]'
})
export class MarginLeft {
    @HostBinding('style.margin-left')
    @Input('ml') marginLeft : string;
}