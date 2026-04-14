---
title: Github Handbook
tags:
  - Skill
categories:
  - Tool
abbrlink: 4b73fed1
date: 2022-01-20 09:41:15
---

# Github Desktop

## 设置代理

1. 找到文件 `C:\users\username\.gitconfig` ；

2. 在文件最后加上如下代码（change 1080 to your own port #）

```
[http]
    proxy = socks5://127.0.0.1:1080
[https]
    proxy = socks5://127.0.0.1:1080
[git]
    proxy = socks5://127.0.0.1:1080
```

<!--more-->
