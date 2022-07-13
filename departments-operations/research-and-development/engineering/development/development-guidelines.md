# Development Guidelines

## Setup

Your development workstation needs to have at least 8GB RAM or more to be able to build the Rocket.Chat's source code.

This project is a mono repo, composed of several sub-projects, but the main objective/focus is Rocket.Chat as a single build, so for now all scripts are focused on this result.

We have some restrictions in terms of versions and tooling, **please pay attention to this detail.**

{% hint style="info" %}
We recommend using yarn
{% endhint %}

```
node -v // v14.17.0
yarn -v // 3.2.0
```

Rocket.Chat runs on top of [Meteor](https://www.meteor.com/), which is based on Fibers implementation, Fibers only support s node 14.17.0  that's why you will not have success trying a different one.

You need to [install Meteor](https://www.meteor.com/install) and clone/download the [Rocket.Chat's code](https://github.com/RocketChat/Rocket.Chat.git) by executing

```
git clone https://github.com/RocketChat/Rocket.Chat.git
```

Then you just need to run

```
yarn # installs the dependencies for all projects
yarn build
yarn dev # it will build the sub projects and then run the meteor project
```

The code is spread through the folders, `packages/` and `apps/meteor`, the latter contains the vast majority of the project's code.

If everything went well, it should build and run the application and database for you, which can be accessed on your browser from the url [http://localhost:3000](http://localhost:3000)

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

```
yarn lint
```

```
yarn testunit
```

```
yarn testunit-watch
```

It's important to run the lint and tests before pushing your code or submitting a Pull Request, otherwise, your contribution may fail quickly on the CI. Reviewers are forced to demand fixes and the review of your contribution will be further delayed.

Keep your PR's title as short and concise as possible, and use PR's description section, which you can find in the PR's template, to provide more details into the changelog.

Even if it's being something new in the code the users already expect the filter to filter by what they see (translations), a better one would be:

You can use several tags to describe your PR, i.e.: `[FIX]`, `[NEW]`, etc. You can use the descriptions below to better understand the meaning of each one, and decide which one you should use:

Example of- a **good** PR title:

{% embed url="https://developer.rocket.chat/rocket.chat/contribute-to-rocket.chat/code-style-guide" %}
