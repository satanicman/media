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
                        }
                    ]
                }
            ]
        },
        require('../footer/footer.bemjson.js')
    ]
};
