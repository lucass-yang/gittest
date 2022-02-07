# Vim命令

### 多行替换
```bash
:%s/old/new/g       //全局替换，将整个页面的'old'替换成'new'
:12,15s/old/new/g   //局部替换，从第12行开始到第15行结束，将'old'替换成'new'
```