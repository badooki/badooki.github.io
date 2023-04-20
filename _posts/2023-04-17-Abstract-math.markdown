---
layout: post
title:  "FAQ in abstract math and analysis"
---

This note is complementary to textbooks and lecture notes available online. I do not aim to be as complete as those materials in my coverage of each topic. Instead, I am writing this note as FAQ (maybe saying "frequent" is incorrect here since I am really just providing answers to questions that I had, which is of sample size 1.) There are some "zones" of abstract math that can be confusing for people without formal math training, that are not addressed in any textbook. Therefore, they can never escape that zone. Hopefully, this can be a ladder for their escape, since it has been for me.

To me, this note is a collection of concepts that were hard to understand, as I studied towards understadning vector-valued reproducing kernel Hilbert space. The papers on this topic use mathematical jargons that are effective but hard to understand without some training. I needed to familiarize myself with the concepts of tensor, tensor product, and Hilbert space, which are all steming from group theory and vector spaces.

## Recommended material
[This is a lecture note](http://www-users.med.cornell.edu/~jdvicto/jdv/mathcourse2223/GFVS2223.pdf) by Jonathan D. Victor on group, fields, and vector spaces. 

## Group

Group refers to a set elements and an operation performed on the elements. The following "group axioms" needs to be satisfied for the set and the operation to be defined as a group. (Following is directly from Victor's lecture note):

1. Associativity: $a \circ (b \circ c) = (a \circ b) \circ c$

2. Identity: There is a special element $e\in G$ ($G$ is a group) for which, for every $a$ in $G$, $a \circ e = a$ and $e \circ a = a$

3. Existence of inverses: For every $a$ in $G$, there is a corresponding group element $a^{-1}$ for which $a \circ a^{-1} = e$ and $a^{-1} \circ a = e$. The operation need not be communtative.
The operation mapps a pair of elements to another element, i.e. $\circ: G\times G \rightarrow G$.
Group axioms define the fundamental and essential properties of a group, and they allow a group to be a set of transformations of an object that preserves some specified aspects of that object's structure. This concretely and visually makes sense for a group such as dihedral group, but not so obvious even for a basic group such as $\mathbb{R}$ with addition. It turns out, the "object" in this case, is the real number line, and the "transformations" are translation along the number line (elements of $\mathbb{R}$ are the amount we translate along the line.) The object is preserved under the operation. In dihedral group, the object is a k-gon, and the transformations (or elements of the group) are rotations (for a square, 0, 90, 180, and 270 degree angle rotations) and reflections. The operation on the group is composition.

