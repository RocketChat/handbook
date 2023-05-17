---
description: >-
  Purpose: This document contains some guidelines on how our engineers should
  interact with github Pull Requests so that we can enhance the review process.
---

# PR General Instructions and Handling

### Things you need to know first

Pull requests in rocket.chat are automatically merged as soon as they meet certain requirements:

* At least one approver (and from all codeowners)
* No comments pending resolution

![image](https://user-images.githubusercontent.com/5263975/182194305-45cf130d-46f0-4e40-ba68-3e02bba2db8b.png)

* All green ci tasks

![image](https://user-images.githubusercontent.com/5263975/182194264-ecc06a2d-b5da-488a-8483-80cccbe8cf65.png)

* Label marked as 'stat: QA skipped' or 'stat: QA tested'

![image](https://user-images.githubusercontent.com/5263975/182193873-bbfea43d-cc8a-4442-92dd-1e8d6ecf34f8.png)

### Rule 1: Start your work as draft

At rocket.chat we have several automations that notify teams when there is a new review pending.

If you open a pull request "read to review" the team will be notified. The team will look at your PR with CI issues, description issues, or even missing changes, they will then ignore it because it looks like an incomplete work and your PR lost its momentum, and went to a potential forgotten queue.

So the suggestion on how to deal is Create pull request in draft do everything you need to do Create tests for the proposed problem Ask a colleague, check if it looks minimally good Ask a colleague to test if the solution does what it needs Adjust the PR title Make sure the description is good Put all related issues in the description Ensure all CI tests and checks are passing

Then, only now, finally, you should move your pr from `Draft` to `Ready to review`

### Rule 2: MILESTONES!

**This is a rule that doesn't apply to community members**. As soon as you start working on a task you know when it should be released. Whether it is a correction, an improvement or a chore. So to ensure that your precious work will be released at the right time, put the milestone. This helps when making the release, enabling the releasers to monitor PRS that are still pending.

### Rule 3: The title matters

Here at rocket.chat we decided to make a changelog focused on the person who manages rocket.chat, not necessarily the developer.

So we created some rules (similar to conventional commits) to help organize the changelog generation

* `Regression: Your title here...` The term regression is used a little differently here on rocket.chat Regression means a bug introduced in the development period, which is being fixed before being released. No one has ever seen this problem in production, as it never existed in production. This is a regression. **This pull request and its description will be omitted from the release.**
* `Chore: Your title here` Things that don't matter to the customer/end user. Like: CI tweaks, rewrites that don't change behavior, Testing
* `[NEW] Your title here...` This one applies to new stuff, which will be released in the future, NEVER expect a new one to make it into previous releases
* `[IMPROVE] Your title here...` Similar to `NEW`, but it is about improvements in the features that already exist
* `[BREAK] Your title here...` This is not something you see every day, but it needs to be remembered. When we decide to change some functionality, or remove some functionality, it can affect the customer's life and he needs to know. Be careful, as this PR will be waiting for a MAJOR release, this may take some time.

Please make sure PR has a name that really translates the modification involved in it.

### Rule 4: Description

All Pull Requests are expected to have appropriate description, mentioning the areas of the code, features, and expected behavior or other relevant details that help any person checking PR to understand its purpose on a highl evel, being this person from engineering, product community or other applicable interested parties.

### Rule 5: Testing

It's very likely that when you make a change you also test the effects of that change, and that's great! However, it is a good practice that we create automated tests for those changes. So if you want to avoid extra work and review requests, create automated tests (e2e and unit).

### Rule 6: Ownership

**This is a rule may not apply to community members.** You are responsible for your PR. Request changes? questions? conflicts? deadlines? and even reviews! you are responsible for managing all of those. Remember that in a company other developers are doing other task, no one else should be more concerned about this delivery other than you, so create a routine and keep your PRs always sharp. Another thing is deadlines, don't expect your pull request with 10000 files changes to be reviewed at the last minute, as soon as you mark it as done, ensure a comfortable deadline so that others can do their work correctly (QA+review).

PS: Other details on rule 9

### Rule 7: Size

Pull requests should as much as possible be self-contained to make it easier for engineers to review them.

In case your pull requests contain modifications on multiple features or areas, please consider using “Feature Branch” approach. i.e.[ https://github.com/RocketChat/Rocket.Chat/pull/25570](https://github.com/RocketChat/Rocket.Chat/pull/25570)

Feature Branch will allow PR to have multiple checks and is expected to reduce bugs as well as keep items added as a bundle in what we consider an organized fashion.

### Rule 8: Comments to Code

As we are an open source company with potential for every PR to be checked by community and have multiple engineers from different areas that can review your code it helps a lot to live comments on code to place lines of thought, as a calculation memory.

### Rule 9: PR Review Actions

Review process and best practices are defined by chapters, with code owners as the gatekeepers for those to be followed.

Some important and general items to have in mind are:&#x20;

1.Code Owners setup will be reinforced for any PR review.

2.In case a change is requested or comments from reviewer are made, conversation should only be marked as resolved by the reviewer who requested those changes. If another person marks conversations as resolved, this person will be accountable for any further developments from it.

3.In case a review is dismissed, the person dismissing the review will be accountable for any steps taken on PR afterward.

