---
title: Python Tutorial
tags:
  - Python
  - Skill
categories:
  - Tool
abbrlink: 9dac317c
date: 2021-04-03 16:36:18
---



# function

```python
def function_name(input1, input2, ...):
    function content
    return output1, output2, ...

function_name()
```



# NumPy

## 统计学

- 计算方差、标准差

  ```python
  import numpy as np
  a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
  a_var = np.var(a)  # 计算方差
  a_std = np.std(a)  # 计算标准差
  ```

- 计算协方差、协方差矩阵

  ```python
  import numpy as np
  x = [1, 2, 3]
  y = [5, 20, 16]
  result_matrix = np.cov(x,y)
  result = np.cov(x,y)[0,1]
  ```

  

# 清空变量

在写 Matlab 代码时，一般都有一个习惯，即在代码最开始的地方清空所有变量，如下所示：

```matlab
clear ;
close all ;
clc ;
```

<!--more-->

那么，在 Python 中应该如何执行类似上述的操作呢？应在代码最开始的地方添加如下内容：[^1]

```python
%reset -f    # 相当于 Matlab 中的 clear, -f 代表 force，即强制执行

import matplotlib.pyplot as plt
plt.close("all")    # 相当于 Matlab 中的 close all, 即关闭所有图片

%clear    # 相当于 Matlab 中的 clc, 即清空命令窗口
```



# Pandas

```python
# 默认 DataFrame：df
import pandas as pd  # 默认已经导入 pandas
```

- DataFrame 重命名 Column

  ```python
  df.columns = ['name1','name2',...]
  ```

- 合并 DataFrmae

  ```python
  df = pd.concat([df1,df2,...],axis=1)  # axis=1代表按照列合并
  ```

- DataFrame 重置索引

  ```python
  df.reset_index(drop=True, inplace=True)
  ```

- 移动 DataFrame 某一列

  ```python
  df['column'].shift(1)
  ```

- DataFrame.pct_change

  Percentage change between the current and a prior element.

  ```python
  df = pd.Series([90, 91, 85])
  s.pct_change(periods=2)
  ```

- DataFrame.loc

  Access a group of rows and columns by label(s) or a boolean array.

  





# Data Visualization

- [matplotlib](https://matplotlib.org/) 

```python
plt.plot(x, y, label='label')
plt.legend()
plt.show()
```

- [seaborn](https://seaborn.pydata.org/)

Seaborn 建于 matplotlib 库的之上。它有许多内置函数，使用这些函数，只需简单的代码行就可以创建漂亮的绘图。它提供了多种高级的可视化绘图和简单的语法，如方框图、小提琴图、距离图、关节图、成对图、热图等。

- [Plotly](https://dash.plotly.com/) 

Plotly 是一个高级 Python 分析库，有助于构建交互式仪表板。使用 Plotly 构建的图形是交互式图形，这意味着你可以轻松找到图形的任何特定点或会话的值。Plotly 生成仪表板并将其部署在服务器上变得非常容易。它支持 Python、R 和 Julia 编程语言。

- [Geoplotlib](https://github.com/andrea-cuttone/geoplotlib/wiki/User-Guide)

Geoplotlib 是一个用于可视化地理数据和制作地图的 Python 工具箱。你可以使用此库创建各种地图。您可以使用它创建的一些地图示例包括热图、点密度图、地理地图等等。

- [Gleam](https://github.com/dgrtwo/gleam)

Gleam 的灵感来自 R 的Shiny包。它允许你仅使用 Python 代码将图形转换为出色的 Web 应用程序。这对不了解 HTML 和 CSS 的人很有帮助。它不是真正的可视化库，而是与任何可视化库一起使用。

- [ggplot](https://github.com/tidyverse/ggplot2)

ggplot 的工作方式与 matplotlib 不同。它允许你添加多个组件作为图层，以在最后创建完整的图形或绘图。例如，在开始时你可以添加一个轴，然后添加点和其他组件，如趋势线。

- [Bokeh](https://docs.bokeh.org/en/latest/)

Bokeh 库由Continuum Analytics创建，用于生成对 Web 界面和浏览器友好的可视化。Bokeh 生成的可视化本质上是交互式的，可让你传达更多信息。

- [Pyheat](https://github.com/csurfer/pyheat)

Pyheat 是一个开源的 Python 库，帮助开发人员获得代码执行的逐行时间分布。Pyheat不是以表格格式显示，而是用热图表示运行每行代码所需的时间。

- [Heartrate](https://github.com/alexmojaki/heartrate)

Heartrate 是一个开源的 Python 库，提供 Python 程序执行的实时可视化。它提供了一行一行的执行可视化，每个行的执行次数由数字决定。它在浏览器的单独窗口中显示代码的执行情况。

- [Snoop](https://github.com/alexmojaki/snoop)

Snoop 是另一个可以用作调试工具的包。Snoop 帮助你识别局部变量的值并跟踪程序的执行。Snoop 主要用作一种调试工具，用于找出 Python 代码为什么没有执行你认为应该执行的操作。

# Time

## Run time of code

```python
import time
time_start=time.time()  # 开始计时
...
...
...
time_end=time.time()  # 结束计时
print('Time cost:',time_end-time_start,'s')  # 输出耗时
```



# IDE

## PyCharm

> [Download Link](https://www.jetbrains.com/pycharm/) 

### Config Python Interpreter with Conda

<img src='https://github.com/lichuang52001/oss/blob/master/uPic/tq8L4X8vB6.png?raw=true'>







[^1]: https://zhuanlan.zhihu.com/p/147723513

