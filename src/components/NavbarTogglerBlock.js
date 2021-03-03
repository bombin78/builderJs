import {buttonToggler} from '@/utils';
import {ValueBlock} from '@/classes/blocks';


export class NavbarTogglerBlock extends ValueBlock {
    
    constructor({classes, targetName, options} = params) {
        super(12, classes, {}, options);
        this.targetName = targetName;
    }

    toHtml() {
        const content = `<span class="${this.options.spanClasses}"></span>`;
        return buttonToggler(this.classes, this.targetName, content);
    }
}