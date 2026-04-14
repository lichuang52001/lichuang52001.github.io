---
title: Win10 OS Tutorials
tags: OS
categories: Tool
abbrlink: 3e6fcc87
date: 2021-05-27 09:41:17
---

# Word

当在Word中插入页眉的时候，经常会在页眉下方出现一条横线，可以选中页眉区，进入编辑模式，Ctrl+Shift+N快捷键，清除页眉原有格式，然后重新编辑页眉格式即可。

## 插入特殊符号

- **信封符号**

在写文章标记通讯作者时，有时候需要插入信封标志，插入方法如下：

1. 打开word界面，根据下图，选择插入—符号。

2. 出现“符号”的活动框。

3. 在字体一栏，下拉菜单，选择“**wingdings**”。

4. 看到信封标志，插入即可。 此时在word界面上就有了一个小小的信封图案。

## Word 插入图像不压缩

1. 文件 $\rightarrow$ 选项 $\rightarrow$ 高级
2. 找到“图像质量和大小”，设置“默认分辨率”为“**高保真**”
3. 确定即可，如下图

![](https://raw.githubusercontent.com/lichuang52001/oss/master/uPic/2022-02-09%20word%20insert%20images.png)

## word转换成pdf后图片压缩失真的解决方法

![](https://raw.githubusercontent.com/lichuang52001/oss/master/uPic/2022-02-09%20word%20export%20images.jpg)


# PowerPoint

## 导出高分辨率图片

> 参考资料：[如何从 PowerPoint 导出高分辨率（高 dpi）幻灯片](https://docs.microsoft.com/zh-cn/office/troubleshoot/powerpoint/change-export-slide-resolution) 

你可以通过将幻灯片保存为图片格式来更改 Microsoft PowerPoint 的导出分辨率。 此过程有两个步骤：使用系统注册表更改导出的幻灯片的默认分辨率设置，然后以新的分辨率将幻灯片保存为图片。

### 更改导出分辨率设置

默认情况下，要另存为图片的 PowerPoint 幻灯片的导出分辨率为每英寸 96 点 (dpi)。 若要更改导出分辨率，请执行以下步骤：

<!--more-->

1. 退出所有 Windows 程序。

2. 右键单击“开始”，然后选择“运行”。或者 `win+R`。

3. 在“打开”框中，键入“regedit”，然后选择“确定”。

4. 根据你使用的 PowerPoint 版本，找到以下注册表子项之一：
   
   PowerPoint 2016、2019、PowerPoint for Office 365
   
   **HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\PowerPoint\Options**
   
   PowerPoint 2013
   
   **HKEY_CURRENT_USER\Software\Microsoft\Office\15.0\PowerPoint\Options**
   
   PowerPoint 2010
   
   **HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\PowerPoint\Options**
   
   PowerPoint 2007
   
   **HKEY_CURRENT_USER\Software\Microsoft\Office\12.0\PowerPoint\Options**
   
   PowerPoint 2003
   
   **HKEY_CURRENT_USER\Software\Microsoft\Office\11.0\PowerPoint\Options**

5. 单击“选项”子项，指向“编辑”菜单上的“新建”，然后选择“DWORD (32 位)值”。

6. 输入“ExportBitmapResolution”，然后按 Enter 键。

7. 确保选中“ExportBitmapResolution”，然后选择“编辑”菜单上的“修改”。

8. 在“编辑 DWORD 值”对话框中选择“十进制”。

9. 在“数值数据”框中，输入分辨率“300”。 或使用下表中的参数。

10. 选择“确定”。

11. 在“文件”菜单上，选择“退出”，退出注册表编辑器。

### 将幻灯片导出为图片

1. 在 PowerPoint 中，打开幻灯片演示文稿，然后打开要导出的幻灯片。
2. 在“文件”菜单上，选择“另存为”。
3. 选择保存类型，保存即可。

### 检查图片分辨率

右键目标图片，选择属性，查看分辨率即可。

# Excel

## 创建下拉列表

> 参考资料：[Microsoft | 创建下拉列表](https://support.microsoft.com/zh-cn/office/%E5%88%9B%E5%BB%BA%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8-7693307a-59ef-400a-b769-c5402dce407b#ID0EAADAAA=Windows) 

> 可在单元格使用下拉列表，帮助用户更高效地使用工作表工作。 下拉列表允许用户从你创建的列表中选取项目。

1. 在新工作表中，键入要显示在下拉列表中的条目（需要转化为表格形式）。

<img src='https://z3.ax1x.com/2021/06/04/2GeF9s.jpg'>

2. 在工作表中选择想要显示下拉列表的单元格。
3. 转到功能区上的“数据”选项卡，然后转到“数据验证”。
4. 在“设置”选项卡的“允许”框上，单击“列表”。
5. 单击“源”框，然后选择列表区域。 忽略了标题行，因为我们不希望该行成为选择选项。

<img src='https://z3.ax1x.com/2021/06/04/2GeB8A.png'>

6. 单击“输入信息”，“出错警告”选项卡，分别设置。

<img src='https://z3.ax1x.com/2021/06/04/2GeLaF.png'>

# 字体

- [Consolas-with-Yahei](https://github.com/crvdgc/Consolas-with-Yahei) 

# 校验值

1. 使用 `command line` 寻找校验值的方法如下

```
certutil -hashfile filepath SHA512
```

其中，`filepath` 设置为需要校验文件的路径，如 `D:\Desktop\note.txt`. 

# PDF 处理

## PDF 去白边

> 使用 Adobe Illustrator 做矢量图时，一般需要将图像导出为 PDF 格式（插入到 LaTeX 文档中）或者 SVG 格式（插入到 Word 或 PPT 中）。当图像的面积不足以填满页面时，需要对 PDF 文件进行 “去白边” 操作，具体如下。

1. 用 **Adobe Acrobat Reader** 打开 PDF 文件
2. `工具` $\rightarrow$ `编辑PDF` $\rightarrow$ `裁剪页面`
3. 鼠标左键选中需要裁剪得到的区域，后回车，得到下图
4. 依次左键：`设置为零` $\rightarrow$ `删除白边距`
5. 完成去白边，保存文件即可

<img src='https://github.com/lichuang52001/oss/blob/master/uPic/2021-06-03-pdf.png?raw=true' width='60%'>

# .bat file

一些情况下，执行完`.bat`文件之后窗口直接退出，无法在窗口中看到运行结果，带来了许多不便。这里给出两种方法可以解决上述问题：

1. 在`.bat`文件最后加上一行`pause`，示例如下：
   
   ```
   ipconfig /all
   pause
   ```

2. 在`.bat`文件最后加上一行`@cmd`，示例如下：
   
   ```
   ipconfig /all
   @cmd
   ```

两种方法的区别是：第一种方法后续无法在窗口中继续输入命令，仅供查看窗口内容；第二种方法可以继续在窗口中输入命令。

# 定时关机

1. `Win+R`

2. `shutdown -s -t time`
   
   参数`time`用时间来替代，如`shutdown -s -t 60`代表从现在时刻起60秒后关机。

3. `at HH:MM shutdown -s` 
   
   `HH:MM`代表时间，如`at 10:00 shutdown -s`代表将在10:00自动关机。

4. `shutdown -a`
   
   取消定时关机。

# 删除大量文件

Windows服务器或普通操作系统中经常会遇到很多生成的临时文件需要删除，如果需要删除的文件夹中数目很多，且文件很巨大时，如果通过鼠标选择文件夹再直接删除会响应得非常慢，特别是文件数量也巨大时，Windows系统在删除之前还会先计算文件大小，那个龟速让你无语到飞起。用下面两个DOS命令则可以比较快速删除大量文件夹和文件。

命令分别如下：

`rmdir [drive:]path [/S] [/Q]`  或

`del [drive:]path [/S] [/Q]`

其中`rmdir` 与`rd`命令相同。

`/S` 表示除目录本身外，还将删除指定目录下的所有子目录和文件。

`/Q` 表示安静模式，删除时不需要经过确认。

如删除 `D:\temp\` 目录下的所有文件的写法如下：

`rmdir d:\temp\ /S /Q`  或

`del d:\temp\ /S /Q`

推荐使用 `rmdir` 命令，批量删除大量文件时比 `del` 更高效快速。

# 导出文件夹目录树

1. 开始->运行->输入`cmd` 回车

2. 访问目标目录

3. 输入 `tree /f >tree.txt`

经过以上操作，在目标目录下就生成了“tree.txt”。

# 创建文件夹

1. 进入 cmd
2. cd 至目标文件夹
3. md + 'foldername' 创建文件夹，多个 'foldername' 用空格隔开可以一次性创建多个 folders


