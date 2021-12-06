const moment = require('moment');

module.exports = {
    base: '/yhdoc/',
    title: '英行前端项目文档',
    description: '英行前端项目文档',
    head: [
        ['link', { real: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {
                text: 'github',
                link: '/b'
            },
        ],
        sidebar: [
            {
                title: 'background',
                collapsable: true,
                children: [
                    'background/1-起源',
                    'background/2-常见对接注意点',
                    'background/3-项目迭代历史'
                ]
            },
            {
                title: 'H5-flight',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'h5Flight/1-简介',
                    'h5Flight/2-目录介绍',
                    'h5Flight/3-主要逻辑分析',
                    'h5Flight/4-其他',
                ]
            },
            {
                title: 'H5-hotel',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'h5Hotel/1-简介',
                    'h5Hotel/2-目录介绍',
                    'h5Hotel/3-主要逻辑分析',
                    'h5Hotel/4-其他',
                ]
            },
            {
                title: 'H5-train',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'h5Train/1-简介',
                    'h5Train/2-目录介绍',
                    'h5Train/3-主要逻辑分析',
                    'h5Train/4-其他',
                ]
            },
            {
                title: 'H5-common',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'h5Common/1-简介',
                    'h5Common/2-目录介绍',
                    'h5Common/3-主要逻辑分析',
                    'h5Common/4-其他',
                ]
            },
            {
                title: 'H5-blindBox',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'h5BlindBox/1-简介',
                    'h5BlindBox/2-目录介绍',
                    'h5BlindBox/3-主要逻辑分析',
                    'h5BlindBox/4-其他',
                ]
            },
            {
                title: 'App',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    'yhApp/1-简介',
                    'yhApp/2-目录介绍',
                    'yhApp/3-主要逻辑分析',
                    'yhApp/4-其他',
                ]
            }
        ],
        lastUpdated: '上次更新时间',
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
            }
            }
        ]
    ]
}