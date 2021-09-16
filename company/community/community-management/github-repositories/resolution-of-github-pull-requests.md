# Resolution of Github Pull Requests

Github Pull Requests are code contributions made by our code contributors \(both internal staff and community members\). The objective of this process is to expedite the resolution of Github PRs created by our community of contributors.

Most healthy open source project maintains a queue of PRs waiting to be reviewed and merged. Maintaining this queue at a reasonable length and avoiding heavy backlog from lead community contributors is the main goal of this process.

_The core of this process is asynchronous communication for faster resolutions._

## 1. Track Internally and Externally

A community team member adds him/herself as a reviewer on the PR.

Next the same member adds the PR link to [this clickup list](https://app.clickup.com/4207297/v/li/43369911), assigns it to him/herself and adds a due date. This is to avoid any heavy backlog in the future.

## 2. Collision Detection

With each pull request recieved, the assigned team member assesses it to understand whether the PR overlaps with any internal development process \(ongoing/completed/planned\) or not.

Ideally the contributor should communicate and share what they want to work on prior to submitting a PR on our open community server's [dev](https://open.rocket.chat/channel/dev) channel. That way we can drive them to the right direction and avoid any potential overlap.

But in such a huge Open Source project like Rocket.Chat, overlapping PRs are a possibility. To resolve this situation, it is critical to understand with which stage of the internal development pipeline, the community PR crashes.

### Collision Resolution

We value all our contributions, but if a collision happens, generally the staff PRs get precedence over community contributions. Following is a step by step process of what to do at which stage.

* **Planning stage:-**  If the community contribution overlaps any pre-planned development, the community PR is put on hold.  The community team member then contacts the Product Manager or the Engineering Manager for feature implementations and bug fixes respectively as soon as possible to avoid it reaching any of the next two stages.   _Whether the PR will be accepted or not stays inconclusive in the meantime._ 
* **Ongoing stage:-**   If the PR overlaps an internally ongoing development process, the community PR is put on hold indefinitely.   It is now upto the community team member to talk to the Engineering Manager or the respective Product Manager for bugs and feature implementations respectively and come up with a resolution.   _90% of the time, it is safe to assume that the outside contribution will not be accepted._ 
* **Completed stage:-**  _If the community PR collides with one of our staff PRs, the community contribution is to be politely rejected._

## 3. Review I

The assigned community team member now determines if the PR is immediately resolvable or not. There are two questions to be asked here -

### Is it a feature implementation?

If it is a feature implementation, does it conform to our product roadmap? _If not, the PR should be politely rejected._

If it conforms to our product roadmap, is the implemented feature planned to be EE only? _If so, the PR should be politely rejected._

If the previous two checks are passed - is there any visible overlap? Go to the previous section for an overlap resolution if there is. Otherwise,

1. Assign the task to the respective Product Manager on ClickUp.
2. Set the appropriate squad.
3. Assign the respective squal lead.

Is the feature planned to be implemented in the current release? If so extend the due date by two weeks.

If it is to be implemented some time in the future, extend the due date to sync with the planned timeline.

### Is it a bug fix?

If it is a bug fix, the community team member attempts to review the PR. If possible, he/she approves the PR for public visibility. Furthermore, he/she must also -

1. Assign the task to the Engineering Manager on ClickUp.
2. Set the appropriate squad.
3. Assign the respective squad lead on both ClickUp and GitHub.
4. Extend the due date by two weeks.

## 4. Review II

If the PR gets to this stage, one of the developers from the respective squad reviews the PR one more time for quality check. This review process can take a couple of days to weeks.

## 5. Final Resolution

Once upto satisfaction and if everything checks out, **the PR gets merged**.

