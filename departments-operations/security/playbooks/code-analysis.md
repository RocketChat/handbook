# Code Analysis

## Static Code Analysis

Static Code Analysis helps us find potential security vulnerabilities in the codebase. We use "LGTM" on our public GitHub repositories. For every pull request or ad-hoc as queried on other parts of the code, LGTM analyses the code and provides alerts with recommendations to fix. We use LGTM the following way:

* LGTM is enabled for all public repos
* To enable LGTM for a repo, you must be admin
* To access LGTM, use your GitHub account
* LGTM provides alerts when merging new PRs. The merge process is delayed by a couple of minutes, depending on the size of the code changed. Alerts should be reviewed before the PR is finally merged.
* To review an alert: Open it in LGTM, review the alert and recommendation, and decide on the mitigation measure. There are different types of alerts (error, warning and recommendation). Errors and warnings must be mitigated, recommendations are optional.
* To mitigate an alert: change the codebase as per the suggestion and re-submit the PR. Review that the alert does not show up anymore.
* To dismiss an alert, click the crossed-out eye icon and follow the instructions. As the dismissal involves adding a line in the code, we should limit dismissals of alerts and rather re-tune LGTM or fix the alert at its root.

Repo owners and the security team should use the query console to analyze other parts of their repositories on a regular basis, that are not affected by PRs. On a monthly basis, the security team will create a report with all open alerts and request a response to open alerts not tagged with a mitigation measure. Repo owners must submit a response to an alert in LGTM until the next monthly report.

##
