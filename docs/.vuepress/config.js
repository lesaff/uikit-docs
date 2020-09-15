module.exports = {
    title: 'UIkit 3.x Documentation (as of v3.5.7)',
    description: 'Searchable UIkit documentation',
    head: [
        ['link', {
            rel: 'icon',
            href: '/images/favicon.png'
        }],
    ],
    themeConfig: {
        logo: '/images/uikit-logo-black.svg',
        // sidebar: 'auto',
        codeLanguages: {
            php: 'PHP',
            css: 'CSS',
            html: 'HTML',
            javascript: 'Javascript'
            // any other code language labels you want to include in code toggles...
        },
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Official UIkit Docs',
                link: 'https://getuikit.com/docs/introduction'
            }, {
                text: 'Github',
                link: 'https://github.com/lesaff/uikit-docs'
            }
        ],
        sidebar: [
            {
                title: 'Getting Started',
                children: [
                    'introduction',
                    'installation',
                    'less',
                    'sass',
                    'javascript',
                    'webpack',
                    'custom-icons',
                    'avoiding-conflicts',
                    'rtl',
                    'migration',
                ]
            },
            {
                title: 'Components',
                children: [
                    'accordion',
                    'alert',
                    'align',
                    'animation',
                    'article',
                    'background',
                    'badge',
                    'base',
                    'breadcrumb',
                    'button',
                    'card',
                    'close',
                    'column',
                    'comment',
                    'container',
                    'countdown',
                    'cover',
                    'description-list',
                    'divider',
                    'dotnav',
                    'drop',
                    'dropdown',
                    'filter',
                    'flex',
                    'form',
                    'grid',
                    'heading',
                    'height',
                    'icon',
                    'iconnav',
                    'image',
                    'inverse',
                    'label',
                    'leader',
                    'lightbox',
                    'link',
                    'list',
                    'margin',
                    'marker',
                    'modal',
                    'nav',
                    'navbar',
                    'notification',
                    'offcanvas',
                    'overlay',
                    'padding',
                    'pagination',
                    'parallax',
                    'placeholder',
                    'position',
                    'print',
                    'progress',
                    'scroll',
                    'scrollspy',
                    'search',
                    'section',
                    'slidenav',
                    'slider',
                    'slideshow',
                    'sortable',
                    'spinner',
                    'sticky',
                    'subnav',
                    'svg',
                    'switcher',
                    'tab',
                    'table',
                    'text',
                    'thumbnav',
                    'tile',
                    'toggle',
                    'tooltip',
                    'totop',
                    'transition',
                    'upload',
                    'utility',
                    'video',
                    'visibility',
                    'width',
                ]
            },
        ]
    },
    markdown: {
        anchor: {
            level: [2, 3]
        },
        config(md) {
            let markup = require('vuepress-theme-craftdocs/markup')
            md.use(markup)
        }
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-156607732-1' // UA-00000000-0
            }
        ]
    ]
}