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
        require('../header/header.bemjson.js'),
        {
            block: 'content',
            content: [
                {
                    elem: 'container',
                    mix: {block: 'container'},
                    content: [
                        {
                            block: 'news-top',
                            mix: [
                                {block: 'clearfix'},
                                {block: 'content', elem: 'news-top'}
                            ],
                            content: {
                                elem: 'list',
                                content: [
                                    {rubric: 'Рынок', text: 'Революция на рынке наружной рекламы Киева'},
                                    {rubric: 'Новости', text: 'Скандал с Укрпочтой: издательство осталось без денег'},
                                    {rubric: 'Новости', text: 'Суд США зпретил UMH Использовать бренд Forbes'},
                                    {rubric: 'Люди', text: 'Андрей Хрусталев покинул журнал Корреспондент'}
                                ].map(function (elem, index) {
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
                                                        block: 'rubric-plate',
                                                        mods: {color: 'green'},
                                                        mix: {block: 'news', elem: 'rubric'},
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
                        }, // news-top
                        {
                            block: 'main',
                            content: [
                                {
                                    elem: 'center-column',
                                    content: [
                                        {
                                            block: 'title',
                                            mods: {
                                                color: 'blue'
                                            },
                                            mix: {block: 'main', elem: 'title'},
                                            content: {
                                                block: 'h',
                                                mods: {
                                                    type: '2'
                                                },
                                                content: 'Популярные новости'
                                            }
                                        }, // title
                                        {
                                            block: 'popular-news',
                                            mix: {block: 'main', elem: 'popular-news'},
                                            content: [
                                                {
                                                    elem: 'main',
                                                    content: [
                                                        {
                                                            name: 'В УКРАЇНІ ЗАПРАЦЮВАЛО РАДІО ДЛЯ АГРАРІЇВ',
                                                            rubric: 'Новости',
                                                            date: '22.03.2017',
                                                            comments: '100',
                                                            text: 'В інтернеті почало мовлення радіо для аграріїв «АгроФМ» медіа-проекту «Фармерс медіа Про це виданню «Інтерфакс-Україна» повідомив шеф-редактор радіостанції Олександр Журавель. (...)'
                                                        }
                                                    ].map(function (item, index) {
                                                        var id = index + 1;
                                                        return {
                                                            block: 'link',
                                                            mix: {block: 'news', elem: 'link'},
                                                            url: item.url,
                                                            title: item.name,
                                                            content: {
                                                                block: 'news',
                                                                mods: {
                                                                    type: 'popular'
                                                                },
                                                                content: [
                                                                    {
                                                                        elem: 'image',
                                                                        content: [
                                                                            {
                                                                                block: 'image',
                                                                                mix: [
                                                                                    {block: 'img-responsive'}
                                                                                ],
                                                                                url: '../../common.blocks/news/_type/news_type_popular-' + id + '.jpg',
                                                                                alt: item.name,
                                                                                title: item.name
                                                                            }, // image
                                                                            {
                                                                                block: 'rubric-plate',
                                                                                mods: {color: 'green'},
                                                                                content: item.rubric
                                                                            }
                                                                        ]
                                                                    },  // news__image
                                                                    {
                                                                        block: 'news-description',
                                                                        mix: [
                                                                            {block: 'news', elem: 'description'}
                                                                        ],
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
                                                                    } // news-description
                                                                ]
                                                            }
                                                        };
                                                    })
                                                }, // popular-news__main
                                                {
                                                    elem: 'sub',
                                                    content: {
                                                        elem: 'list',
                                                        content: [
                                                            {
                                                                name: 'НА РЫНОК ОНЛАЙН-СМИ ВЫХОДИТ РЕАЛИСТ',
                                                                date: '22.03.2017',
                                                                comments: '100'
                                                            },
                                                            {
                                                                name: 'ГАЗЕТУ ДЕЛОВАЯ СТОЛИЦА ОЖИДАЮТ ИЗМЕНЕНИЯ',
                                                                date: '22.03.2017',
                                                                comments: '100'
                                                            },
                                                            {
                                                                name: 'НОВОЕ ВРЕМЯ ЗАПУСКАЕТ НОВУЮ ЭЛЕКТРОННУЮ ...',
                                                                date: '22.03.2017',
                                                                comments: '100'
                                                            },
                                                            {
                                                                name: 'НОВОЕ ВРЕМЯ ЗАПУСКАЕТ НОВУЮ ЭЛЕКТРОННУЮ ...',
                                                                date: '22.03.2017',
                                                                comments: '100'
                                                            },
                                                            {
                                                                name: 'ИНТЕРНЕТ- ИЗДАНИЕ ИНСАЙДЕР ПРЕКРАЩАЕТ...',
                                                                date: '22.03.2017',
                                                                comments: '100'
                                                            },
                                                            {
                                                                name: 'КАБМІН ВИЗНАЧИВ ЗМІ, ЧЕРЕЗ ЯКІ ВИКЛИКАТИМУТЬ ДО СУДУ',
                                                                date: '22.03.2017',
                                                                comments: '100'
                                                            }
                                                        ].map(function (item, index) {
                                                            var id = index + 2;
                                                            return {
                                                                elem: 'item',
                                                                content: [
                                                                    {
                                                                        block: 'link',
                                                                        mix: {block: 'news', elem: 'link'},
                                                                        url: item.url,
                                                                        title: item.name,
                                                                        content: {
                                                                            block: 'news',
                                                                            mods: {
                                                                                type: 'popular',
                                                                                small: true
                                                                            },
                                                                            content: [
                                                                                {
                                                                                    elem: 'image',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'image',
                                                                                            mix: [
                                                                                                {block: 'img-responsive'}
                                                                                            ],
                                                                                            url: '../../common.blocks/news/_type/news_type_popular-' + id + '.jpg',
                                                                                            alt: item.name,
                                                                                            title: item.name
                                                                                        }
                                                                                    ]
                                                                                },  // news__image
                                                                                {
                                                                                    block: 'news-description',
                                                                                    mods: {
                                                                                        size: 'small'
                                                                                    },
                                                                                    mix: {
                                                                                        block: 'news',
                                                                                        elem: 'description'
                                                                                    },
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
                                                                                        }
                                                                                    ]
                                                                                } // news-description
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        })
                                                    } // popular-news__list
                                                }
                                            ]
                                        }, // popular-news
                                        {
                                            block: 'title',
                                            mods: {
                                                color: 'green'
                                            },
                                            mix: {block: 'main', elem: 'title'},
                                            content: {
                                                block: 'h',
                                                mods: {
                                                    type: '2'
                                                },
                                                content: 'Последние новости'
                                            }
                                        }, // title
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
                                            }, // news-list
                                        },
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
                        // {
                        //     block: 'elements',
                        //     content: [
                        //         {
                        //             block: 'fa',
                        //             mods: {
                        //                 icon: 'adjust'
                        //             }
                        //         },
                        //         {
                        //             block: 'button',
                        //             mods: {
                        //                 size: 'md',
                        //                 theme: 'media',
                        //                 color: 'orange'
                        //             },
                        //             text: 'test'
                        //         },
                        //         {
                        //             block: 'button',
                        //             mods: {
                        //                 size: 'md',
                        //                 theme: 'media',
                        //                 color: 'blue'
                        //             },
                        //             text: 'test'
                        //         },
                        //         {
                        //             block: 'button',
                        //             mods: {
                        //                 size: 'md',
                        //                 theme: 'media'
                        //             },
                        //             text: 'test'
                        //         },
                        //         {
                        //             block: 'headers',
                        //             content: [
                        //                 {
                        //                     block: 'h',
                        //                     mods: {
                        //                         type: '1'
                        //                     },
                        //                     content: 'h1'
                        //                 },
                        //                 {
                        //                     block: 'h',
                        //                     mods: {
                        //                         type: '2'
                        //                     },
                        //                     content: 'h2'
                        //                 },
                        //                 {
                        //                     block: 'h',
                        //                     mods: {
                        //                         type: '3'
                        //                     },
                        //                     content: 'h3'
                        //                 },
                        //                 {
                        //                     block: 'h',
                        //                     mods: {
                        //                         type: '4'
                        //                     },
                        //                     content: 'h4'
                        //                 },
                        //                 {
                        //                     block: 'h',
                        //                     mods: {
                        //                         type: '5'
                        //                     },
                        //                     content: 'h5'
                        //                 },
                        //                 {
                        //                     block: 'text',
                        //                     content: 'Киевский городской совет утвердил новую концепцию развития наружной рекламы. За это решение проголосовали 85 депутатов, но его еще должен подписать мэр, отмечает MMR. Новые правила предусматривают разделение Киева на пять зон - начиная от нулевой в центре, где наружная реклама практически запрещена.'
                        //                 }
                        //             ]
                        //         }
                        //     ]
                        // }
                    ]
                }
            ]
        },
        require('../footer/footer.bemjson.js')
    ]
};
