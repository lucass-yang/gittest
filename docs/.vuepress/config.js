
const markdownConf = require('./Config/markdownConfig');
const pluginConf = require('./Config/pluginsConfig');
const navConf = require('./Config/navConfig');

module.exports = {
	title: "My Blog",
	head : [],
	base : "/gittest/",
	theme: 'reco',
	themeConfig: {
		nav: navConf,
		sidebar: 'auto',
		editlinks: true,
		smoothScroll: true,
		search: true,
		nextLinks: true,
		prevLinks: true
	},
    markdown: markdownConf,
	plugings: pluginConf,
};