---
sidebar_label: 'Path Tracing'
sidebar_position: 2
---
# Path Tracing
Path tracing was the first general-purpose unbiased Monte Carlo light transport algorithm used in graphics. It was introduced as an algorithm to find a numerical solution to the integral of the rendering equation (which is based on the law of conservation of energy) - solving the rendering equation for any given scene is the primary challenge in realistic rendering.  
Path tracing incrementally generates paths of scattering events starting at the camera and ending at light sources in the scene.  
  
Here is an image using the path tracing we have implemented (10 samples per pixel):
![alt text for screen readers](./path_tracing_10_samples.jpeg "Path Tracing with 10 Samples")


