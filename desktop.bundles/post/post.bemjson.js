module.exports = {
    block: 'page',
    title: 'Медиа-бизнес список статей',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'post.min.css'}
    ],
    scripts: [{elem: 'js', url: 'post.min.js'}],
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
                                            block: 'post',
                                            content: [
                                                {
                                                    block: 'image',
                                                    mix: {block: 'post', elem: 'image'},
                                                    url: '../../common.blocks/post/post.jpg',
                                                    alt: 'post image',
                                                    title: 'post image'
                                                },
                                                {
                                                    block: 'h',
                                                    mods: {type: '3'},
                                                    mix: {block: 'post', elem: 'title'},
                                                    content: 'РЕВОЛЮЦИЯ НА РЫНКЕ НАРУЖНОЙ РЕКЛАМЫ КИЕВА'
                                                },
                                                {
                                                    block: 'text',
                                                    mix: {block: 'post', elem: 'date'},
                                                    content: '27.04 2017'
                                                },
                                                {
                                                    block: 'text',
                                                    mix: {block: 'post', elem: 'text'},
                                                    content: 'Киевский городской совет утвердил новую концепцию развития наружной рекламы. За это решение проголосовали 85 депутатов, но его еще должен подписать мэр, отмечает MMR. Новые правила предусматривают разделение Киева на пять зон - начиная от нулевой в центре, где наружная реклама практически запрещена.'
                                                },
                                                {
                                                    block: 'text',
                                                    mix: {block: 'post', elem: 'text'},
                                                    content: 'В нулевую зону входят главные центральные улицы, площади и парки, также ряд транспортных развязок столицы. В частности, рекламы не будет в пределах охранной зоны заповедника «Киево-Печерская лавра», возле Софии Киевской, на Андреевском спуске, улицах Владимирской, Богдана Хмельницкого, Грушевского, Верхнем и Нижнем валах, Большой Житомирской, Стрелецкой, Лысенко, Ярославовом Валу, Софийской и Михайловской площадях. В этот перечень также попали ряд улиц далеко от центра города, в частности бульвар Верховного Совета, Русановский бульвар и некоторые другие.'
                                                },
                                                {
                                                    block: 'text',
                                                    mix: {block: 'post', elem: 'text'},
                                                    content: ' По исключения попала реклама на фасаде площадью не более 3 квадратных метров, баннеры или панно на лесах или фасадах и афишные тумбы. Рекламу будут демонтировать постепенно после окончания срока выданных разрешений на наружную рекламу. Планируется, что через несколько лет в Киеве должно исчезнуть 75% наружной рекламы в центральной части города '
                                                },
                                                {
                                                    elem: 'bottom',
                                                    content: [
                                                        {
                                                            block: 'post-buttons',
                                                            content: [
                                                                {
                                                                    block: 'button',
                                                                    mix: {block: 'post-buttons', elem: 'button'},
                                                                    text: 'Новости'
                                                                },
                                                                {
                                                                    block: 'button',
                                                                    mix: {block: 'post-buttons', elem: 'button'},
                                                                    text: 'Общество'
                                                                },
                                                                {
                                                                    block: 'button',
                                                                    mix: {block: 'post-buttons', elem: 'button'},
                                                                    text: 'Люди'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'share',
                                                            content: {
                                                                elem: 'list',
                                                                content: [
                                                                    {name: 'facebook', icon: 'facebook'},
                                                                    {name: 'twitter', icon: 'twitter'},
                                                                    {name: 'pinterest', icon: 'pinterest'},
                                                                    {name: 'rss', icon: 'rss'},
                                                                    {name: 'like', icon: 'heart'}
                                                                ].map(function(item) {
                                                                    return {
                                                                        elem: 'item',
                                                                        content: {
                                                                            block: 'link',
                                                                            mix: [
                                                                                {block: 'share', elem: 'link'},
                                                                                {block: 'fa', mods: {icon: item.icon}}
                                                                            ],
                                                                            url: '#',
                                                                            title: item.name,
                                                                        }
                                                                    };
                                                                })
                                                            }
                                                        }
                                                    ]
                                                }, // post__bottom
                                                {
                                                    elem: 'comments',
                                                    content: {
                                                        block: 'comments',
                                                        content: [
                                                            {
                                                                block: 'h',
                                                                mods: {type: '3'},
                                                                mix: {block: 'comments', elem: 'title'},
                                                                content: '1 Комментарий'
                                                            },
                                                            {
                                                                elem: 'list',
                                                                content: {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'comment',
                                                                        content: [
                                                                            {
                                                                                elem: 'avatar',
                                                                                content: {
                                                                                    block: 'image',
                                                                                    mix: {block: 'comment', elem: 'image'},
                                                                                    url: '../../common.blocks/comment/comment.jpg',
                                                                                    alt: 'avatar',
                                                                                    title: 'avatar'
                                                                                }
                                                                            },
                                                                            {
                                                                                elem: 'content',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'header',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'info',
                                                                                                content: [
                                                                                                    {
                                                                                                        elem: 'date',
                                                                                                        content: '27.02.2017'
                                                                                                    },
                                                                                                    {
                                                                                                        elem: 'name',
                                                                                                        content: 'Павло Зибров'
                                                                                                    }
                                                                                                ]
                                                                                            }, // comment__info
                                                                                            {
                                                                                                elem: 'button',
                                                                                                content: {
                                                                                                    block: 'button',
                                                                                                    text: 'ответить'
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }, // comment__header
                                                                                    {
                                                                                        elem: 'description',
                                                                                        content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.'
                                                                                    },
                                                                                    {
                                                                                        block: 'comments',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'list',
                                                                                                content: {
                                                                                                    elem: 'item',
                                                                                                    content: {
                                                                                                        block: 'comment',
                                                                                                        content: [
                                                                                                            {
                                                                                                                elem: 'avatar',
                                                                                                                content: {
                                                                                                                    block: 'image',
                                                                                                                    mix: {block: 'comment', elem: 'image'},
                                                                                                                    url: '../../common.blocks/comment/comment.jpg',
                                                                                                                    alt: 'avatar',
                                                                                                                    title: 'avatar'
                                                                                                                }
                                                                                                            },
                                                                                                            {
                                                                                                                elem: 'content',
                                                                                                                content: [
                                                                                                                    {
                                                                                                                        elem: 'header',
                                                                                                                        content: [
                                                                                                                            {
                                                                                                                                elem: 'info',
                                                                                                                                content: [
                                                                                                                                    {
                                                                                                                                        elem: 'date',
                                                                                                                                        content: '27.02.2017'
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        elem: 'name',
                                                                                                                                        content: 'Павло Зибров'
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            }, // comment__info
                                                                                                                            {
                                                                                                                                elem: 'button',
                                                                                                                                content: {
                                                                                                                                    block: 'button',
                                                                                                                                    text: 'ответить'
                                                                                                                                }
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    }, // comment__header
                                                                                                                    {
                                                                                                                        elem: 'description',
                                                                                                                        content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.'
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                }
                                                                                            }, // comments__list
                                                                                            {
                                                                                                elem: 'form',
                                                                                                content: {
                                                                                                    block: 'comments-form',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elm: 'title',
                                                                                                            content: ''
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'form',
                                                                                                            method: 'POST',
                                                                                                            action: '/',
                                                                                                            content: [
                                                                                                                {
                                                                                                                    block: 'input',
                                                                                                                    mix: {block: 'comment-form', elem: 'input'},
                                                                                                                    name: 'name',
                                                                                                                    placeholder: 'Имя'
                                                                                                                },
                                                                                                                {
                                                                                                                    block: 'input',
                                                                                                                    mix: {block: 'comment-form', elem: 'input'},
                                                                                                                    name: 'email',
                                                                                                                    placeholder: 'Email'
                                                                                                                },
                                                                                                                {
                                                                                                                    block: 'textarea',
                                                                                                                    mix: {block: 'comment-form', elem: 'textarea'},
                                                                                                                    name: 'description',
                                                                                                                    placeholder: 'Сообщение'
                                                                                                                },
                                                                                                                {
                                                                                                                    elem: 'file',
                                                                                                                    name: 'file',
                                                                                                                    content: 'Добавить фото к комментарию'
                                                                                                                },
                                                                                                                {
                                                                                                                    block: 'button',
                                                                                                                    mix: {block: 'comment-form', elem: 'button'},
                                                                                                                    content: 'Отправить'
                                                                                                                }

                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }, // comments__list
                                                            {
                                                                elem: 'form',
                                                                content: {
                                                                    block: 'comments-form',
                                                                    content: [
                                                                        {
                                                                            elm: 'title',
                                                                            content: 'Оставить комментарий'
                                                                        },
                                                                        {
                                                                            elem: 'form',
                                                                            method: 'POST',
                                                                            action: '/',
                                                                            content: [
                                                                                {
                                                                                    block: 'input',
                                                                                    mix: {block: 'comment-form', elem: 'input'},
                                                                                    name: 'name',
                                                                                    placeholder: 'Имя'
                                                                                },
                                                                                {
                                                                                    block: 'input',
                                                                                    mix: {block: 'comment-form', elem: 'input'},
                                                                                    name: 'email',
                                                                                    placeholder: 'Email'
                                                                                },
                                                                                {
                                                                                    block: 'textarea',
                                                                                    mix: {block: 'comment-form', elem: 'textarea'},
                                                                                    name: 'description',
                                                                                    placeholder: 'Сообщение'
                                                                                },
                                                                                {
                                                                                    elem: 'file',
                                                                                    name: 'file',
                                                                                    content: 'Добавить фото к комментарию'
                                                                                },
                                                                                {
                                                                                    block: 'button',
                                                                                    mix: {block: 'comment-form', elem: 'button'},
                                                                                    content: 'Отправить'
                                                                                }

                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }, // post
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
