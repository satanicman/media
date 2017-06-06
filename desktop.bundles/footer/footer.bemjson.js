module.exports = ([
    {
        block: 'footer',
        content: [
            {
                elem: 'container',
                mix: {block: 'container'},
                content: [
                    {
                        block: 'socials',
                        mix: [
                            {block: 'footer', elem: 'socials'},
                            {block: 'col-lg-12'}
                        ],
                        content: {
                            elem: 'list',
                            content: [
                                {url: '#', name: 'Facebook', icon: 'facebook'},
                                {url: '#', name: 'Twitter', icon: 'twitter'},
                                {url: '#', name: 'Google +', icon: 'google-plus'},
                                {url: '#', name: 'Linkedin', icon: 'linkedin'},
                                {url: '#', name: 'Instagram', icon: 'instagram'},
                                {url: '#', name: 'Vimeo', icon: 'vimeo'},
                                {url: '#', name: 'Youtube', icon: 'youtube-play'},
                            ].map(function (item) {
                                return {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        mix: {block: 'socials', elem: 'link'},
                                        url: item.url,
                                        title: item.name,
                                        content: [
                                            {
                                                elem: 'icon',
                                                content: {
                                                    block: 'fa',
                                                    mix: {block: 'socials', elem: 'icon'},
                                                    mods: {
                                                        icon: item.icon
                                                    }
                                                }
                                            },
                                            {
                                                block: 'text',
                                                mix: {block: 'socials', elem: 'text'},
                                                content: item.name
                                            }
                                        ]
                                    }
                                };
                            })
                        }
                    }, // footer__socials
                    {
                        block: 'col-xs-12',
                        content: {
                            block: 'row',
                            content: [
                                {
                                    block: 'footer-col',
                                    mix: [
                                        {block: 'footer', elem: 'col'},
                                        {block: 'col-lg-4'}
                                    ],
                                    content: [
                                        {
                                            block: 'image',
                                            mix: [
                                                {block: 'footer', elem: 'logo'},
                                                {block: 'img-responsive'}
                                            ],
                                            url: '../../common.blocks/footer/__logo/footer__logo.png',
                                            title: 'footer logo',
                                            alt: 'footer logo'
                                        },
                                        {
                                            block: 'text',
                                            mix: [
                                                {block: 'footer', elem: 'slogan'}
                                            ],
                                            content: 'При использовании материалов сайта обязательным условием является наличие гиперссылки в пределах первого абзаца на страницу расположения исходной статьи с указанием бренда издания Buying press Материалы с пометками "Новости компаний" и PR публикуются на правах рекламы.'
                                        }
                                    ]
                                }, // footer-col
                                {
                                    block: 'footer-col',
                                    mods: {
                                        space: 'top'
                                    },
                                    mix: [
                                        {block: 'footer', elem: 'col'},
                                        {block: 'col-lg-4'},
                                        {block: 'col-sm-6'}
                                    ],
                                    content: [
                                        {
                                            block: 'h',
                                            mods: {type: '4'},
                                            mix: {block: 'footer-header'},
                                            content: 'Меню'
                                        },
                                        {
                                            block: 'footer-menu',
                                            content: {
                                                elem: 'list',
                                                mix: {block: 'clearfix'},
                                                content: [
                                                    {url: '#', name: 'События'},
                                                    {url: '#', name: 'О проекте'},
                                                    {url: '#', name: 'Люди'},
                                                    {url: '#', name: 'Рынок'}
                                                ].map(function (elem) {
                                                    return {
                                                        elem: 'item',
                                                        content: {
                                                            block: 'link',
                                                            mix: {block: 'footer-menu', elem: 'link'},
                                                            url: elem.url,
                                                            title: elem.name,
                                                            content: elem.name
                                                        }
                                                    };
                                                })
                                            }
                                        }
                                    ]
                                }, // footer-col
                                {
                                    block: 'footer-col',
                                    mods: {
                                        space: 'top'
                                    },
                                    mix: [
                                        {block: 'footer', elem: 'col'},
                                        {block: 'col-lg-4'},
                                        {block: 'col-sm-6'}
                                    ],
                                    content: [
                                        {
                                            block: 'h',
                                            mods: {type: '4'},
                                            mix: {block: 'footer-header'},
                                            content: 'Подписаться на рассылку:'
                                        },
                                        {
                                            block: 'newsletter',
                                            content: {
                                                elem: 'form',
                                                method: 'POST',
                                                action: '/',
                                                content: [
                                                    {
                                                        block: 'input',
                                                        mix: {block: 'newsletter', elem: 'input'},
                                                        name: 'newsletter',
                                                        placeholder: 'Email...'
                                                    },
                                                    {
                                                        block: 'button',
                                                        mix: [
                                                            {block: 'newsletter', elem: 'button'},
                                                            {block: 'fa', mods: {icon: 'paper-plane'}}
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                } // footer-col
                            ]
                        }
                    }
                ]
            }, // footer__container
            {
                block: 'copyright',
                mix: {block: 'footer', elem: 'copyright'},
                content: {
                    block: 'container',
                    content: {
                        block: 'text',
                        mix: {block: 'copyright', elem: 'text'},
                        content: 'BuyingPress @ 2017  ВСЕ ПРАВА ЗАЩИЩЕНЫ'
                    }
                }
            } // copyright
        ]
    } // footer
]);
