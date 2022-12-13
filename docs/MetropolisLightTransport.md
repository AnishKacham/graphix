---
sidebar_label: 'Metropolis Light Transport'
sidebar_position: 3
---

## Monte Carlo methods
These are a set of computational algorithms relying on random sampling to get numerical results. The Monte Carlo methods find their use primarily in problems inolving probabilistic interpretation. A notable thing regarding these is that the computational cost associated with the monte carlo simulation can be unexpectedly high.


## Markov Chain
This is a model comprising of objects usually defined as a family of random variables, describing a sequence of possible events in which probability of next event depends solely on that of the current state. To avoid any process termination, we assume that all possible states and the nodes in transition matrix are included in definition of the process itself.
Markovian processes are the basis for simulation methods called *Markov Chain Monte Carlo*

## Markov Chain Monte Carlo - MCMC
These methods cover a class of algorithms for sampling from a probability distribution. We begin by constructing a markov chain (which has the desired distribution as its equilibrium distribution) and record states from the chain to get a sample of the desired distribution. We can improve the model by increasing the number of steps involved

# Metropolis-Hastings algorithm
This is an MCMC method to get a sequence of random samples from a desired probability distribution, particularily useful when direct sampling is difficult. The algorithm finds its uses in approximating distitbutions and evaluating statistical integrals.
The algorithm can draw samples from a distribution with probability density $P(x)$ , given a function $f(x)$ which is *proportional* to our density $P$. It iteratively generates a sequence of samples such that with production of more samples, the distribution matches closer to the actual desired one. 
At each iteration, we pick a candidate for the next random value based on current state. This is either accepted or rejected with some probability threshold, with the current value being passed on for later iterations in latter case.
