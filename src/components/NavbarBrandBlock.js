import {link} from '@/utils';
import {ValueBlock} from '@/classes/blocks';


export class NavbarBrandBlock extends ValueBlock {
    
    constructor({classes, href = '#', value = ''} = params) {
        super(12, classes, value, {});
        this.href = href;
    }

    toHtml() {
        return link(this.value, this.classes, this.href);
    }
}