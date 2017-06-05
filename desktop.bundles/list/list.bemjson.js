module.exports = {
    block: 'page',
    title: 'Медиа-бизнес список статей',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'list.min.css'}
    ],
    scripts: [{elem: 'js', url: 'list.min.js'}],
    mods: {theme: 'media'},
    mix: [
        {block: 'reset'},
        {block: 'normalize'},
        {block: 'bootstrap'}
    ],
    content: [
        require('../header/header.bemjson.js'),
        {
            block: 'content',
            content: [
                {
                    elem: 'container',
                    mix: {block: 'container'},
                    content: [
                        {
                            block: 'breadcrumbs',
                            content: [
                                {
                                    block: 'link',
                                    mix: [
                                        {block: 'breadcrumbs', elem: 'link', elemMods: {home: true}}
                                    ],
                                    url: '/',
                                    title: 'Главная',
                                    content: [
                                        {
                                            block: 'fa',
                                            mods: {icon: 'home'},
                                            mix: {block: 'breadcrumbs', elem: 'icon'}
                                        },
                                        'Главная'
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: '/'
                                },
                                {
                                    elem: 'item',
                                    content: 'Люди'
                                }
                            ]
                        }, // breadcrumbs
                        {
                            block: 'main',
                            content: [
                                {
                                    elem: 'center-column',
                                    content: [
                                        {
                                            elem: 'news-list',
                                            content: {
                                                block: 'news-list',
                                                content: [
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    },
                                                    {
                                                        name: 'ВОЛОДИМИР МАКЕЄНКО СТАВ ВЛАСНИКОМ 9,5% ТЕЛЕКАНАЛУ TONIS',
                                                        date: '12.04.2017',
                                                        comments: '1',
                                                        text: 'У структурі власності ТОВ «Телеканал “Тоніс”» (телеканал Tonis) відбулися зміни: власником частки 9,5% статутного фонду став український політик Володимир Макеєнко. (...)'
                                                    }
                                                ].map(function (item, index) {
                                                    return {
                                                        elem: 'item',
                                                        content: {
                                                            block: 'link',
                                                            mix: {block: 'news', elem: 'link'},
                                                            url: item.url,
                                                            title: item.url,
                                                            content: {
                                                                block: 'news',
                                                                mods: {
                                                                    type: 'list'
                                                                },
                                                                content: [
                                                                    {
                                                                        elem: 'image',
                                                                        content: {
                                                                            block: 'image',
                                                                            url: '../../common.blocks/news/_type/news_type_list.jpg',
                                                                            title: item.name,
                                                                            alt: item.name
                                                                        }
                                                                    },
                                                                    {
                                                                        block: 'news-description',
                                                                        mix: {block: 'news', elem: 'description'},
                                                                        content: [
                                                                            {
                                                                                elem: 'title',
                                                                                content: item.name
                                                                            },
                                                                            {
                                                                                elem: 'info',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'date',
                                                                                        content: item.date
                                                                                    },
                                                                                    {
                                                                                        elem: 'comments',
                                                                                        mix: {
                                                                                            block: 'fa',
                                                                                            mods: {icon: 'comments-o'}
                                                                                        },
                                                                                        content: item.comments
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'text',
                                                                                content: item.text
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    };
                                                })
                                            } // news-list
                                        }, // news-list
                                        {
                                            block: 'pagination',
                                            mix: {block: 'main', elem: 'pagination'},
                                            content: [
                                                {
                                                    block: 'link',
                                                    mix: [
                                                        {block: 'pagination', elem: 'link'}
                                                    ],
                                                    url: '#',
                                                    title: 'Предыдущая',
                                                    content: [
                                                        {
                                                            block: 'fa',
                                                            mods: {icon: 'angle-left'},
                                                            mix: {block: 'pagination', elem: 'icon'}
                                                        },
                                                        'Пред.'
                                                    ]
                                                },
                                                {
                                                    elem: 'list',
                                                    content: [
                                                        {page: 1, url: '#1'},
                                                        {page: 2, url: '#2', active: true},
                                                        {page: 3, url: '#3'}
                                                    ].map(function(item) {
                                                        return {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'link',
                                                                mix: {block: 'pagination', elem: 'link', elemMods: {active: item.active !== undefined}},
                                                                url: item.url,
                                                                title: 'Страница ' + item.page,
                                                                content: item.page
                                                            }
                                                        };
                                                    })
                                                },
                                                {
                                                    elem: 'elem',
                                                    mix: [
                                                    ],
                                                    content: [
                                                        'След.',
                                                        {
                                                            block: 'fa',
                                                            mods: {icon: 'angle-right'},
                                                            mix: {block: 'pagination', elem: 'icon'}
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, // pagination
                                        {
                                            block: 'banner',
                                            mods: {center: true},
                                            content: {
                                                block: 'link',
                                                mix: {block: 'banner', elem: 'link'},
                                                url: '#',
                                                alt: 'center banner',
                                                title: 'center banner',
                                                content: {
                                                    block: 'image',
                                                    mix: {block: 'banner', elem: 'image'},
                                                    url: '../../common.blocks/banner/_center/banner_center.jpg',
                                                    title: 'center banner',
                                                    alt: 'center banner'
                                                }
                                            }
                                        } // banner_center
                                    ]
                                }, // main__center-column
                                {
                                    elem: 'right-column',
                                    content: [
                                        {num: 1},
                                        {num: 2}
                                    ].map(function (elem) {
                                        return {
                                            block: 'banner',
                                            mods: {right: true},
                                            content: {
                                                block: 'link',
                                                mix: {block: 'banner', elem: 'link'},
                                                url: '#',
                                                alt: 'right column',
                                                title: 'right column',
                                                content: {
                                                    block: 'image',
                                                    mix: {block: 'banner', elem: 'image'},
                                                    url: '../../common.blocks/banner/_right/banner_right-' + elem.num + '.jpg',
                                                    alt: 'right banner 1' + elem.num,
                                                    title: 'right banner 1' + elem.num
                                                }
                                            }
                                        };
                                    })
                                } // main__right-column
                            ]
                        }
                    ]
                }
            ]
        },
        require('../footer/footer.bemjson.js')
    ]
};
