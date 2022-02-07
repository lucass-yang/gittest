---
title : Git操作
tags  : git
categories: git
---

## 初次运行Git前的配置
Git自带一个`git config`的工具来帮助设置Git外观和行为的配置变量。
所有的信息可以在`.git/config`文件中查看。
### 用户信息
当安装完Git后，第一件事就是设置用户名称和邮件地址。注意区分，这是本地的用户名和邮件地址，与远程代码托管的用户名和地址没有关系。
```bash
$ git config --global user.name "yang"
$ git config --global user.email 123456@example.com
```
在这里使用了`--global`选项，对于该操作系统的用户范围的所有仓库均有效，如果没有该选项，则只针对某一仓库有效。

### 文本编辑器
Git默认的文本编辑器是Vim。如果想使用不同的编辑器，例如Emacs，可以输入以下命令：
```bash
$ git config --global core.editor emacs
```
### 检查配置信息
如果想要检查配置，可以输入以下命令查看：
```bash
$ git config --list
```
也可以通过输入`git config <key>`来查看指定的某一项配置：
```bash
$ git config user.name
yang
```
### 获取帮助
有三种方法可以找到Git命令的使用手册：
```bash
$ git help <verb>
$ git <verb> --help
$ man git-<verb>
```

# Git基础
接下来介绍Git中使用的各种基本命令
## 获取Git仓库
有两种方法获取项目仓库，一种是在现有项目下导入所有文件到Git中，另一种是从服务器中克隆一个现有的Git仓库。
### 在现有目录中初始化仓库
对现有的目录进行管理，只需要进入该项目目录并输入：
```bash
$ git init
```
该命令将创建一个`.git`的子目录。

如果是在一个已经存在的文件夹（而不是空文件夹）中初始化Git仓库来进行版本控制的话，需要对文件进行跟踪并提交。用`git add`命令来实现对指定文件的跟踪，然后执行`git commit`命令提交：
```bash
$ git add *.cpp
$ git add LICENSE
$ git commit -m 'initial project version'
```
### 克隆现有的仓库
当想要从远端服务器上获取一个已经存在的项目时，需要使用`git clone [url]`命令来拷贝一份项目到本地。
```bash
$ git clone https://github.com/libgit2/libgit2
```
这会在当前目录下创建一个名为`gitlib2`的目录，并在这个目录下初始化一个`.git`文件夹。
如果想要在克隆远程仓库时，自定义本地仓库的名字，可以使用如下命令：
```bash
$ git clone https://github.com/libgit2/libgit2 mygitlib
```
这时，本地仓库的名字变为了`mygitlib`

## 记录每次更新到仓库

### 检查当前文件状态
要查看哪些文件处于什么状态，可以使用`git status`命令
```bash
$ git status
On branch master
nothing to commit, working directory clean
```
看到上述状态时说明现在的工作目录相等干净。
### 跟踪新文件
使用`git add`命令开始跟踪一个文件。比如，要跟踪README文件，运行：
```bash
$ git add README
```
此时再运行`git status`命令，会看到README文件已被跟踪。
### 暂存已修改的文件

### 状态简览
`git status`输出的信息十分详细，但显得有些繁琐。使用`git status -s`或者`git status --short`命令，将会得到一种更为紧凑的格式输出。运行`git status -s`，状态报告输出如下：
```bash
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
```
### 忽略文件
一般有些文件无需纳入Git的管理，也不希望它们出现在未跟踪的文件列表，这些文件通常都是自动生成的文件。在这种情况下，可以创建一个`.gitignore`文件，列出需要忽略的文件模式。
### 查看已暂存和为暂存的修改
比较工作目录和暂存区与快照之间的差异，使用`git diff`命令来查看。
如要查看已暂存的将要添加到下次提交的内容，可以用`git diff --cache`命令，更高版本使用`git diff --staged`命令。

### 提交更新
每次提交前，都使用`git status`来看一下，是不是都已经暂存起来了，然后再运行提交命令：
```bash
$ git commit
```
这种方式会启动文本编辑器以便输入本次提交的说明。
另外，也可以直接将提交信息与命令行放在同一行：
```bash
$ git commit -m "add something"
```

### 跳过使用暂存区域
虽然使用暂存区域的方式可以精心准备要提交的细节，但是这样做比较麻烦。只要在提交的时候，给`git commit`加上`-a`选项，Git就会自动把所有已跟踪的文件暂存起来一并提交，从而跳过`git add`步骤：
```bash
$ git commit -a -m 'add something new'
```

### 移除文件
要从Git中移除某个文件，就必须要从已跟踪文件清单中移除（确切的说，是从暂存区域中移除），然后提交。可以用`git rm`命令来完成。
当我们想把文件从Git仓库移除，但仍想文件保留在磁盘中时，使用`--cache`选项：
```bash
$ git rm --cache README
```

### 移动文件

### 查看提交历史
`git log`命令会列出按提交时间的更新，最近的更新在最上面。

### 撤销操作


## 远程仓库的使用
远程仓库是指托管在网络服务器中的项目的版本库。

### 查看远程仓库
如果想查看已经配置的远程仓库服务器，可以运行`git remote`命令。`origin`是Git对克隆仓库的默认名字。
也可以指定选项`-v`，会显示需要读写远程仓库使用的Git保存的简写与其对应的URL。
```bash 
$ git remote -v
origin https://github.com/schacon/ticgit (fetch)
origin https://github.com/schacon/ticgit (push)
```

### 添加远程仓库
运行`git remote add <shortname> <url>`添加一个新的远程库，同时指定一个可以轻松引用的简写：
```bash
$ git remote
origin
$ git remote add pb https://github.com/paulboone/ticgit
$ git remote -v
origin https://github.com/schacon/ticgit (fetch)
origin https://github.com/schacon/ticgit (push)
pb https://github.com/paulboone/ticgit (fetch)
pb https://github.com/paulboone/ticgit (push)
```
现在可以用字符串`pb`来代替整个URL。

### 从远程仓库中抓取与拉取
从远程仓库中获得数据，可以执行：
```bash
$ git fetch [remote-name]
```
 使用`git pull`命令来自动地抓取然后合并远程分支到当前分支。

### 推送到远程仓库
当想分享自己的项目时，必须将其推送到服务器上。当想要将*master*分支推送到`origin`服务器上时，可以运行以下命令：
```bash
$ git push origin master
```

### 查看远程仓库
想要查看一个远程仓库的更多信息，可以使用：
```bash
$ git remote show [remote-name]
```

### 查看远程仓库是否连接成功：
```bash
$ ssh -T git@github.com
```
如果出现下面提示，则说明链接成功：
```c
  Hi deeryang! You've successfully authenticated, but GitHub does not provide shell access.
```

### 修改`.gitignore`后生效
具体做法：
```bash
$ git rm -r --cached .		#清除缓存
$ git add .					#重新trace file
$ git commit -m "update .gitignore"		#提交和注释
$ git push origin master				#同步到远程仓库
```

### 与远程仓库同步基本步骤
```bash
$ git add .				#trace file
$ git commit -m "commit"	#add commit
$ git push origin master	#push 
```

### 常见问题
使用`git pull`提示`refusing to merge unrelated histories`时，解决方法：
```bash
$ git pull --allow-unrelated-histories
```
### 分支问题
查看分支： `git branch`
创建分支： `git branch <name>`
切换分支： `git checkout branch`
创建+切换分支： `git checkout -b <name>`
合并某分支到当前分支： `git merge <name>`
删除分支： `git branch -d <name>`

### 搭建网站
```bash
$ npm install hexo
$ hexo init
$ npm install
$ npm install hexo-deployer-git
```

1. 在一个空文件夹中运行`Git Bash`
```bash
$ hexo init
```