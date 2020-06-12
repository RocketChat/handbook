---
description: This is the way we build components on the prototypes.
---

# Design Building Pieces

## Atoms <a id="a1e95e87-2666-4415-96a9-10ba7c850d11"></a>

Atoms are the smallest piece of User Interface we can build, some of them must be used just on specific places and other ones can be spread throughout the application. Furthermore, they have been separated in two types.

Be careful when creating and specially when editing Atoms, since they can be applied anywhere in the applications, they have en exponential risk to break things you are not aware.

### Global Atoms <a id="4c8952b7-95be-4e6b-8bb0-b07868631820"></a>

Are those Atoms which can be used anywhere in the system, it guarantees consistency and so the ease to learn.

![](../.gitbook/assets/global-atoms%20%281%29.png)

### Contextual Atoms <a id="df187f85-c33b-4b08-8973-816437f32439"></a>

This type of component is based on its context and responsibilities and must not used in a context or be responsible for something it was not initially created for. In the end, they do not make sense outside of their context, look at the example below:

![Contextual Atoms do not make sense outside their context](../.gitbook/assets/contextual-atoms.png)

The design of each component is based on their meaning so using a component for something it was not initially created increases the probability of breaking the design somewhere else.

Using Contextual Atoms in their respective place makes much more sense, look at the example below:

![](../.gitbook/assets/atom-in-their-context.png)

## Molecules <a id="67a183d7-2f91-4005-a7aa-0a48954ef3b7"></a>

Are a composition of Atoms, usually shape rows or columns. Often they build items of a list. You can notice in the image below a few Contextual Atoms and Global atoms shaping molecules.

![](../.gitbook/assets/contextual-bar-messages%20%281%29.png)

## Organisms <a id="934609c3-11ed-4ef7-95d3-20cfa2ff1247"></a>

Shape blocks of Molecules. Its responsibility is to wrap Molecules and also may add a few other Atoms around it.

![From Atoms to Organisms](../.gitbook/assets/menus.png)

## Templates <a id="556c4236-8ac3-4239-947c-608785a8f497"></a>

The finality of the previous component types is to be part of a Template. A user will not use neither an Atom, Molecule nor Organism, rather then this, they will use the Templates, which have the responsibility to help them to accomplish their daily tasks while using the application.

![From Atoms to Templates](../.gitbook/assets/sidebar.png)

