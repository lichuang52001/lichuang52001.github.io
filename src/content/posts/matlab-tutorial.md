---
title: Matlab Tutorial
tags:
  - Skill
categories:
  - Tool
abbrlink: 3b670e92
date: 2021-09-05 11:08:03
---

# Matlab 介绍

MATLAB（Matrix Laboratory，矩阵实验室）是由美国The MathWorks公司出品的商业数学软件。MATLAB是一种用于算法开发、数据可视化、数据分析以及数值计算的高级技术计算语言和交互式环境。除矩阵运算、绘制函数/数据图像等常用功能外，MATLAB还可用来创建用户界面，以及调用其它语言（包括C、C++、Java、Python、FORTRAN）编写的程序。

MATLAB主要用于数值运算，但利用为数众多的附加工具箱，它也适合不同领域的应用，例如控制系统设计与分析、影像处理、深度学习、信号处理与通讯、金融建模和分析等。另外还有配套软件包Simulink提供可视化开发环境，常用于系统模拟、动态/嵌入式系统开发等方面。

在R2017b后的MATLAB版本更发布了深度学习的工具，使其能够可视化的快速创建AI模型，并透过各种转码器，部属于嵌入式硬件之中。

截至2020年，MATLAB在全球拥有超过400万用户。MATLAB用户来自工程，科学和经济学领域。[^1]

<!--more-->

# 常用 Code

## 图片批量格式转换

使用`imwrite`函数实现不同图片文件格式之间的批量转换。

`imwrite`函数支持的图片转换格式参见：https://ww2.mathworks.cn/help/matlab/ref/imwrite.html。

```matlab
% 本示例程序将 D:\Desktop\test\ 目录下面所有的 bmp 图片转换为 jpg 图片
clear
clc

% 读取指定目录下面所有的 pgm 格式图片
bmps = dir('D:\Desktop\test\*.bmp');
num_bmps = length( bmps );
for i = 1 : num_bmps
bmp_file = fullfile( 'D:\Desktop\test\' , bmp(i).name );
bmp      = imread( bmp_file );

%%% 核心代码：将 bmp_file 转换为 jpg 格式图片，并保存. %%%

% 第一步，解析文件名 bmp_file ,注意，bmp_file 包括路径+文件名+后缀，如 bmp_file = 'D:\Desktop\test\test.bmp'
% path = 'D:\Desktop\test\'  name = 'test' ext = '.bmp'
[ path , name , ext ] = fileparts( pgm_file ) ;

% 第二步，生成新的文件名
filename = strcat( name , '.jpg' );

% 第三步，生成文件全称
jpg_file = fullfile( 'D:\Desktop\test2jpg\' , filename ) ;

% 第四步，将 pgm 以 jpg_file 作为文件名，保存为 jpg 格式.
imwrite( bmp , jpg_file , 'jpg' );

end
```

# 常用函数

- disp

```matlab
name = 'Alice';   
age = 12;
X = [name,' will be ',num2str(age),' this year.'];
disp(X)
```

- 常微分方程求解

[Ordinary Differential Equations](https://www.mathworks.com/help/matlab/ordinary-differential-equations.html)

[ode45](https://ww2.mathworks.cn/help/matlab/ref/ode45.html): Runge-Kutta methods

[Summary of ODE Options](https://www.mathworks.com/help/matlab/math/summary-of-ode-options.html)

# 常用 Code

- 功能：显式函数表达式转换为数据点

如需要导出函数 $y=kx+bx^2, x\in [1,5]$.

```matlab
clear
clc

%% set parameters

num = 1000 ;  % 数据点数目

x_start = 1 ;
x_end = 5 ;

k = 1 ;
b = 2 ;

output_filename = 'y_data.csv' ;

%% main program
loc = linspace(x_start, x_end, num) ;

y = k.*loc+b.*loc.*loc ;

%% plot & export data
plot(loc,y)

csvwrite(output_filename, y) ;
```



# Cheat Sheet for MATLAB

- [Matlab Basic Functions Reference, 2021](https://ww2.mathworks.cn/content/dam/mathworks/fact-sheet/matlab-basic-functions-reference.pdf) 

- [Import and Exporting Data Using Matlab, 2019](https://ww2.mathworks.cn/content/dam/mathworks/fact-sheet/importing-exporting-data-cheat-sheet.pdf) 

- [Preprocessing Time Series Data with MATLAB, 2019](https://ww2.mathworks.cn/content/dam/mathworks/tag-team/Objects/p/preprocessing-time-series-data-tips-and-tricks.pdf) 



[^1]: https://zh.wikipedia.org/wiki/MATLAB
