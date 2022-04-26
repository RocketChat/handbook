# Apps-Engine

## Purpose

The Rocket.Chat Apps Team is responsible for the Apps-Engine framework, which allows developers to make plugins (apps) to extend Rocket.Chat's functionality without having to deep dive into the core codebase. Along with the framework itself, we work on official integrations through the Apps-Engine, maintain the tooling around it and integrate Rocket.Chat with our Marketplace.

## Processes

We're running some experiments on how to run your development processes, based on some practices from the Agile methodologies.

Currently, we have a 2-week sprint, from Tuesday to Monday - within which we have a **Planning**, a **Retrospective**, **Grooming**, and **Daily** sessions.

* **Review/Planning - Every other Tuesday at** [**10am (BRT)**](http://mytime.io/10am/BRT) **-** At the beginning of the Sprint, we go over the previous one, checking what tasks we completed and if there are any we need to carry over to the current - this is the _Review_. Then we move to the actual _Planning_, where we allocate the work we agree seems to fit the Sprint.

{% hint style="info" %}
In cases where we need to carry tasks over, it's important to assess honestly what happened so the team can prepare actions that prevent this carrying over from happening again. It's not a problem to carry things over, the problem would be missing opportunities to learn and improve
{% endhint %}

* &#x20;**Dailies - Every day at** [**9:45am (BRT)**](http://mytime.io/9:45am/BRT) **-** We follow the "standard" format of the Scrum Daily ceremony. Every team member shares the progress they had in their tasks in the previous day, the plans for advancing in the current day, and if there are any blockers.
* **Retrospective - Every other Friday at** [**10am (BRT)**](http://mytime.io/10am/BRT) **-** We do it at the end of every Sprint. We go over the accomplishments of that specific Sprint, and then discuss what has worked and what can be improved in the process, coming up with action items we need to achieve those improvements.
* **Grooming/Discovery - Every Friday at** [**3pm (BRT)**](https://mytime.io/3pm/BRT) **-** In these sessions we go over any initiatives we have in your short-term roadmap, breaking them down into tasks and assigning them estimated Sprint Points. This is a good opportunity for us to discuss with the team the technical details of the approach we'll take when implementing those tasks.

### **Important notes**

* You SHOULD check Rocket.Chat for announcements or to answer any pending questions when you start working and before you finish your shift **at least**. You are, of course, encouraged to engage in any conversation on your channels whenever you like. Please note you are not expected to be _always_ active in chat. Everyone needs time to focus on the task at hand, this is just a rule of thumb so you don't miss out or leave anyone hanging/blocked.
* You SHOULD push your code to the _upstream_ before you finish your working hours. This way, if anything critical happens, someone else can take over the task you were working on if needed.

## Contribution Workflow

### Github

New contributions will most likely start with a new git branch. We don't have strict rules for naming a branch, but here are some suggestions:

* `feat/*` \*\*\*\*if you'll be working in new feature
* `fix/*` if you'll be working on a fix
* `regression/*` if you'll be working on a regression in the current release
* just use a custom name, without the "folder format", if it doesn't fit the suggestions above

When opening a PR in any of our repositories, follow the guidelines in [Development Guidelines](development/development-guidelines.md#choosing-a-good-pr-title).

### Multiple Repos

Often we'll need to open a PR in more than one of the Org's repos when introducing a new feature. That happens, for instance, when adding a new feature to the Apps-Engine, because it hooks itself into many points in Rocket.Chat so they can provide Rocket.Chat Apps with functionalities.

Whenever you have to commit code to more than one repo, keep in mind the following guidelines:

* **Start your PRs as a draft when they depend on modifications from other repos.** Example: You're changing an API in the Apps-Engine, which also requires you to change how Rocket.Chat handles it. The PR in Rocket.Chat needs to be started as a draft and can only be ready for review **once the Apps-Engine version has been updated to the latest version containing the API change** \_\_(either a _patch_ or an _alpha_).
* **Make sure the PRs reference each other in their descriptions.** Reviewers will need the full context of your contribution to properly review them, so they need to know the PRs in the other repos.

####
