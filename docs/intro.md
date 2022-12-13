---
sidebar_label: 'Introduction - Ray Tracing'
sidebar_position: 1
---
# IS F311, Computer Graphics Project    
>The project aims to understand the underlying theory of MLT Algorithm - The Metropolis-Hastings Algorithm, Markov Chain Monte Carlo (MCMC) Methods, Monte Carlo Integration, the rendering equation and the concept of recursive ray tracing.

The goal of photorealistic rendering is to create an image of a 3D scene that is indistinguishable from a photograph of the same scene. What we mostly look out for is an accurate simulation of the physics of light and its interaction with matter. 

# Ray tracing 

In simple terms, ray tracing realistically simulates lighting of a scene and its objects. This is accountable for all the optical effects like reflection, refraction, shadows, scattering and so on. The algorithms are based on following the path of a ray of light through a scene as it interacts and bounces off objects in a scene. 

# All of ray tracing algorithms simulate atleast the following:

## The Camera:
The model determines how and from where a scene is being viewed , including how an image of a scene is captured on the sensor. Most of the rendering systems generate rays starting at camera and traced throughout the scene

## Ray-Object intersections:
Most Ray tracers have a way to test intersections of a ray with multiple objects , typically returning the closest intersection along the ray