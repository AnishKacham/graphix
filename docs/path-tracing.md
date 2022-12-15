---
sidebar_label: 'Path Tracing'
sidebar_position: 2
---
## Rendering equation
In computer graphics, the rendering equation is an integral equation in which the equilibrium radiance leaving a point is given as the sum of emitted plus reflected radiance under a geometric optics approximation - it is based on the law of conservation of energy. The various realistic rendering techniques in computer graphics attempt to solve this equation.

## Monte Carlo methods
These are a set of computational algorithms relying on random sampling to get numerical results. The Monte Carlo methods find their use primarily in problems inolving probabilistic interpretation. The underlying concept is to use randomness to solve problems that might be deterministic in principle. Monte Carlo methods are mainly used in three problem classes: optimization, numerical integration, and generating draws from a probability distribution.


# Path Tracing
Path tracing was the first general-purpose unbiased Monte Carlo light transport algorithm used in graphics. It was introduced as an algorithm to find a numerical solution to the integral of the rendering equation.  
Path tracing incrementally generates paths of scattering events starting at the camera and ending at light sources in the scene. Repeated sampling of any given pixel eventually causes the average of the samples to converge on the correct solution of the rendering equation.  
  
Here is an image using the Path Tracing algorithm we have implemented (10 samples per pixel):
![alt text for screen readers](./path_tracing_10_samples.jpeg "Path Tracing with 10 Samples")


