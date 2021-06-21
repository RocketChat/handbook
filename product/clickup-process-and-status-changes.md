# ClickUp Process and Status Changes

The document aims to share details on different statuses on ClickUp and expected activities related to these statuses.

## Flow of Work:

Below you find the flow of work starting on “To Do” and ending on “Complete”.

Please note it's not mandatory for an item to go through all this status, but it’s expected for items to move from left to right on the flow to keep communication and alignment with sprint goals.

![](https://whimsical.com/clickup-status-flows-2aGaisEZvt2S8GLE1sYsBg)

## Description of Status and Flows

### To Do Status:

**To Do** item is any item brought to the backlog. This status means a backlog item has been created, and a title and person reporting should be described on it.

### Specifying:

**Specifying** status is any backlog item undergoing further requirement analyzes so that engineers can have clarity on what needs to be designed and built. It's expected on this phase to have items properly placed to the chapter that will be required to work on it and any dependencies.

If needed, a new backlog item can be created to split the existing item into multiple streams of work/features that better contemplate the needed effort to have the item completed.

### Ready

**Ready** status means an item has received all needed specifications and is waiting for prioritization and assignment to a developer during a sprint.

### In Progress

**In Progress** status means an item was picked by the engineering team for solution design and coding. Item progress should be reported during team daily standups, and comments should be placed for any major updates. Multiple engineers can work on a backlog item that is on **In Progress** status as needed. But one should be assigned as owner.

### Waiting Review

**Waiting Review** status is used when backlog item coding has been completed and it’s waiting for secondary review by another engineer. \(aka peer review\)

### In Review

**In Review** status is used to show that an item is under secondary review. Comments should be placed on the backlog item card to indicate progress for this task and this also should be reported during daily standups.

### Ready for QA

**Ready for QA** status means an item followed stream B of workflow and will require further analysis by QA team. When item is moved to this status squad, QA should be assigned to the backlog item so that a notification is sent. As items move to this status this should also be shared during daily meetings.

### In QA

**In QA** status means an item is undergoing QA activities. Comments should be placed sharing testing scripts and any findings.

### Change Requested:

**Change Request** status means an item was not approved during secondary review or QA review and will require further coding to match needed backlog item acceptance criteria. Comments should be placed by engineers who performed secondary review or QA analyst outlining needed changes to design/code and any other reasons for code to be on this status.

Any item placed on this status needs to go back to In progress status before moving to the next stages of this workflow.

### Approved

**Approved** status means an item followed stream A or B from after **In Review** and matches all acceptance criteria. Item can be merged if applicable as it gets to this status.

### Done

**Done** status means an item was merged \(if needed\) and can be deployed during release.

### Complete

**Complete** status means an item was properly documented and is available on a package related to a release on Github.

{% hint style="info" %}
Production-ready on Rocket.Chat is a release bundle available for customers to apply on the self-managed or available to upgrade from SaaS solution – requiring customer action to have any changes effective.
{% endhint %}

### Blocked

**Blocked** status shows an item is blocked and requires blockers of any kind for further actions. Any status except for Complete can go to Blocked and vice-versa. Backlog item assignee is responsible for placing comments related to blocker and sharing with the team what is needed for blockers to be removed.

