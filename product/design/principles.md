---
description: Provide the team standards for built and evaluation.
---

# Principles

## Building Blocks

While designing an interface, take a step back and analyze the overall possibilities of using existing [Building Blocks](rules/building-blocks-framework.md) of our framework. Ultimately, as more the user interacts with the same component, as smooth the learning curve of other UI using this component will be.

## Validation Guide

* Are we using components from our library?
* Should this component perform this type of action?
* Is this a Global Component or Contextual Component? Are you using it in the right context?
* A component instance must not contain modifications on typography, color or inner elements' size, if that is necessary, you must add this new variation to our library as a new component;
* If changes are required, will they possibly break other parts of the platform? They may change the component's meaning or push surrounding ones, breaking the UI.

## Recognition Rather than Recall

Do not overload the user's memory, add visual cues through their journey so they can recognize rather than recall. The recognition is easier than recall because it is connected to more cues; information spread which activate that related information in their memory. 

#### Validation Guide

* Do the users need to recall a information which is not available at that moment? Design a few cues in the UI so they can recognize that;
* Does this mental model already exist within our product?
* Did you use words already used in the system?
* Can the user recognize the information on the previous steps?

## Focus

Its purpose is to direct the audience's attention, as fewer spotlight areas we have at the same time, as focused the users will be on their current task. 

#### Validation Guide

* Are all CTAs available \(at the same time\) really necessary? Can we focus just on some of them during this specific user task?
* Are ****there any important information being hidden in the clutter?

## Consistent and Meaningful Motion

Real-world is not static so the product either. However, the motion must be consistent on its timing and curve as well as meaningful, leaving cues to the audience so they can understand the affordance of a component.

#### Validation Guide

* All means of interaction must be represented by a visual cue, you may use motion in most of these cases;
* All short CSS transitions, animations and transforms must follow our [animation curve base ](rules/animation-curve-and-timing.md)and its timing.

## Design Together

Design is made by the collaboration of different people, with different backgrounds. 

#### Validation Guide

* Are we asking feedback for players on different teams?
* Are we looking into the community feedback?
* Are we asking the Support Team for related issues on the design we are currently working on?

## Another's Lens

Bias influences our worldview, we must keep the awareness of how other digital platforms are bringing solutions for similar issues.

#### Validation Guide

* How do competitors approach this?
* Is there already a similar mental model in another product? 

## Multi-language First

The product is worldwide used. Always when designing a piece of the software, you must think about its many languages variations.

#### Validation Guide

* How is this going to look if the text become longer?
* How is this going to look if the text become shorter?

## Minimalism

By reducing the amount of words and any UI elements, we increase the users' attention on the ones that are really important. 

Antoine de Saint-Exupery said "perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away".

#### Validation Guide

* Was it written with the fewest words?
* Did you use a meaningful icon instead of words where you could?
* Did you use the fewest number of steps?

