---
layout: post
title:  "Dynamic Programming"
date:   2023-04-28 16:05:00 -0400
---

This note is for quick review, and assumes prior exposure to this topic.

## **Bellman's Principle of Optimality**

"Value" defines how good or costly it is to be in a certain state, assuming we know what are the best actions to take subsequently. The goal is to find this value for all points in the state space. This implies we need to learn optimal policy (which is probably your primal goal). Very important assumption for Bellman's framework is that value is a sum of instanteneous costs. This additivity of cost allows interesting results. The instanteneous cost is denoted $l(x,u)$ ($l:\mathcal{X}\times\mathcal{U}\rightarrow \mathbb{R}$). Then the value $J$ is

$$ J(x[0]) = \min_{u[\cdot]} \sum_{i=0}^\infty l(x[i],u[i]) $$

$$\text{s.t.}\quad x[i+1] = f(x[i],u[i]) $$

where $f$ is the function that represents the environment (a.k.a. plant). We can rewrite it as

$$ J(x[0]) = \min_{u[0]}\left[ l(x[0],u[0]) + J(f(x[0],u[0])) \right] $$

This is the Bellman equation. In case you missed it, now we are minimizing over $u[0]$, instead of the entire $u[\cdot]$. The above can be seen as a self-consistent functional of the function $J$. More concretely, consider a discrete states case. Imagine that $\mathbf{J}$ is a vector whose elements are $J(x)$ for all $x$. The vector $\mathbf{J}$ should satisfy the equality presented by the Bellman equation. A $J(\cdot)$ that satisfies the equality is certified to be optimal. The equation can also be used as an iterative update rule to find the $J(\cdot)$ itself. This technique is called "value iteration". The optimal policy is found by

$$ 
 u[0] = \text{argmin}_{u[0]}\left[ l(x[0],u[0]) + J(f(x[0],u[0])) \right]
$$

### **Q-learning**
