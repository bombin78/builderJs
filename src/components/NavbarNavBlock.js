import {ul} from '@/utils';
import {ItemsBlock} from '@/classes/blocks';


export class NavbarNavBlock extends ItemsBlock {

    constructor({classes, items} = params) {
        super(12, classes, items, {});
    }

    toHtml() {
        return ul(this.items, this.classes);
    }
}