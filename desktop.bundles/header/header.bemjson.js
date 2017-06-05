module.exports = ([
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
                            mix: {block: 'banner', elem: 'link'},
                            url: '#',
                            title: 'top banner',
                            js: false,
                            content: {
                                block: 'image',
                                mix: [
                                    {block: 'banner', elem: 'image'},
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
                                    ].map(function (element) {
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
    } // header
]);
