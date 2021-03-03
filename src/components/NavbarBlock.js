import {div} from '@/utils';
import {ItemsBlock} from '@/classes/blocks';


export class NavbarBlock extends ItemsBlock {

    constructor({id, classes, items} = params) {
        super(12, classes, items, {});
    }

    toHtml() {
        return div(this.id, this.items, this.classes);
    }
}