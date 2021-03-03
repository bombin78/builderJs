import {img} from '@/utils';
import {ValueBlock} from '@/classes/blocks';


export class ImgBlock extends ValueBlock {
    
    constructor({classes, src, alt, options} = params) {
        super(12, classes, src, options);
        this.alt = alt;
    }

    toHtml() {
        return img(this.value, this.classes, this.alt, this.options);
    }
}