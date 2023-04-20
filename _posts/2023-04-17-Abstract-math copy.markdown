---
layout: post
title:  "Abstraction"
---

## Introduction (a short rant)
I study machine learning and this blog, like many other PhD students' blogs, covers topics in machine learning. No machine learning scientists need to know abstract algebra concepts in order to perform research. However, it is hard to read serious (theoretical) machine learning literature without understanding the terminologies used in them. This has been my rate-limiting step which I eager to improve.

This post is for you if you are also frustrated by phrases such as "$V$ is a vector space equipped with inner product" or scared whenever the word "tensor product" comes up, since you do not think you fully grasped what a tensor really is, and you only heard someone say "it is just a generalization of a matrix" (which is in fact kind of wrong; but it doesn't matter in practice). I personally was puzzled by the "equipped with inner product" phrase, since it is like saying a Lego set comes with: 1. the bricks and 2. your ability to click these bricks together. If you give me bricks, I should be able to click them together no matter what. It doesn't make sense my ability to click is attached to the Lego set. If you give me vectors, I should be able to take inner product no matter what. Why do they attach my ability to take inner product to the definition of certain vector spaces but not all vector spaces? I ask this question to people who are comfortable with abstract algebra, and they all reply "that is just the way it is", and that makes it sound even more mysterious.

It all has to do with neuroplasticity of our math brain (whatever that subcircuit is in our cortex) and college curriculum. After taking Gilbert Strang's "Linear Algebra", your brain becomes an expert in handling array of numbers. If your brain is plastic enough, taking abstract algebra course will help you generalize the array of numbers to some abstractions. Unfortunately, if you never took abstract algebra and have thought of vectors as array of numbers for a decade, your brain has solidified around that notion. For our unfortunate souls, I aim to provide a sledge hammer to beak us free from that mind-jail and allow ourselves to read advanced papers like we eat breakfast. This is a blog post equipped with your ability to learn abtract math!


## Goal 1: "Vector space equipped with inner product"
Let's understand what this means. We first need to free ourselves from vector = array of numbers mindset.

Vector space is comprised of two things: vectors drawn from a set $V$, and scalars drawn from a field $k$. We will define vector by showing how it interact with each other and scalars. However, we need to first know what "scalar" and "field" really means.

### Field

I know you are thinking about $\mathbb{R}$ (real numbers) and $\mathbb{C}$ (complex numbers). Pretend like you don't know that. But pretending you don't know something you already know is very difficult. That is a skill that you need for abstraction.

Field is defined by axioms that dictates how its elements interact with each other. (modified from Dr. Victor's note:)

1. A field is a set of elements $\alpha, \beta, \ldots$ along with two operations, $\spadesuit$ and $\diamondsuit$.

2. For the operation $\spadesuit$, the elements form a commutative group. The identity is denoted by $e_\spadesuit$. The inverse of $\alpha$ is denoted $\alpha_\spadesuit$.

3. For the operation $\diamondsuit$, the elements other than $e_\spadesuit$ form a commutatitve group, and the identity is denoted by $e_\diamondsuit$. The inverse of $\alpha$ is denoted $\alpha_\diamondsuit$. (pg.12 error)

4. The operations $\spadesuit$ and $\diamondsuit$ are linked by the distributive law, $\alpha \diamondsuit (\beta \spadesuit \gamma) = \alpha \diamondsuit \beta \spadesuit \alpha \diamondsuit \gamma$. But note that 
$\alpha \spadesuit (\beta \diamondsuit \gamma) \neq \alpha \spadesuit \beta \diamondsuit \alpha \spadesuit \gamma$.

5. Fields can be finite or infinite

This may look completely arbitrary, but everything makes sense when you realize $\spadesuit$ is what is commonly known is $+$ and $\diamondsuit$ is $\cdot$. But resist that temptation for now.

It seems arbitrary that in 3., we are omitting $e_\spadesuit$. It is there because, apparently, $\alpha \diamondsuit e_\spadesuit = e_\spadesuit$. This means that $e_\spadesuit$ does not have inverse, since if it does exists (and denote it $e_{\spadesuit\diamondsuit}$) and assign it to $\alpha$, then we have $e_{\spadesuit\diamondsuit} \diamondsuit e_\spadesuit = e_\spadesuit$. However, the right hand side (RHS) should not be $e_\spadesuit$, but instead $e_\diamondsuit$. Now the question is, why did I assume that this is true: $\alpha \diamondsuit e_\spadesuit = e_\spadesuit$? Interestingly, this can be proved with the axioms provided above (for now, I refer to [here]("https://www.quora.com/How-we-can-prove-0-x-x-0-0-by-only-real-field-axioms") for the proof).

<details>
    <summary>Questions that I have. Click to expand</summary>
    As of writing this, I am wondering how to show the order of operations given the field axioms... Also, how were these axioms constructed? It feels arbitrary, except for the fact that it perfectly explains the real numbers (and complex numberes) with addition and multiplication. Is it really useful to think of  it as something more general? What if we change the axioms and come up with different versions of field? I feel like this is a rabbit hole I should jump over... Ah the temptation to jump in though! But the time is finite.
</details>

### Vector space
The idea of vector being an array of number and scalar being a real number is burned-in to my brain. I will use different names: omnis (Latin for "everything", plural: omnes) and pondus (Latin for "weight", plural: pondera).

Omnis space (vector space) have two kinds of mathematical objects: omnes ($o,p,\ldots$) drawn from a set $O$, and pondera ($\alpha,\beta,\ldots$) form a field $K$.

The field of pondus has operations $\spadesuit$ and $\diamondsuit$, the same notations used above.

The omnes form a communtative group under operation $\clubsuit$. The inverse of $o$ is $o_\clubsuit$.

There is a special operation called $\heartsuit: O\times K \rightarrow O$. If $o \in O$ and $\alpha \in K$, then $o \heartsuit \alpha \in O$. It obeys two kinds of distributive laws:

1. $\alpha \heartsuit (o \clubsuit p) = \alpha \heartsuit o \clubsuit \alpha \heartsuit p$
2. $(\alpha \spadesuit \beta) \heartsuit o = \alpha \heartsuit o \clubsuit \beta \heartsuit o$

Note that the RHS of 2. has $\clubsuit$ instead of $\spadesuit$!
Due to 2., $e_\spadesuit \heartsuit o$ is the identity for $\clubsuit$: $\alpha \heartsuit o = (\alpha \spadesuit e_\spadesuit)\heartsuit o = \alpha \heartsuit o \clubsuit e_\spadesuit \heartsuit o = (\alpha \heartsuit o) \clubsuit (e_\spadesuit \heartsuit o)$.
Now what is an inverse of $\alpha \heartsuit o$ under $\clubsuit$ (denoted <span>$\( \alpha \heartsuit o\)_\clubsuit $</span>)? <span>$e_\spadesuit \heartsuit o = (\alpha \spadesuit \alpha_\spadesuit) \heartsuit o = (\alpha \heartsuit o) \clubsuit (\alpha_\spadesuit \heartsuit o)$</span>. Hence <span>$\( \alpha \heartsuit o\)_\clubsuit $</span> <span>$=\alpha_\spadesuit \heartsuit o$.

There is also some sort of associative law that relates $\diamondsuit$ and $\heartsuit$, namely,  $(\alpha \diamondsuit \beta) \heartsuit o = \alpha \heartsuit (\beta \heartsuit o) $. Due to this, $e_\diamondsuit \heartsuit o = o$. In other words, $e_\diamondsuit$ ($=e_\heartsuit$) is an identity for $\heartsuit$. Why? $e_\diamondsuit \heartsuit ((e_\diamondsuit \heartsuit o) \clubsuit o_\clubsuit)  = (e_\diamondsuit \heartsuit (e_\diamondsuit \heartsuit o)) \clubsuit (e_\diamondsuit \heartsuit o_\clubsuit) = (e_\diamondsuit \heartsuit o) \clubsuit (e_\diamondsuit \heartsuit o_\clubsuit) = e_\diamondsuit\heartsuit(o \clubsuit o_\clubsuit)$
Now look at the left-most side and right-most side of the chain of equalities. The paranthesis that contains $e_\diamondsuit \heartsuit o$ in the left-most side must equal $o$ in the right-most side. Therefore, $e_\diamondsuit \heartsuit o = o$. But I haven't shown that this equality is unique. Anyways, this is not that important for getting to our goal.

So these mathematical objects, omnis and pondus, are defined by their actions. We can further define what they are, by introducing additional actions. We will say that a new action introduces new quantity in the omnis space that satisfies the triangle inequality. We could call it "pressure" or "velocity", or "momentum", but "length" is the simplest concept that satisfies triangle inequality, so we will use "length". 



## Appendix: Group theory

### Homomorphism

1. Onto homomorphism
2. Isomorphism
3. Automorphism

### Kernel