# Linux常用命令汇总
参考链接： [linux cmds](https://linux.jevin.org/)

## module
```shell
$ module help

list         |  add|load            modulefile [modulefile ...]
[force_]purge|  rm|unload           modulefile [modulefile ...]
             |  reload             [modulefile [modulefile ...]]
             |  switch|swap        [oldmodulefile] newmodulefile
             |  display|show        modulefile [modulefile ...]
             |  avail              [modulefile [modulefile ...]]
             |  whatis             [modulefile [modulefile ...]]
             |  help               [modulefile [modulefile ...]]
             |  path                modulefile
             |  paths               modulefile
             |  use                 dir [dir ...]
             |  unuse               dir [dir ...]
             |  source              scriptfile
             |  apropos|keyword     string
             |
initlist     |  initadd             modulefile
initclear    |  initprepend         modulefile
             |  initrm              modulefile
```

### 加载、卸载
```bash
module add [modulefile]
module rm [modulefile]
```
