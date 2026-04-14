---
title: Hexo Tutorial
tags:
  - Hexo
categories:
  - Tool
abbrlink: 1b7a7665
date: 2020-10-20 10:00:00
---

# Official documentation

[Documentation for Hexo](https://hexo.io/docs/) 

[Hexo NexT theme](https://theme-next.js.org/) 

[Github hexo-theme-next](https://github.com/next-theme/hexo-theme-next)  

# 环境配置

1. 安装 `Git`
2. 安装 `Node.js`
3. 安装 `Hexo`

<!-- more -->

# 使用方法

打开 `cmd`

`hexo n "我的博客"` == hexo new "我的博客" #新建文章

`hexo g` == hexo generate #生成

`hexo s` == hexo server #启动服务预览

`hexo d` == hexo deploy #部署

以上命令可以同时使用，如`hexo g && hexo d`代表生成网站后立即部署。

## 博客置顶

在YAML Front Matter中添加一行：`top: true` 

## 删除

There is no command to delete a post on Hexo, but follow this steps :

1. Delete the post under ``source/_post folder``
2. Run ``hexo clean`` to delete the database (db.json) and assets folder
3. Run ``hexo generate`` to generate the new blog without your deleted post
4. Run ``hexo deploy`` to deploy your blog

## 注意

使用 `hexo d` 部署到 `Github` 之前，因为国内网络问题，最好先通过如下代码设置代理：

```python
set http_proxy=socks5://127.0.0.1:10808
set https_proxy=socks5://127.0.0.1:10808
```

## 插件

- 字数 & 阅读时间统计：[hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time) 

- 博客置顶：[hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top) 

- 鼠标点击烟花效果：[hexo-next-fireworks](https://github.com/next-theme/hexo-next-fireworks) 
  - 若要删除该插件，在资源管理器中直接删除即可，文件路径为`/node_modules/hexo-next-fireworks`。
  
- 为博客内容增加脚注、上标、下标功能：[hexo-renderer-markdown-it](https://github.com/hexojs/hexo-renderer-markdown-it) 或 [hexo-reference](https://github.com/kchen0x/hexo-reference) 

- 文章加密：[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt) 

  1. 安装：`npm install --save hexo-blog-encrypt`

  2. 加密方法一：单个post加密，信息头设置`password`

     ```yaml
     ---
     title: Hello World
     date: 2021-06-10 00:00:01
     password: hello_world
     ---
     ```

  3. 加密方法二：设置`_config.yml`，添加以下内容

     ```yaml
     # Security
     encrypt: # hexo-blog-encrypt
       abstract: 有东西被加密了, 请输入密码查看.
       message: Type Password To Decrypt This Article
       tags:
       - {name: Password, password: 猜猜看？}
       #- {name: tagName, password: 密码B}
       wrong_pass_message: Wrong Password | 抱歉, 这个密码看着不太对, 请再试试.
       wrong_hash_message: Error | 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
       silent: true
       theme: default
     ```
## 升级

### 升级Hexo
```python
# 查看 Hexo 版本信息
hexo v
# 全局升级 Hexo-cli
npm install hexo-cli -g
# 查看系统插件，检查插件是否需要升级
npm install -g npm-check
npm-check
# 升级系统插件
npm install -g npm-upgrade
npm-upgrade
# 更新
npm update -g
npm update --save
# 再次查看 Hexo 版本信息
hexo v
```

### 升级NexT主题

1. Go to [Github Page](https://github.com/next-theme/hexo-theme-next) of `hexo-theme-next` 
2. Go to *Release*, download the *Latest release version* 
3. copy & replace contents in the folder `themes/next`
   1. ***[CAUTION]*** Before replace, backup file `_config.yml` where some customized settings are saved.
4. re-configure file `_config.yml` 
5. enjoy...

## 添加广告

### Google AdSense

1. 进入 [Google AdSense](https://www.google.com/adsense/start/) 网站，设置账号；
2. 按照要求，将 Google AdSense 代码添加到文件 `\themes\next\layout\_layout.njk` 中[^2]，位置在 `<head>...</head>` 之间，以便 Google 可以检测到；
3. 配置 `ads.txt` [^1]；
   1. 从 Google AdSense 下载得到 `ads.txt` 文件，保存至 `\source` 文件夹下即可；

## 站点分析

- [Google Analytics](https://analytics.google.com/analytics/web/) 
- [Cloudflare Web Analytics](https://www.cloudflare.com/zh-cn/web-analytics/) 

## Deploy to Github

最近（ update on June 30, 2021）Github 要求不能再使用用户名和密码配置 Git 进行 deploy，只能使用 `Token`，教程如下。

1. 获得 `Token`

[Github Token](https://github.com/settings/tokens) -> Generate New Token

获得 `Token` 后需要保存好，因为你只有一次机会见到它。

2. 配置 `Token`

在 Hexo 博客根目录下，打开配置文件 `_config.yml`，找到 `Deployment` 部分，做以下修改。

```yaml
deploy:
  type: git
  repo:
    github:
      url: https://github.com/<myusername>/<myrepo>.git
      branch: main
      token: GITHUB_TOKEN
```



[^1]: [Hexo 博客添加 Google Adsense ads.txt](https://alanlee.fun/2020/04/10/hexo-add-ads/) 

[^2]: NexT version 8.4.0

