# VuePress搭建网页

使用`VuePress`可以非常快速地搭建一个个人的网页博客，并且对于`Markdown`语法也能很好的支持，方便我们聚焦到内容写作上。  
关于`VuePress`，可以阅读[官方文档](https://www.vuepress.cn/)  
所有的文章都是通过`Markdown`语法写的，可以查阅[Markdown官方教程](https://markdown.com.cn/)

## 安装node.js
下载地址：[link](https://nodejs.org/en/download/) https://nodejs.org/en/download/  
需要保证node.js的版本 >= 8.6  
查看`node.js`和`npm`的版本号：
```bash
node -v
npm -v
```

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
官方给出的`README.md`范例：
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

### 9、VuePress推荐的目录结构
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

下述的指南基于以下条件：
- 文档放置在项目的 docs 目录中；
- 使用的是默认的构建输出位置；
- VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:
```json
{
  "scripts": {
    "build": "vuepress build docs"
  }
}
```

### 设置

1. 在`docs/.vuepress/config.js`中设置正确的`base`
2. 在创建项目的根目录中添加如下`deploy.sh`文件(请自行判断去掉高亮行的注释):
```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

### 执行

每次有修改时，执行`deploy.sh`脚本就可以重新生成静态网站，并上传到`gh-pasges`分支，这样就可以通过网络访问最新上传的修改。
```bash
sh deploy.sh
```