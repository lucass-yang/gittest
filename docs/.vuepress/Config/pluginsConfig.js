module.exports = [
    ['@vuepress/back-to-top', true],
    ['@vuepress/search', {
        searchMaxSuggestions: 10
    }],
    [
        '@vuepress/active-header-links',
        {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
    ],
    [
        '@vuepress/blog',
        {
            frontmatters: [
                {
                    id: 'tag',
                    keys: ['tag'],
                    path: '/tag/',
                    layout: 'Tag',
                },
            ],
        },
    ],
]