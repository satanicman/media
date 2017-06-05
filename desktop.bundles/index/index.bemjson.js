module.exports = {
    block: 'page',
    title: 'Медиа-бизнес',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    mods: {theme: 'media'},
    mix: [
        {block: 'reset'},
        {block: 'normalize'},
        {block: 'bootstrap'}
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'container',
                    content: [
                        {
                            block: 'banner',
                            mods: {top: true},
                            content: {
                                block: 'link',
                                url: '#',
                                title: 'top banner',
                                js: false,
                                content: {
                                    block: 'image',
                                    mix: [
                                        {block: 'banner', elem: 'image'},
                                        {block: 'img-responsive'}
                                    ],
                                    alt: 'banner top',
                                    url: '../../common.blocks/banner/_top/banner_top.jpg'
                                }
                            }
                        }, // banner_top
                        {
                            block: 'logo',
                            mods: {top: true},
                            content: [
                                {
                                    elem: 'name',
                                    content: 'Buying Press'
                                },
                                {
                                    elem: 'slogan',
                                    content: 'Профессионально о медиабизнессе Украины'
                                }
                            ]
                        } // logo_top
                    ]
                },
                {
                    block: 'mobile-menu',
                    content: {
                        block: 'container',
                        mix: {block: 'mobile-menu', elem: 'container'},
                        content: [
                            {
                                block: 'mobile-menu-header',
                                mix: [
                                    {block: 'mobile-menu', elem: 'header'},
                                    {block: 'collapsed'}
                                ],
                                content: [
                                    {
                                        elem: 'name',
                                        content: 'Меню'
                                    },
                                    {
                                        elem: 'button',
                                        mix: [
                                            {block: 'fa', mods: {icon: 'times'}}
                                        ]
                                    }
                                ]
                            }, // mobile-menu-header
                            {
                                block: 'mobile-menu-collapsed',
                                mix: {block: 'collapse'},
                                id: 'mobile-menu',
                                content: [
                                    {
                                        block: 'mobile-menu-nav',
                                        mix: {block: 'mobile-menu', elem: 'nav'},
                                        content: [
                                            {name: 'События'},
                                            {name: 'Люди'},
                                            {name: 'Рынок'},
                                            {name: 'О проекте'}
                                        ].map(function(element) {
                                            return {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    mix: {block: 'mobile-menu-nav', elem: 'link'},
                                                    url: '#',
                                                    title: element.name,
                                                    content: element.name,
                                                    js: false
                                                }
                                            };
                                        })
                                    }, // mobile-menu-nav
                                    {
                                        block: 'mobile-menu-form',
                                        mix: {block: 'mobile-menu', elem: 'form'},
                                        content: [
                                            {
                                                block: 'input',
                                                mix: {block: 'mobile-menu-form', elem: 'input'},
                                                name: 'search',
                                                placeholder: 'Поиск по сайту'
                                            },
                                            {
                                                block: 'button',
                                                mix: [
                                                    {block: 'mobile-menu-form', elem: 'button'},
                                                    {block: 'fa', mods: {icon: 'search'}}
                                                ],
                                                type: 'button'
                                            }
                                        ]
                                    } // mobile-menu-form
                                ]
                            } // mobile-menu-collapsed
                        ]
                    }
                } // mobile-menu
            ]
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'container',
                    mix: {block: 'container'},
                    content: [
                        {
                            block: 'news-top',
                            mix: {block: 'clearfix'},
                            content: {
                                elem: 'list',
                                mix: [
                                    {block: 'col-lg-12'}
                                ],
                                content: [
                                    {rubric: 'Рынок', text: 'Революция на рынке наружной рекламы Киева'},
                                    {rubric: 'Новости', text: 'Скандал с Укрпочтой: издательство осталось без денег'},
                                    {rubric: 'Новости', text: 'Суд США зпретил UMH Использовать бренд Forbes'},
                                    {rubric: 'Люди', text: 'Андрей Хрусталев покинул журнал Корреспондент'}
                                ].map(function(elem, index) {
                                    var id = index + 1;
                                    return {
                                        block: 'news',
                                        mods: {type: 'plate'},
                                        tag: 'li',
                                        mix: [
                                            {block: 'news-top', elem: 'item'}
                                        ],
                                        content: [
                                            {
                                                block: 'image',
                                                mix: [
                                                    {block: 'news', elem: 'image'},
                                                    {block: 'img-responsive'}
                                                ],
                                                url: '../../common.blocks/news/_type/news_type_plate-' + id + '.jpg',
                                                title: elem.text
                                            },
                                            {
                                                elem: 'content',
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mix: {block: 'news', elem: 'rubric', elemMods:{type: id}},
                                                        content: elem.rubric
                                                    },
                                                    {
                                                        block: 'text',
                                                        mix: {block: 'news', elem: 'description'},
                                                        content: elem.text
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                })
                            }
                        },
                        {
                            block: 'fa',
                            mods: {
                                icon: 'adjust'
                            }
                        },
                        {
                            block: 'button',
                            mods: {
                                size: 'md',
                                theme: 'media',
                                color: 'orange'
                            },
                            text: 'test'
                        },
                        {
                            block: 'button',
                            mods: {
                                size: 'md',
                                theme: 'media',
                                color: 'blue'
                            },
                            text: 'test'
                        },
                        {
                            block: 'button',
                            mods: {
                                size: 'md',
                                theme: 'media'
                            },
                            text: 'test'
                        },
                        {
                            block: 'headers',
                            content: [
                                {
                                    block: 'h',
                                    mods: {
                                        type: '1'
                                    },
                                    content: 'h1'
                                },
                                {
                                    block: 'h',
                                    mods: {
                                        type: '2'
                                    },
                                    content: 'h2'
                                },
                                {
                                    block: 'h',
                                    mods: {
                                        type: '3'
                                    },
                                    content: 'h3'
                                },
                                {
                                    block: 'h',
                                    mods: {
                                        type: '4'
                                    },
                                    content: 'h4'
                                },
                                {
                                    block: 'h',
                                    mods: {
                                        type: '5'
                                    },
                                    content: 'h5'
                                },
                                {
                                    block: 'text',
                                    content: 'Киевский городской совет утвердил новую концепцию развития наружной рекламы. За это решение проголосовали 85 депутатов, но его еще должен подписать мэр, отмечает MMR. Новые правила предусматривают разделение Киева на пять зон - начиная от нулевой в центре, где наружная реклама практически запрещена.'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: 'footer'
        }
    ]
};
