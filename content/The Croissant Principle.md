---
epistemic_status: Sincere but is a rough draft with possible errors, more about the idea
tags:
  - ai
  - math
  - technical
  - research
date: 2026-03-22
---
I recently wrote an ML theory paper which proposes explanations for mysterious phenomena in contemporary machine learning like data scaling laws and double descent. Here's the [link to the paper](Croissant_Paradigm-7.pdf) and the [Twitter thread](https://x.com/realJeffLiang/status/1927827833763529015). I didn't get much attention and need an endorser to publish on ArXiv so I thought I'd post it here and get some feedback (and maybe an endorser!)

Essentially what the paper does is propose that all data in a statistical learning problem arises from a latent space via a generative map. From this we derive an upper bound on the true loss as depending on the training/empirical loss, the distance in latent space to the closest training sample where the model attains better than the training loss, and the compressibility of the model (similar to Kolmogorov complexity).

Barring a (reasonable) conjecture which nonetheless is not proved, we are able to explain why data scaling follows a power law as well as the exact form of the exponent. The intuition comes from Hausdorff dimension which measures the dimension of a metric space.

Imagine you are building a model with 1-dimensional inputs, let's say in the unit interval [0,1]. Let's say you have ten training samples distributed evenly. If the loss of your model is Lipschitz (doesn't change unboundedly fast e.g. for smooth enough functions, derivative is bounded), your model can't get loss on any test sample greater than the loss at the closest point plus the distance to that point (capped at around 1/10) times the Lipschitz constant (bound on the derivative).

If you want to improve generalization, you can sample more data. If these are spaced optimally (evenly), the maximum distance to a training sample decreases like n−1 as can be easily seen. However, if you were working with 2 dimensional data, it would scale like n−1/2! Hausdorff dimension essentially defines the dimension of a metric space as the number d such that this scales like n−1/d.

If you now put these two facts together, you get that the generalization gap (gap between true loss and training loss) is O(n−1/d) where n is the number of training data samples and d is the Hausdorff dimension of the latent space. In other words, we have a concrete explanation of data scaling laws!

It's worth noting that this analysis is independent of architecture, task, loss function (mostly) and doesn't even assume that you're using a neural network! It applies to all statistical learning methods. So that's pretty cool!

The second major phenomenon we can explain is double descent and in fact utilizes an existing framework. Double descent is the phenomenon where as relative parameters per data sample increase, first eval loss decreases then increases, as classical learning theory predicts, but then decreases again! This last part has been quite the mystery in modern ML.

We propose an explanation. The generalization gap has long been known to be bounded by a term depending on the complexity of the model. For small models, increasing parameters helps fit the data better, driving down training and eval loss. Eventually you start to overfit and the complexity skyrockets, causing eval loss to rise. However as you continue increasing parameters, the space of possible models continues to expand so that it now contains models which both fit the data well and have low complexity! This drives eval loss down again, if you can find these models. This fits with empirical observations that enormous models are simple (have low-rank weight matrices) and that sparse subnetworks can do just as well as the full model and the existence of abnormally important "superweights".

So yeah, we provide plausible explanations for two major mysteries of machine learning. I think that's really cool! Unfortunately I don't really have the following or institutional affiliation to get this widely noticed. I'd love your feedback! And if you think it's cool too, I'd really appreciate you sharing it with other people, retweeting the thread, and offering to endorse me so I can publish this on arXiv!

Thanks for your time!