import {linkToModal} from '@/utils';
import {ValueBlock} from '@/classes/blocks';


export class LinkToModalBlock extends ValueBlock {
    
    constructor({classes, dataTarget = '', title = ''} = params) {
        super(12, classes, title, {});
        this.dataTarget = dataTarget;
    }

    toHtml() {
        return linkToModal(this.value, this.classes, this.dataTarget);
    }
}