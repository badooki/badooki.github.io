---
layout: post
title:  "Notes on Temporal Difference"
categories: study note
---

This is my note on temporal difference. Heavily based on [(link)](http://www.gatsby.ucl.ac.uk/teaching/courses/sntn/sntn-2017/resources/kirsty/Learning.pdf).


### Rescorla-Wagner rule

This models Pavlovian conditioning. 

Prediction of the reward:
<div>
\begin{equation}
 v= \mathbf{w}^{\top}\mathbf{u}
\end{equation}
</div>

Square error:
<div>
\begin{align}
E=&\frac{1}{2}(r-v)^2 \\
=&\frac{1}{2}\|r- \mathbf{w}^\top \mathbf{u}\|^2
\end{align}
</div>