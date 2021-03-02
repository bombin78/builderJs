import {form, input, button, row, col, css} from '@/utils';

class Block {
    
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHtml() {
        throw new Error('Метод toHtml должен быть реализован');
    }
}

class ClassesBlock {

    constructor(id, classes, options) {
        this.id = id;
        this.classes = classes;
        this.options = options;
    }

    toHtml() {
        throw new Error('Метод toHtml должен быть реализован');
    }
}

class ValueBlock extends ClassesBlock {

    constructor(id, classes, value, options) {
        super(id, classes, options);
        this.value = value;
    }
}

class ItemsBlock extends ClassesBlock {

    constructor(id, classes, items, options) {
        super(id, classes, options);
        this.items = items;
    }
}

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

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'h1', styles} = this.options ?? {};
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        return row(col(`<p>${this.value}</p>`), css(this.options?.styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const html = this.value.map(item => col(`<p>${item}</p>`)).join('');
        return row(html, css(this.options?.styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles, imageStyles: iCss, alt = ''} = this.options ?? {};
        return row(`<img src="${this.value}" alt="${alt}" style="${css(iCss)}">`, css(styles));
    }
}