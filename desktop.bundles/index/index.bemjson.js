module.exports = {
    block: 'page',
    title: 'Медиа-бизнес',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'media' },
    mix: [
        {block: 'reset'},
        {block: 'normalize'},
        {block: 'bootstrap'}
    ],
    content: [
        {
            block: 'header',
            content: 'header'
        },
        {
            block: 'content',
            mix: {block: 'container'},
            content: [
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
        },
        {
            block: 'footer',
            content: 'footer'
        }
    ]
};
