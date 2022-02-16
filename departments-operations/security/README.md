# Security

### Purpose

The purpose of the Security team is to define which risks the company is exposed to and mitigate them to a business acceptable level.

We need to make sure the security best practices are being applied and guarantee the security of our applications and find and respond to new vulnerabilities and incidents, ensuring the confidentiality, integrity, and availability of our services.

### Members and functions

* [Markus Kirsch](https://open.rocket.chat/direct/markus.kirsch): Security Lead
* [Bruno Cestari](https://open.rocket.chat/direct/bruno.cestari): Security Engineer
* [Igor Rincon](https://open.rocket.chat/direct/igor.rincon): Staff Security Engineer
* [Shelton Souto](https://open.rocket.chat/direct/shelton.souto): Security Compliance Analyst
* [Lucas Magno](https://open.rocket.chat/direct/lucas.magno): Junior Security Engineer

### Top OKRs, relevant for Security function, built by stakeholder input

1. Company Scale - Scale and build a strong (Security) Team, (while: Securing other teams´ growth)
2. Revenue Stream - Grow the business, driving ARR
3. Customer Centric - Productize internal services or processes, applying a CC-attitude
4. Enterprise Product - Establish industry leadership as B2B comms platform
5. Community Engagement - Increase dev relationships (incl. White hats)

## Main Tasks

Objective of the security team is to help everyone to keep Rocket.Chat and our customers secure. We can only achieve that when we all work together!

## Communication and Information

Discussion Channels

* [RC security channel](https://open.rocket.chat/group/rocketchat-security) - day-to-day conversation, invite on request
* [RC important](https://open.rocket.chat/group/important) - company-wide announcements
* RC-security-team - team-internal conversations, all team members are added during onboarding

Mailing lists

* [Security mailing list](mailto:security@rocket.chat) - all things related to security
* [Privacy mailing list](mailto:privacy@rocket.chat) - all things related to privacy@rocket.chat

Public

* [Security solutions](https://rocket.chat/security) - summary of security features of the product
* [Invitation to contribute to security](https://github.com/RocketChat/handbook/tree/de7159ac6bcdaf458b4c36e149f3db09e28670d3/operations/contributing/security/README.md) - Disclosure policy

## Policies

See [Security Policies](https://handbook.rocket.chat/company/security/security-policy)

## Playbooks

Playbooks help us to standardize certain processes around security and enable transparency on how we work. The following are the security playbooks.

## Security Alerts

Alerts for security events will be shown in the [#security-alerts](https://open.rocket.chat/group/security-alerts) group. The message format is

`SIEM ALERT -- <type of alert> - [<severity> or <score>] <message>. Check <link to the alert>`

The type of alert can be \*\*ANOMALY DETECTED \*\*or **STATIC RULE.**

#### **Static rule:**

When a pattern found in the logs being ingested to the SIEM matches one of the static rules pre-defined, this type of alert is fired. The severity can be \*\*Low, Medium, High, \*\*and \*\*Critical \*\*according to the impact.\
The current SLA to triage each alert, according to the severity, is the following

| Severity | SLA                |
| -------- | ------------------ |
| Critical | < 1 day            |
| High     | < 2 days           |
| Medium   | < 5 business days  |
| Low      | < 10 business days |

The instructions on how to perform the triage and investigate each alert can be found on the alert page (link in the message), inside our SIEM platform.

#### Anomaly detected:

We have several Machine Learning jobs running that search for anomalies in the data feeds being ingested. If an anomaly is detected it can trigger a Rule that will fire the alert (sometimes a single anomaly is not sufficient to trigger a rule).\
The anomaly can be evaluated by **Severity** or \*\*Score. \*\*Our current SLA to define if an anomaly is valid or not is the following

| Severity // Score          | SLA                |
| -------------------------- | ------------------ |
| Critical // Score >= 80    | < 2 days           |
| High // 50 <= Score < 80   | < 3 days           |
| Medium // 20 <= Score < 50 | < 5 business days  |
| Low // Score < 20          | < 10 business days |

## Incident Management

We follow the following incident management process:

1. Identification: A security incident is every event that could potentially impact the confidentiality, integrity or availability of our information assets. Examples include: improper access control, lost devices, service outage.
2. Logging: Once we have identified a potential security incident (e.g. by an alert, by an issue or a customer complaint), we log it in our task-tracking tool. Teams can decide to use different tools to track their incidents as long as the following steps are adhered to. We have the following options: Clickup, ZOHO, GitHub private repos. You should link to background information, e.g. a support ticket if you put the incident in Clickup.
3. Assignment: As a next step it must be assigned to the proper team and added to the project “Incidents & Vulnerabilities”. Also add the source of the incident as a tag (e.g. "support"), if possible. If you are unsure to whom to assign it to, assign it to the security lead. Make sure the assignee can access all relevant information. Common assignees are: Cloud team for all cloud-related incidents, support team for supporting Enterprise customers, security team for all other incidents (e.g. application vulnerabilities reported).
4. Categorization: As a next step, the incident is triaged, meaning: it gets evaluated for its priority: low, medium or high. This classification [link](https://www.first.org/resources/guides/csirt\_case\_classification.html) can be used as a guideline, S1 means "high", S3 means "low". Also set a proper due date for the incident to be resolved. We want to resolve incidents as quickly as possible, but to manage risks effectively, we focus on high priority incidents first. External criteria like customer specifications of priority or CVSS-levels are taken into consideration in the triage process, but can be modified where the context allows. Triaging may also result in the finding that no incident exists. If the incident cannot be resolved at this stage, it must be re-assigned and potentially escalated. Interested internal parties should be added as “followers”, so they get notified.
5. Investigation: Once in a stage where the right person is assigned to the incident, it gets investigated and search for possible solutions begins. Solutions should always target the root cause, but sometimes finding a quick hotfix and solving the deeper, complicated root cause afterwards may be the appropriate action. Other teams and management can be involved by the person responsible to investigate the incident. Keep a record of the investigation process.
6. Resolution: Resolution includes implementation, testing, and recovery as well as reaching out to other parties necessary, e.g. in case of a privacy incident to the authorities. We have a list of notification and who notifies them [here.](https://docs.google.com/spreadsheets/d/16NQhhRre\_WqRhQW6KKle12UbkH46bZMiw3\_2etg\_EK0/edit?usp=sharing) Before advancing, the affected user or customer must also be in agreement that the incident has been resolved.
7. Closing: Now the incident can be closed. The assignee should ensure that the initial classification details are accurate for future reference and reporting. If the incident was about a vulnerability, follow up with vulnerability disclosure (see below).
8.  Lessons Learned: Re-occuring incidents or those indicating a deeper, critical root cause, may be analyzed as part of a problem management process. To start problem management, create a task in Clickup

    or the tracking tool of your choice. For lessons learned, to get more detailed log information on the services we run, contact the cloud team for access.

Our SLA for incidents is as follows:

Time to first response: maximum 5 days, 1 day for critical incidents Time to triage: 10 days Time to resolution: High - 30 days, Medium - 60 days, Low - 90 days

## Bug Bounty / Hackerone

HackerOne is a service that allows us to interact with \*\*external \*\*parties (e.g. white hat hackers) to collect, manage and disclose vulnerabilities that are discovered by them. HackerOne is managed by the security team. All members of Rocket.Chat can request access if they want or should collaborate directly with the external party. Hackerone runs parallel to Clickup, which is used for \*\*internal \*\*collaboration.

## Vulnerability Reports & Disclosure

We receive vulnerability reports by various pathways, including the primary and preferred channels:

* HackerOne bug bounty program
* email to: `security@rocket.chat`

Secondary channels are:

* Reports or questions come in from customers through our Support Desk or other direct channel.
* Issues opened on the public issue trackers. The security team can not review all new issues and relies on everyone in the company to identify and label issues as `~security` and mention security team members issues.
* Issues reported by automated security scanning tools

For reported vulnerabilities:

* Open a task in Clickup on the `vulnerabilities` board as soon as a report is verified and reference the original report.
  * If the vulnerability was reported via a public issue on Github, remove it and refer the reporter to our email adress or hackerone. Still open a clickup task, in case the reporter does not respond.
* With the ClickUp task opened, copy the task ID (the final part of the URL: app.clickup.com/t/\<taskid>) and add it as a reference on the HackerOne report.
  * On the top part of the report, click on the Edit button in front of the References field
  * Select Create Issue, Manual Integration, and paste the Task ID in the Ref ID field.
* An initial determination is done by the security team as to severity and impact. Never dismiss a security report outright. Instead, follow up with the reporter, asking clarifying questions.
* Remember to prepare patches, blog posts, email templates, etc. on or in other non-public ways even if there is a reason to believe that the vulnerability is already out in the public domain (e.g. the original report was made in a public issue that was later made confidential).

### To prepare a Security Fix

Security Fixes are developed by the proper dev teams.

{% hint style="info" %}
\*\*For our development teams: \*\*A dedicated step-by-step guideline of the policy aspects relevant for you can be found [here](https://docs.google.com/document/d/1Lsc8INA6jDwp8sTDvLR7O7v7PLEt967ubv8BG4yyV14/edit?usp=sharing).
{% endhint %}

Fixes must be made available as per our [support policy](https://docs.rocket.chat/getting-support).

Security Fixes must not contain keywords such as "exploit", "hack", or similar and should be phrased technology-neutral. We want to explain what has changed, not describe exploit techniques.

Security fixes should be developed and have their testing done on **private forks** of the appropriate Rocket.Chat versions that will receive the fix. That means these PRs should not show up in the public repositories.

#### **CVE IDs**

We use CVE IDs to uniquely identify and publicly define vulnerabilities in our products. Since we publicly disclose all security vulnerabilities 30 days after a patch is released, CVE IDs must be obtained for each vulnerability to be fixed. The earlier obtained the better, and it should be requested either during or immediately after a fix is prepared.

The security team currently requests CVEs either through the HackerOne form (preferred) or directly through MITRE's [webform](https://cveform.mitre.org).

Keep in mind that some of our security releases contain _security related_ enhancements which may not have an associated [CWE](https://cwe.mitre.org) or vulnerability. These particular issues are not required to obtain a CVE since there's no associated vulnerability. CVE IDs obtained via the webform must be manually referenced in the HackerOne issue.

### When a Fix is Ready

When a patch has been developed, tested, approved, and a new release is being prepared, the dev team updates the clickup task with a reference to the PR(s).

Security then informs the researcher via HackerOne. Post a comment on the HackerOne issue to all parties informing them that a patch is ready and will be included with the next release. Provide release dates, if available, but try not to promise a release on a specific date if you are unsure. You may also share relevant code snippets with the researcher for him to comment on or verify the fix.

This is also a good time to ask if the researcher would like public credit in our release blog post and on our vulnerability acknowledgements page for the finding. We will link their name or alias to their HackerOne profile, Twitter handle, Facebook profile, company website, or URL of their choosing. Also ask if they would like the HackerOne report to be made public after the responsible disclosure period counting from the release. It is always preferable to publicly disclose reports unless the researcher has an objection.

For **critical** security issues, prepare a message for Rocket.Cat to be sent out on release day.

#### On Release Day <a href="#on-release-day" id="on-release-day"></a>

On the day of the security release several things happen in order:

* All security patches are pushed to the public repository (unless they are not already in there).
* The new Rocket.Chat version is published.
* For **critical** security fixes, an additional Rocket.Cat message is sent to all registered workspaces.
* The update process of the hosted workspaces is started by the infrastructure team
* The public is notified via the Rocket.Chat blog release post.
* The security updates page and the White Hat Hall of Fame are updated with appropriate credits to the reporting researchers.

Once all of these things have happened notify the HackerOne researcher that the vulnerability and patch are now public. The Clickup issue should be closed and the HackerOne report should be closed as "Resolved". Public disclosure should occur if the Hacker has requested it and the responsible disclosure period is started. Any sensitive information contained in the HackerOne report should be sanitized before disclosure.

### After release day

#### Swag for Reports <a href="#swag-for-reports" id="swag-for-reports"></a>

We award swag on a case by case basis. Details are in our responsible disclosure policy on HackerOne. When a report is closed, ask the reporter if they would like a swag code for free Rocket.Chat clothing or accessories. Swag codes are available by request from the operations team.

#### Responsible disclosure period ended

After the responsible disclosure period has ended, HackerOne will automatically release the report. Upon notification of the report release, update the CVE entry via the webform if it had been requested via the webform. Otherwise HackerOne will automatically update the CVE entry.

## Pentesting

### Internal

For pentesting, we use OWASP ZAP. OWASP ZAP is a Proxy server that allows for testing against common web application vulnerabilities. The relevant GDrive folder is [here](https://drive.google.com/drive/folders/1-3vERUvdNxrQsRM59RGoJN5bIIdT\_HYh?usp=sharing).

We use the following process:

* Install the most recent version of OWASP ZAP on a local machine. Get it from the website.
* Set up a test instance of Rocket.Chat with all features enabled with the most recent version
* Use persistent session in OWASP ZAP
* Analyze --> Scan Policy: Import the "basic scan" and "selected Features" policies from GDrive
* Perform an automated scan using traditional and ajax spider
* Remove non-rocket.chat domains (e.g. gstatic) from the scope
* Perform an automated scan using both scan policies
* Now perform a manual scan: log in using both a standard user and an admin account created in the test instance and explore. Focus exploration on newly added or recently changed features.
* Perform another automated scan using both scan policies
* End the scan activities
* Create a PDF export and an HTML exports of the alerts. The PDF export is easier to read and open, but does not contain all fields. This is a problem with ZAP.
* Export the current session of OWASP. Watch out, the file size can be several GB.
* Store both reports in GDrive with an indicator of the date the scans were performed.
* Go into Clickup and check all findings (except informative ones) against existing or past Clickup tasks. Search for the tag "pentest".
* Add new tasks for new findings. Re-open closed tasks for findings that keep re-occuring even though they were closed in Clickup already. Do not open a new task for closed tasks that have a comment regarding acceptance of the vulnerability.
* Provide an overview of the recent scan in the #security channel in RC.

### External

External pentesting is performed by an independent company. Each pentest is based on a specific engagement description, which outlines the test procedures and scope of the testing. External pentesting must produce a report with identified vulnerabilities in a shareable format to customers and other stakeholders. All vulnerabilities identified in the pentest must be mitigated before the report is shared with external stakeholders.

## Server investigation

When contacted about a potentially rogue server, i.e. a server used for criminal purposes, we follow our internal Standard Operating Procedure [here](https://docs.google.com/document/d/180rtyc50riGGZAzw8WP4r0EFYEP6FxMWcMbAK5I3V3k/edit?usp=sharing).

Law enforcement inquiries are subject to our [law enforcement guidelines](https://docs.rocket.chat/legal/guidelines-for-law-enforcement).

## Reporting

On a monthly basis, the security team provides a metric sheet to management and presents in the all-hands meeting. The sheet can be found in [GDrive](https://docs.google.com/spreadsheets/d/1J6VGHN5znUa07lG7r7wfqa4ewxb8\_AJd-Z7irQEfUXc/edit?usp=sharing). On a weekly basis, the security team reports the status of the current tasks and issues in the all-hands meeting as per an Clickup export and addition to the newsletter.

## Task & Project Management

Task and Project Management for Security occur in Clickup . Security uses three projects:

* Product Security: contains tasks that deal with the overall features and improvements of our products and services, e.g.: new features
* Security Management System: contains tasks that deal with our internal management processes of security, e.g.: policies, reoccurring audit tasks
* Incidents & Vulnerabilities: containts tasks that deal with the said, e.g.: hackerone reports, github issues pointing out a flaw

A task should have complete information available to answer all "W"-questions.

Tags are the most important instrument to classify tasks. A task can have multiple tags.

Security tasks that are worked on currently must be added to the current sprint. Sprint tasks should be estimated with Sprint points.

Tasks involving security are often added into other lists in other projects in Clickup. Other teams requesting resources of the security team should simply create a task in Clickup and assign it to one of the security members.

Tasks can be shared publicly via the sharing function, but only the content that is deemed adequate for the public.

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

## Awareness & Training Plan

Awareness means putting someone´s attention on security challenges. Training means giving people the right level of security skills for their job.

### Awareness

At Rocket.Chat, we can build on a tech-savvy team that has a broad knowledge of security topics and specializations. Therefore we focus on raising an awareness on new things that happen. Goal: Keep all members of Rocket.Chat appraised of new and current developments in the security landscape

We are not a large size organization, so putting up programs for formal awareness measurement are currently not efficient to establish. We rather focus on ad-hoc awareness topics that are in line with our organizational direction. We use the following measures:

* Every new member gets a personal introduction into our security policies as part of his onboarding
* Policy updates are posted in the #important channel
* New vulnerabilities & industry news are submitted in the respective channels, e.g. #important, #random or #dev, to allow for an ongoing discussions
* Annually, all members of the organization submit a policy acknowledgment, meaning: the have to read the policies
* Weekly, we add important news in the company newsletter

### Training

Goal: Provide all rocket.chat members with the security skills fitting to their job profile and career path

We are not a large size organization and often dont have strict organizational boundaries. Therefore members of different teams often need skills of another team, this goes for security as well. We are also a product centric company with a growing footprint providing services (e.g. cloud offering). We use the following measures:

* Every new member gets a personal introduction into our security policies as part of his onboarding
* All trainings provided should be recorded and available on request
* All trainings should accommodate for remote participation
* Trainings should focus on on-demand topics and have a workshop character rather than classroom training. Team Leads can contact the security team to provide a training for specific areas.
* We aim to provide one training half a year.
* Topics-wise, the main subject matter areas are: Secure Development Lifecycle, Securing Cloud Services, Web Application Security, SecDevOps
* Where there is internal expertise missing, we consider leveraging external specialists.
* Training outcomes (e.g. application of security principles in a PR) should be highlighted in our RC channels, especially #dev

###
