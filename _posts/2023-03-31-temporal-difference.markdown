---
layout: post
title:  "Notes on Temporal Difference"
categories: study note
---

This is my note on temporal difference. Heavily based on [(link)](http://www.gatsby.ucl.ac.uk/teaching/courses/sntn/sntn-2017/resources/kirsty/Learning.pdf).


### Rescorla-Wagner rule

Consider a model that outputs expected reward ($v$), given some stimulus ($\mathbf{x}$).
<div>
\begin{equation}
 v= \mathbf{w}^{\top}\mathbf{x}
\end{equation}
</div>
The real reward that the model receive, $v_d$, is our "data". This model does not have a temporal componenet. We update the weights $\mathbf{w}$ of the model by minimizing the square error of the prediction and the data.
<div>
\begin{align}
\min_\mathbf{w} & E(\mathbf{w}) \\
 E(\mathbf{w}) &= \frac{1}{2}(v_d- \mathbf{w}^\top \mathbf{x})^2
\end{align}
</div>
We perform gradient descent to find the optimal $\mathbf{w}$
<div>
\begin{equation}
\mathbf{w} \leftarrow \mathbf{w} - \epsilon \frac{dE}{d\mathbf{w}}
\end{equation}

\begin{equation}
\frac{dE}{d\mathbf{w}} = -(v_d-\mathbf{w}^\top \mathbf{x})\mathbf{x}
\end{equation}
</div>

Therefore, the final form of the update rule is usually written as
<div>
\begin{equation}
\mathbf{w} \leftarrow \mathbf{w} + \epsilon \delta \mathbf{x}
\end{equation}
\begin{equation}
\delta = v_d-v
\end{equation}
</div>
$\delta$ is known as "prediction error", "which has biological analogues in the activity of dopaminergic cells in the VTA."

### Temporal difference learning

Now we consider the temporal component to our scenario. In this case, the definition of "expected reward" ($v(t)$) is expected value of the sum of future rewards at time $t$.

<div>
\begin{equation}
v(t)=\langle \sum_{\tau=0}^{T-t}  r(t+\tau) \rangle
\end{equation}
</div>

 Then what is $v_d(t)$? $v_d(t)$ would be the true expected reward at time $t$. However, now the problem is at time $t$, it is impossible to know what the true future reward will be. Hence it is impossible compute $\delta$. Fortunately, there is a trick that allows us to converge to the true $v_d(t)$ as we make observations without messing with the arrow of time.

<div>
\begin{align}
v(t)&=\langle \sum_{\tau=0}^{T-t}  r(t+\tau) \rangle \\
&=\langle r_t \rangle + v(t+1)
\end{align}
\begin{equation}
\langle r_t \rangle = v(t)-v(t+1)
\end{equation}
</div>

$r_d(t) \equiv \langle r_t \rangle$ is the actual reward that we receive in one time step. The prediction error is now

<div>
\begin{align}
\delta(t) &= r_d(t) + v(t+1)-v(t)
\end{align}
</div>
