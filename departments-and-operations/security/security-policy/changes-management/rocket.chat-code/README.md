# Rocket.Chat code

### Purpose

The purpose of this document is to outline the process for managing technical changes to the rocket.chat software versions (major release, minor release, security release or patch release), & Infrastructure as a code,  in order to ensure that changes are made in a controlled and consistent manner and that any risks associated with changes are identified and mitigated.



### Scope

This change management plan applies to all changes to the (major release, minor release or patch release), including changes to software, documentation, and procedures.

### Procedure Review:

This procedure should be reviewed at least annually.

Last review on Feb/28/2023

### Acronyms & Definitions:

PR = Github Pull Request

Develop Branch = Branch used for the development environment containing all approved PRs. All PRs merged into the development branch are applied automatically into our develop environment for applicable testing.&#x20;

Open Server = Rocket.Chat environment available for internal users and community. Also our beta tests environment. &#x20;

Change Management Team: The change management team is responsible for overseeing the change management process, and includes the following members:

* Change Manager (CM): Rodrigo Nascimento (CTO); Is responsible for assessing the impact of a change, to identify any risks, and make a recommendation for approval or rejection of a release.&#x20;
* Delegated Change Manager (DCM): Anyone in the organization that is listed on the letter of delegation from the Change Manager; Is a delegation from Change Manager and has the same responsibilities. Letter available at: [https://handbook.rocket.chat/departments-operations/security/security-policy/changes-management/rocket.chat-code/delegation-letter](https://handbook.rocket.chat/departments-operations/security/security-policy/changes-management/rocket.chat-code/delegation-letter)
* Code Owners (CO): Members from github teams as assigned on [https://github.com/orgs/RocketChat/teams](https://github.com/orgs/RocketChat/teams); Responsible for checking modifications to code that impact a given github repository and its code.
* Engineer from internal squads: Any engineer from rocket.chat team that is listed on [https://theorg.com/org/rocket-chat/org-chart](https://theorg.com/org/rocket-chat/org-chart) .
* QA Squad: Any member of internal squads with a QA role.&#x20;

### Change Proposal and Approval Process:

1. All proposed changes must be submitted as a GitHub Pull Request (PR) and follow its General Instructions and Handling procedure ([https://handbook.rocket.chat/departments-operations/research-and-development/engineering/development/pr-general-instructions-and-handling](https://handbook.rocket.chat/departments-operations/research-and-development/engineering/development/pr-general-instructions-and-handling))
2. A peer review is required for all the submitted PR following the documented Review Guidelines([https://handbook.rocket.chat/departments-operations/research-and-development/engineering/development/review-guidelines](https://handbook.rocket.chat/departments-operations/research-and-development/engineering/development/review-guidelines)). PR approval or comments will be placed on github.&#x20;
3. Code Owners review will be required in case the change impacts multiple areas of the code and will also be performed based on our Review Guidelines ([https://handbook.rocket.chat/departments-operations/research-and-development/engineering/development/review-guidelines](https://handbook.rocket.chat/departments-operations/research-and-development/engineering/development/review-guidelines)). PR approval or comments will be placed on github.
4. After Peer Review and/or Code Owners review, an approved PR can be merged into the development branch.
5. All changes of a given period merged into the development branch, will be bundled into a release-related PR for Major, Minor, Security or Patch Release Pull Request on Github by any engineer from internal squads. PS: Classification for different releases is available at: [https://handbook.rocket.chat/departments-operations/research-and-development/release-cycle](https://handbook.rocket.chat/departments-operations/research-and-development/release-cycle)&#x20;
6. Change Manager or Delegated Change Manager approval is required on any given release-related PR.&#x20;
7. After approval a release-related PR will be merged into the Master branch and can become available for our customers on self-hosted and SaaS products.&#x20;

### Change Implementation and Testing:

1. All changes must be tested before they are implemented, in order to ensure that they do not have any unintended consequences.
2. All PR will go through our Github CI automated tests and verifications.&#x20;
3. PR will be tagged with QA Tested in case they are verified & approved by the internal QA squad or QA Skipped in case they are verified & approved by Engineer from internal squads and don't need QA formal validation.&#x20;

### Change Communication and Documentation:

1. All approved changes must be documented in the change log on github, and can be viewed at [https://github.com/RocketChat/Rocket.Chat/commits/develop](https://github.com/RocketChat/Rocket.Chat/commits/develop)
2. Change records must be retained for a minimum of 2 years.
3. All applicable stakeholders must be informed of the changes approved and bundled on a release, with details being available at [https://github.com/RocketChat/Rocket.Chat/releases](https://github.com/RocketChat/Rocket.Chat/releases) and a message being posted at open.rocket.chat #rocketchat-releases.&#x20;

### Change Rollback and Reversal:

1. In case a rollback is needed due to problems or issues, a rollback plan must be developed by engineers from the internal squad and tested.
2. The rollback plan must be reviewed and approved by the Change Manager or Delegated Change Manager before the change is implemented.
3. If a change needs to be rolled back, the rollback plan must be implemented immediately, and all the affected stakeholders must be informed of the rollback and its impact at open.rocket.chat on #important channel.&#x20;

\
