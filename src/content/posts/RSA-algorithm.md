---
title: RSA Algorithm
tags:
  - RSA
  - Cryptography
categories:
  - Algorithm
abbrlink: 8421d30f
date: 2021-05-27 21:31:17
---

RSA algorithm is one of the Public key encryption (or Asymmetric cryptography) methods. RSA algorithm is widely used becasue of its security. But what is it's foundemental theory? This post will expalin RSA algorithm in detail based on previous research.

<!--more-->

# Simple History of Encryption

Before 1976, all encryption methods fellow the same rule:

1. Alice chooses a certain encryption method, then encrypt *message*;
2. Bob was told by Alice what the encryption method is, then decrypt *message*;

Methods based on the above rules are named "Symmetric-key algorithm". Alice has to tell Bob the information about the encryption method before Bob can decrypt the *message*, this contains a big potential risk which annoys people for such a long time.

<img src='https://i.loli.net/2021/05/27/lFuwXpNmWTnhZRJ.jpg' width='80%'>

In 1976, 2 American scholars, Whitfield Diffie and Martin Hellman proposed a brand new pattern that without transferring keys *message* can be decrypted, this method is named as Diffie–Hellman key exchange, also asymmetric cryptographic algorithm.

未完待续...





# Reference

1. [Public-key cryptography, *Wikipedia*](https://en.wikipedia.org/wiki/Public-key_cryptography) 
2. [RSA algorithm, *Wikipedia*](https://simple.wikipedia.org/wiki/RSA_algorithm) 
3. Rivest R L, Shamir A, Adleman L M. Cryptographic communications system and method: U.S. Patent 4,405,829[P]. 1983-9-20.
4. RSA算法原理[(1)](http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html)&[(2)](http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html) 
5. [YouTube] The RSA Encryption Algorithm [(1)](https://youtu.be/4zahvcJ9glg)&[(2)](https://youtu.be/oOcTVTpUsPQ) 
6. [YouTube] [Will Quantum Computers break encryption?](https://youtu.be/6H_9l9N3IXU) 
7. [使用X.509数字证书加密解密实务（一）-- 证书的获得和管理](https://www.cnblogs.com/chnking/archive/2007/08/30/875947.html)
8. [理解公钥与私钥](https://songlee24.github.io/2015/05/03/public-key-and-private-key/)











