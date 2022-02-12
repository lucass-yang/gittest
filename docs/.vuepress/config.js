module.exports = {
	title: "My Blog",
	head : [],
	base : "/gittest/",
	theme: 'reco',
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
		search: true,
		nextLinks: true,
		prevLinks: true
	},
    markdown: {
        lineNumbers: true,
        toc: {includeLevel: [1, 2]}
    },
	plugings: [
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
	],
};