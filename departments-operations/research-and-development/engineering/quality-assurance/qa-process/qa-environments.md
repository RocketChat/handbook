# QA environments

## I- Objective: <a href="#docs-internal-guid-11f18f18-7fff-cefb-fe31-612e52d63854" id="docs-internal-guid-11f18f18-7fff-cefb-fe31-612e52d63854"></a>

The purpose of this document is to share general information on QA environments available.

## II- Our environments:

**A- Individual pull request (PR) QA environment**: Environment built on cloud for each PR analysis. We can create an environment for every feature we are working on, thereby giving us a more flexible, isolated development environment, and allowing us to test our code early in the development process.This environment is dismounted after test completion.

In order to create an individual PR QA environment, we need to run a command “qa-deploy PR number” in the qa-environment channel on server (open.rocket.chat). Once requested for a QA environment, confirm the PR and finally check status. A link to access the QA environment is displayed which can be accessed using any browser.

**B- Unstable environment**: Environment containing develop branch and used for general verifications. It is updated automatically every time a PR is merged into develop.

**C- Candidate environment**: Environment containing all PRs from release candidate that are expected to be deployed on monthly release. It is updated every time there is a new release candidate for the team to perform the various analyzes and tests.

**D- Stable environment**: Environment containing master branch with PRs from previous release and patch release. Only used if a special testing event is needed. Environment is updated every release.

PS: Please note all environments are expected to have Rocket.Chat Enterprise License enabled.
