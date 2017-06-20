import { Directive } from '@angular/core';

@Directive({
    selector: '[rounded]',
    host: {
        '[style.border-radius]': '"50%"'
    }
})

export class Rounded {}