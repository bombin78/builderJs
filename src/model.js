import {NavbarBlock} from './components/NavbarBlock';
import {NavbarCollapseBlock} from './components/NavbarCollapseBlock';
import {NavbarNavBlock} from './components/NavbarNavBlock';
import {LinkBlock} from './components/LinkBlock';
import {LinkToModalBlock} from './components/LinkToModalBlock';
import {SearchBlock} from './components/SearchBlock';
//import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks';

export const model = [
    new NavbarBlock({
        classes: 'navbar navbar-expand-lg navbar-dark bg-dark sticky-top',
        items: [
            new NavbarCollapseBlock({
                id: 'navbarSupportedContent',
                classes: 'collapse navbar-collapse',
                items: [
                    new NavbarNavBlock({
                        classes: 'navbar-nav mr-auto',
                        items: [
                            {
                                classes: 'nav-item active',
                                value: new LinkBlock({
                                    classes: 'nav-link',
                                    href: '#',
                                    title: 'Home',
                                }).toHtml(),
                            },
                            {
                                classes: 'nav-item',
                                value: new LinkBlock({
                                    classes: 'nav-link',
                                    href: '#',
                                    title: 'Page1',
                                }).toHtml(),
                            },
                            {
                                classes: 'nav-item',
                                value: new LinkBlock({
                                    classes: 'nav-link',
                                    href: '#',
                                    title: 'Page2',
                                }).toHtml(),
                            },
                            {
                                classes: 'nav-item',
                                value: new LinkToModalBlock({
                                    classes: 'nav-link',
                                    title: 'Log in',
                                    dataTarget: '#exampleModal',
                                }).toHtml(),
                            },
                            {
                                classes: 'nav-item',
                                value: new LinkToModalBlock({
                                    classes: 'nav-link',
                                    title: 'ModalLg',
                                    dataTarget: '#exampleModalLg',
                                }).toHtml(),
                            },
                        ],
                    }).toHtml(),
                    new SearchBlock({
                        classes: 'form-inline my-2 my-lg-0',
                        options: {
                            inputClasses: 'form-control mr-sm-2',
                            btnClasses: 'btn btn-outline-success my-2 my-sm-0',
                        },
                    }).toHtml(),
                ],
            }).toHtml(),
        ],
    }),
    // new NavbarBlock(
    //     classes: 'navbar navbar-expand-lg navbar-dark bg-dark sticky-top',
    //     items: [
    //         new NavbarBrandBlock({
    //             classes: 'navbar-brand',
    //             src: 'logo65x55.png',
    //             width: '35',
    //             height: '30',
    //             alt: 'логотип'
    //         }),
    //         new NavbarTogglerBlock({
    //             classes: 'navbar-toggler',
    //             spanClasses: 'navbar-toggler-icon',
    //             dataTarget="#navbarSupportedContent"
    //             ariaControls: 'navbarSupportedContent'
    //         })
    //         new NavbarCollapseBlock({
    //             id: 'navbarSupportedContent',
    //             classes: 'collapse navbar-collapse',
    //             items: [
    //                 new NavbarNavBlock({
    //                     classes: 'navbar-nav mr-auto',
    //                     items: [
    //                         new NavItemBlock({
    //                             classes: 'nav-item active',
    //                             linkClasses: 'nav-link',
    //                             href: '#',
    //                             title: 'Home',
    //                         }),
    //                         new NavItemBlock({
    //                             classes: 'nav-item',
    //                             linkClasses: 'nav-link',
    //                             href: '#',
    //                             title: 'Page1',
    //                         }),
    //                         new NavItemBlock({
    //                             classes: 'nav-item',
    //                             linkClasses: 'nav-link'
    //                             href: '#',
    //                             title: 'Page2',
    //                         }),
    //                         new NavItemFromModalBlock({
    //                             classes: 'nav-item',
    //                             linkClasses: 'nav-link'
    //                             title: 'Log in',
    //                             dataTarget='#exampleModalLg',
    //                         }),
    //                         new NavItemFromModalBlock({
    //                             classes: 'nav-item',
    //                             linkClasses: 'nav-link'
    //                             title: 'ModalLg',
    //                             dataTarget='#exampleModalLg',
    //                         }),
    //                     ])
    //                 }
    //                 new SearchBlock({
    //                         classes: 'form-inline my-2 my-lg-0',
    //                         options: {
    //                             inputClasses: 'form-control mr-sm-2',
    //                             btnClasses: 'btn btn-outline-success my-2 my-sm-0',
    //                         }
    //                     }
    //                 })
    //             ],
    //         })}
    //     ]
    // ]),
    // new TitleBlock('JS билдер', {
    //     tag: 'h2',
    //     styles: {
    //         background: 'linear-gradient(to right, #ff0099, #493240)',
    //         color: '#fff',
    //         padding: '1.5rem',
    //         'text-align': 'center',
    //     },
    // }),
    // new TextBlock('here we go with some text'),
    // new ColumnsBlock([
    //     '111111111',
    //     '222222222',
    //     '333333333',
    // ], {}),
    // new ImageBlock('image1.jpg', {
    //     styles: {
    //         display: 'flex',
    //         padding: '2rem 0',
    //         'justify-content': 'center',
    //     },
    //     imageStyles: {
    //         width: '600px',
    //         height: 'auto',
    //     },
    //     alt: 'Это картинка № 1',
    // }),
];