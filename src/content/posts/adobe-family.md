---
title: Adobe Software
tags:
  - Skill
categories:
  - Tool
abbrlink: cf829b6f
date: 2022-01-30 11:23:41
---

# Adobe Illustrator

## 编辑数学公式和希腊字母

### 方法一：导入 svg 格式的公式图片

生成数学公式或希腊字母的图片格式（最好是 `png` 格式）→将图片导入到软件中→使用图像描摹功能（对象→图像描摹→建立并扩展）将图片矢量化→取消矢量图像编组，删除白色背景→重新编组，移动到合适位置。

直接导入svg格式会出现字母异常，因此导入png然后矢量化处理是更好的方式，可以使用[LaTeX公式编辑器](https://latexlive.com/)在线生成png格式的公式或希腊字母。

参考：[How do I get mathematical fonts to Illustrator?](https://tex.stackexchange.com/questions/90017/how-do-i-get-mathematical-fonts-to-illustrator)


Steps in detail (*When I was writing my dissertation on string theory I encountered the same issue. I managed to develop a pipeline which seems to work quite well*):

1. Draw your graphs/images in Illustrator.
2. Use [http://latex2png.com/](http://latex2png.com/). Type your latex equation in there, then preview at 2000 dpi.
3. Save the image, then load into Illustrator. Alternatively, you can speed things up by using a screencapture software (e.g. ShareX) so you can skip the image saving+loading process.
4. When in Illustrator, select your imported equation image and choose Object --> Image Trace --> Make and Expand. It is very important to obtain a high dpi image for this step to work favorably.
5. Your equation should now be a vector graphic.
6. Select your new vector graphic equation and choose Object --> Ungroup. This will separate the white spaces in your equation from the black content that you need.
7. Select the white spaces and delete them.
8. You now have a fully editable equation looking exactly like it does in Latex. You can scale/adjust and colour to your requirements.

### 方法二：从 PowerPoint 中直接拷贝

在 PowerPoint 中键入公式，选中，直接拷贝到 Adobe Illustrator 中。

## 布尔运算

打开软件，新建文件，选择“**窗口**”在“**路径查找器**”前打勾，这是做布尔运算的工具，之后选择两个需要做布尔运算的图形，在路径查找器中选择合适的操作即可。
 



## 学习资料
1. [Adobe Illustrator Learn & Support](https://helpx.adobe.com/support/illustrator.html)
2. [AI教程，新手入门系列，bilibili](https://www.bilibili.com/video/BV1px411s7za/)
3. Adobe公司, 牛国庆. Adobe Illustrator CC经典教程[M]. 人民邮电出版社, 2014.





# PhotoShop

## 修改特定图片的分辨率和DPI

1. 将图片拖入Photoshop；
2. “图像” $\rightarrow$ “图像大小” $\rightarrow$ 调整宽度、高度与分辨率为目标值；
3. “文件” $\rightarrow$ “存储”，保存为指定格式和大小，即可；

*备注：Adobe Illustrator与 Photoshop 的主要区别在于，Illustrator 基于矢量作图，而 Photoshop 基于像素点作图，因此在科研中 Illustrator 更常用。*


