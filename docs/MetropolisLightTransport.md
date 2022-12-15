---
sidebar_label: 'Metropolis Light Transport'
sidebar_position: 3
---

## Markov Chain
This is a stochastic model comprising of objects usually defined as a family of random variables, describing a sequence of possible events in which probability of next event depends solely on that of the current state. To avoid any process termination, it is assumed that all possible states and the nodes in transition matrix are included in definition of the process itself.
Markovian processes are the basis for simulation methods called *Markov Chain Monte Carlo*

## Markov Chain Monte Carlo - MCMC
These methods cover a class of algorithms for sampling from a probability distribution. A markov chain (which has the desired distribution as its equilibrium distribution) is constructed and states from the chain are recorded to get a sample of the desired distribution. The model can be improved by increasing the number of steps involved.

## Metropolis-Hastings algorithm
This is an MCMC method to get a sequence of random samples from a desired probability distribution, particularily useful when direct sampling is difficult. The algorithm finds its uses in approximating distitbutions and evaluating statistical integrals.
The algorithm can draw samples from a distribution with probability density P(x) , given a function f(x) which is *proportional* to our density P. It iteratively generates a sequence of samples such that with production of more samples, the distribution matches closer to the actual desired one. 
At each iteration, a candidate is picked for the next random value based on current state. This is either accepted or rejected with some probability threshold, with the current value being passed on for later iterations in latter case.  

# Metropolis Light Transport
MLT generates a sequence of light-carrying paths through the scene, where each path is found by mutating the previous path in some manner. These path mutations are done in a way that ensures that the overall distribution of sampled paths is proportional to the contribution the paths make to the image being generated. 
MLT provides an important advantage over methods based on independent sample generation - it can explore the path space locally. This allows MLT to render challenging scenes like a dark room with light only entering from a partially open door. 

## Our experience 
We assumed that the mutations have symmetric transitions, an assumption which lowered the quality of the image. 
We also wished to implement bidirectional mutations, which required Bidirectional Path Tracing to be implemented - something we hope to do in the near future.


Here is an image using the MLT algorithm we have implemented (10 mutations per pixel):  
![alt text for screen readers](./mlt_10_mutations.jpeg "mlt with 10 mutations per pixel")
