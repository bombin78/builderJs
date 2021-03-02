export function ul(items=[], classes='', styles = '') {
    const content = items.map(item => `<li class="${item.classes}">${item.value}</li>`).join('');
    return  `<ul class="${classes}" style="${styles}">${content}</ul>`;
}

export function link(content='', classes='', href, styles = '') {
    return  `<a href="${href}" class="${classes}">${content}</a>`;
}

export function linkToModal(content='', classes='', dataTarget, styles = '') {
    return  `
        <a href="#" class="${classes}" style="${styles}" data-toggle="modal" data-target="${dataTarget}">
            ${content}
        </a>
    `;
}

export function form(content='', classes='', styles = '') {
    return  `<form class="${classes}" style="${styles}">${content}</form>`;
}

export function input(inputClasses) {
    return  `<input type="text" class="${inputClasses}" placeholder="Search" arial-label="Search">`;
}

export function button(btnClasses) {
    return  `<button class="${btnClasses}">Search</button>`;
}


export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
    if(typeof styles === 'string') return styles;
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr>
    `;
}