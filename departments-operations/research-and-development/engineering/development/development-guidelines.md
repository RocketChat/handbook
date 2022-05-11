# Development Guidelines

## Setup

Your development workstation needs to have at least 8GB RAM or more to be able to build the Rocket.Chat's source code.



This project is a mono repo, composed of several sub projects, but the main objective/focus is Rocket.Chat as a single build, so for now all scripts are focused on this result.

We have some restrictions in terms of versions and tooling, **please pay attention at this detail.**

```
node -v // v14.17.0
yarn -v // 3.2.0
```



Rocket.Chat runs on top of [Meteor](https://www.meteor.com), that is based in Fibers implementation, Fibers only support s node 14.17.0  thats why you will not have success trying a different one.

You need to [install Meteor](https://www.meteor.com/install) and clone/download the Rocket.Chat's code.&#x20;



Then you just need run

```
yarn # installs the dependencies for all projects
yarn build
yarn dev # it will build the sub projects and then run meteor project
```

The code is spread through the folders, `packages/` and `apps/meteor`, the latter contains the vast majority of the project's code.

If everything went well, it should build and run the application and database for you, now you can access the UI on ([http://localhost:3000](http://localhost:3000))



You can check more info about mono repo and the tooling we are using here:



{% embed url="https://www.meteor.com/developers/tutorials" %}
Meteor documentation
{% endembed %}

{% embed url="https://turborepo.org/docs" %}
Turbo repo documentation
{% endembed %}

{% embed url="https://classic.yarnpkg.com/lang/en/docs/workspaces" %}
Yarn workspaces documentation
{% endembed %}

## Coding and Style Guide

Visite the Rocket.Chat developers docs for details on coding and the various style guides.

{% embed url="https://developer.rocket.chat/rocket.chat/contribute-to-rocket.chat/code-style-guide" %}
