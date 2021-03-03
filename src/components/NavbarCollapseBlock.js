import {div} from '@/utils';
import {ItemsBlock} from '@/classes/blocks';


export class NavbarCollapseBlock extends ItemsBlock {

    constructor({id, classes, items} = params) {
        super(id, classes, items, {});
    }

    toHtml() {
        return div(this.id, this.items, this.classes);
    }
}