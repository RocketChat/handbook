---
description: How GitHub issues should be managed
---

# GitHub Issues

We have two GitHub actions using helping handling issues without a response for long periods of time. They are both using [Close Stale Issues](https://github.com/marketplace/actions/close-stale-issues) using the following configurations:

## Stale issues

Configuration options [here](https://github.com/RocketChat/Rocket.Chat/blob/develop/.github/workflows/stale.yml#L29-L38)

* Bot will search for issues without new comments in the last 60 days that doesn't have any of the following labels:
  * `Epic`
  * `Feature: Planned`
  * `sla`
  * `sponsored`
  * `stat: waiting PR merge`
  * `Triaged`
  * `subj: security`
* For issues matching the criteria the bot will add the label `stat: stale` and will add a comment to explain that the issue is now marked as stale.
  * If the issue receives a new comment or any other update after being marked as stale, it will automatically be removed from stale and have it's label removed.
* Issues with the label `stat: stale` that didn't receive new comments or updates after 7 days will be automatically closed.
* New comments after the issue is closed will not open the issue again \(not supported by the bot\). What we could do in this \(and is supported by the bot\) is to add a new comment saying what the issue owner can do, it could be something like "please test with most recent release and open a new issue if still happening".

## No response issues

Configuration options [here](https://github.com/RocketChat/Rocket.Chat/blob/develop/.github/workflows/stale.yml#L14-L25)

* Bot will search for issues with label `stat: need more info` without new comments or updates in the last 10 days
* For issues matching the criteria the bot will add the label `stat: no response` and will add a comment to explain that the issue is now marked as stale.
  * If the issue receives a new comment or any other update after being marked as stale, it will automatically be removed from stale and have it's label removed.
* Issues with the label `stat: no response` that didn't receive new comments or updates after 4 days will be automatically closed.

Since someone have interacted with the issue before the bot actually close the issue, if the owner replies after it is closed, it's responsibility to the user that add the label `stat: need more info` to evaluate the reply and open issue again.

