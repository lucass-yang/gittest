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
	},
    markdown: {
        lineNumbers: true,
        toc: {includeLevel: [1, 2]}
    },
    plugins: ['@vuepress/blog', ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }]]
};