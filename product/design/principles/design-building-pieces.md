---
description: This is the way we build components on the prototypes.
---

# Building Blocks

While designing an interface, take a step back and analyze the overall possibilities of using existing [Building Blocks](design-building-pieces.md) of our framework. Ultimately, as more the user interacts with the same component, as smooth the learning curve of other UI using this component will be.

## Validation Guide

* Are we using components from our library?
* Should this component perform this type of action?
* Is this a Global Component or Contextual Component? Are you using it in the right context?
* A component instance must not contain modifications on typography, color or inner elements' size, if that is necessary, you must add this new variation to our library as a new component;
* If changes are required, will they possibly break other parts of the platform? They may change the component's meaning or push surrounding ones, breaking the UI.

