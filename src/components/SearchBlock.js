import {form, input, button, css} from '@/utils';
import {ValueBlock} from '@/classes/blocks';


export class SearchBlock extends ValueBlock {
    
    constructor({classes, options} = params) {
        super(12, classes, {}, options);
    }

    toHtml() {
        const {inputClasses, btnClasses, styles} = this.options;
        const html = [
                input(inputClasses),
                button(btnClasses),
            ].join('');

        return form(html, this.classes, css(styles));
    }
}