# VuePress搭建网页
---
[[TOC]]
---
使用VuePress可以非常快速地搭建一个个人的网页博客，并且对于Markdown语法也能很好的支持，方便我们聚焦到内容写作上。

关于VuePress，可以阅读[官方文档](https://www.vuepress.cn/)

附上[Markdown官方教程](https://markdown.com.cn/)
---
## 安装node.js

下载地址：[link](https://nodejs.org/en/download/) https://nodejs.org/en/download/

需要保证node.js的版本 >= 8.6

查看`node.js`和`npm`的版本号：
```bash
node -v
npm -v
```
---
## 配置

### 1、创建一个新的项目
```bash
mkdir vuepress
cd vuepress
```
### 2、使用包管理器进行初始化
```bash
npm init -y
```

### 3、安装VuePress
```bash
npm install -D vuepress
```
:::warning
不再推荐全局安装`VuePress`
:::

### 4、创建基本项目结构
需要我们手动创建一下几个目录和文件
```bash
|-- docs
|   |-- .vuepress
|   |   `-- config.js
|   `-- README.md
|-- package-lock.json
`-- package.json
```

### 5、添加启动命令
在生成的`package.json`文件中，添加启动命令：
```json
"scripts: {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```


### 6、配置config.js
```json
module.exports = {
	title: "Blog",
	head : [],
	themeConfig: {
		nav: [
			{text: "home", link:'/'},
			{text: "github", link: 'https://github.com'},
			{text: "blog", link: 'https://deeryang.github.io'}
		],
	sidebar: 'auto',
	}
};
```

### 7、修改README.md
```markdown
---
home: true
heroImage: /home.png
actionText: Get Started →
actionLink: /node/
features:
- title: day day up
  details: 记录每一天的进步, 一分耕耘，一分收获.
- title: 程序员成长指北
  details: 专注技术栈分享
- title: koala
  details: 一个有趣的且乐于分享的人。座右铭：今天未完成的，明天更不会完成。
footer: MIT Licensed | Copyright © 2018-present Evan You

---
```

### 8、在本地启动服务器
```bash
npm run dev
```
`VuePress`会在`http://localhost:8080`启动一个热重载的开发服务器

## VuePress推荐的目录结构
```bash
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

## 部署
