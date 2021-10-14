const moment = require('moment');

module.exports = {
    base: '/',
    title: '英行前端项目文档',
    description: '英行前端项目文档',
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
                title: '背景',
                collapsable: false,
                children: [
                    'background/1-起源',
                    'background/2-常见对接注意点',
                    'background/3-项目迭代历史'
                ]
            },
            {
                title: 'H5-机票',
                collapsable: false,
                children: [
                    'h5Flight/1-简介',
                    'h5Flight/2-目录介绍',
                    'h5Flight/3-主要逻辑分析',
                    'h5Flight/4-其他',
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