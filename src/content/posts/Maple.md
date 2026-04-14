---
title: Maple
tags:
  - Skill
categories:
  - Tool
abbrlink: 45ba22af
date: 2021-07-22 11:48:35
---

# 注释

单行注释：

```matlab
# ...
```

多行注释

```matlab
(*
...
*)
```

# Maple 最优化模块

```
restart;

with(Optimization);

Interactive();
```

<!--more-->

# 绘图

## 2D 绘图

- 单个函数绘图

```
restart;
fx:= x;
plot(fx,x=0..10);
```

- 多个函数绘图

```
restart;
f1:= x;
f2:= x^2 ;
plot({f1,f2},x=0..10);
```

# 求解

## 常微分方程

- [dsolve](https://www.maplesoft.com/support/help/maple/view.aspx?path=dsolve)

# 一些函数

## 求值

- [evalf](https://www.maplesoft.com/support/help/maple/view.aspx?path=evalf)：对函数进行估值

## 赋值

- [subs](https://www.maplesoft.com/support/help/maple/view.aspx?path=subs)

示例如下：

```
restart;
equ := {x + y = 5, 2*x + 3*y = 21};
var := {x, y};
sol := solve(equ, var);
a := subs(sol, x);
b := subs(sol, y);
```
