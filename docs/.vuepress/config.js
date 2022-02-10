module.exports = {
	title: "My Blog",
	head : [],
	base : "/gittest/",
	themeConfig: {
		nav: [
			{text: "Home", link:'/'},
            {text: "Navibar", link:'/NaviPage/Navigator.md'},
			{text: "Github", link: 'https://github.com/lucass-yang'},
			{text: "Blog", link: 'https://lucass-yang.github.io/gittest'}
		],
		sidebar: 'auto',
		editlinks: true,
		smoothScroll: true,
		search: false,
		nextLinks: true,
		prevLinks: true
	},
    markdown: {
        lineNumbers: true,
        toc: {includeLevel: [1, 2]}
    },
	plugings: [
		['@vuepress/back-to-top', true],
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
	],
};