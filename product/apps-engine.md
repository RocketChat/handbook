# Apps-Engine

## Purpose

The Rocket.Chat Apps Team is responsible for the Apps-Engine framework, which allows developers to make plugins \(apps\) to extend Rocket.Chat's functionality without having to deep dive into the core codebase. Along with the framework itself, we work on official integrations through the Apps-Engine, maintain the tooling around it and integrate Rocket.Chat with our Marketplace.

## Processes

We're running some experiments on how to run your development processes, based on some practices from the Agile methodologies. 

Currently, we have a 2-week sprint - within which we have a **Planning**, a **Retrospective**, and **Daily** sessions.

* **Planning - Mondays at** [**10am \(BRT\)**](http://mytime.io/10am/BRT) **-** In the first Monday of the sprint we go over our ClickUp backlog, selecting what we think fits into our Sprint. In the _second_ Monday of the sprint, we just have a check-in for the overall progress and try to identify any point we might need to pivot.
* **Dailies - Every day at** [**9:45am \(BRT\)**](http://mytime.io/9:45am/BRT) **-** We follow the "standard" format of the Scrum Daily ceremony. Every team member shares the progress they had in their tasks in the previous day, the plans for advancing in the current day, and if there are any blockers. **NOTE:** Whenever the daily "conflicts" with any other call we have, we'll just merge it into the other call.
* **Retrospective - Every other Friday at** [**10am \(BRT\)**](http://mytime.io/10am/BRT) **-** We do it at the end of every Sprint. We go over the accomplishments of that specific Sprint, and then discuss what has worked and what can be improved in the process, coming up with action items we need to achieve those improvements.

### Other Calls

We have some things that are not in Agile methodologies:

* **Tuesdays** [**09:45am \(BRT\)**](http://mytime.io/09:45am/BRT) **- Engineering Session -** Topics discussed here can vary. Firstly we discuss the approaches we're going with when dealing with tasks/investigations. Then, we can move to discussing proposals of new APIs, automations, plans for the future, etc. Anything Engineering.

### **Important notes**

* You SHOULD check Rocket.Chat for announcements or to answer any pending questions when you start working and before you finish your shift **at least**. You are, of course, encouraged to engage in any conversation on your channels whenever you like. Please note you are not expected to be _always_ active in chat. Everyone needs time to focus on the task at hand, this is just a rule of thumb so you don't miss out or leave anyone hanging/blocked.
* You SHOULD push your code to the _upstream_ before you finish your working hours. This way, if anything critical happens, someone else can take over the task you were working on if needed.

## Contribution Workflow

### Github

New contributions will most likely start with a new git branch. We don't have strict rules for naming a branch, but here are some suggestions:

* `feat/*` ****if you'll be working in new feature
* `fix/*` if you'll be working on a fix
* `regression/*` if you'll be working on a regression in the current release
* just use a custom name, without the "folder format", if it doesn't fit the suggestions above

When opening a PR, please follow the guidelines in [Development Guidelines](development/development-guidelines.md#choosing-a-good-pr-title).

### Multiple Repos

Often we'll need to open a PR in more than one of the Org's repos when introducing a new feature. That happens because the Apps-Engine hooks itself into many points in Rocket.Chat so they can provide Rocket.Chat Apps with functionalities. 

When that's the case, make sure to link all the PRs by adding all their related URLs in the description of each one.





