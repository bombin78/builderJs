import {link} from '@/utils';
import {ValueBlock} from '@/classes/blocks';


export class LinkBlock extends ValueBlock {
    
    constructor({classes, href = '#', title = ''} = params) {
        super(12, classes, title, {});
        this.href = href;
    }

    toHtml() {
        return link(this.value, this.classes, this.href);
    }
}