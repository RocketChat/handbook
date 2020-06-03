# Security

Security is very important for Rocket.Chat. Not only for our product but we ourselves have to stick to good security practices to keep our information secure. Also our customers and community expect that we keep their information secure.

## Contacts

* [Markus Kirsch](https://open.rocket.chat/direct/markus.kirsch), Lead Security Engineer & Researcher, Data Protection Officer
* [Rodrigo Nascimento](https://open.rocket.chat/direct/rodrigo.nascimento), CTO - in case of emergencies

## Main Tasks

Objective of the security team is to help everyone to keep Rocket.Chat and our customers secure. We can only achieve that when we all work together!

## Communication and Information

Discussion Channels

* [RC security channel](https://open.rocket.chat/group/rocketchat-security) - day-to-day conversation, invite on request
* [RC important](https://open.rocket.chat/group/important) - company-wide announcements

Mailing lists

* [Security mailing list](mailto:security@rocket.chat) - all things related to security
* [Privacy mailing list](mailto:privacy@rocket.chat) - all things related to privacy@rocket.chat
* [GDPR mailing list](mailto:gdpr@rocket.chat) - special mailing list for GDPR inquiries, no longer used

Public

* [Security solutions](https://rocket.chat/security) - summary of security features of the product
* [Invitation to contribute to security](https://rocket.chat/docs/contributing/security/) - Disclosure policy

## Policies

See [Security Policies](https://rocket.chat/handbook/operations/security-policy/)

## Playbooks

Playbooks help us to standardize certain processes around security and enable transparency on how we work. The following are the security playbooks.

## Incident Management

We follow the following incident management process:

1. Identification: A security incident is every event that could potentially impact the confidentiality, integrity or availability of our information assets. Examples include: improper access control, lost devices, service outage.
2. Logging: Once we have identified a potential security incident \(e.g. by an alert, by an issue or a customer complaint\), we log it in our task-tracking tool. Teams can decide to use different tools to track their incidents as long as the following steps are adhered to. We have the following options: Asana, ZOHO, GitHub private repos. You should link to background information, e.g. a support ticket if you put the incident in Asana.
3. Assignment: As a next step it must be assigned to the proper team and added to the project “Incidents & Vulnerabilities”. Also add the source of the incident as a tag \(e.g. "support"\), if possible. If you are unsure to whom to assign it to, assign it to the security lead. Make sure the assignee can access all relevant information. Common assignees are: Cloud team for all cloud-related incidents, support team for supporting Enterprise customers, security team for all other incidents \(e.g. application vulnerabilities reported\).
4. Categorization: As a next step, the incident is triaged, meaning: it gets evaluated for its priority: low, medium or high. This classification [link](https://www.first.org/resources/guides/csirt_case_classification.html) can be used as a guideline, S1 means "high", S3 means "low". Also set a proper due date for the incident to be resolved. We want to resolve incidents as quickly as possible, but to manage risks effectively, we focus on high priority incidents first. External criteria like customer specifications of priority or CVSS-levels are taken into consideration in the triage process, but can be modified where the context allows. Triaging may also result in the finding that no incident exists. If the incident cannot be resolved at this stage, it must be re-assigned and potentially escalated. Interested internal parties should be added as “followers”, so they get notified.
5. Investigation: Once in a stage where the right person is assigned to the incident, it gets investigated and search for possible solutions begins. Solutions should always target the root cause, but sometimes finding a quick hotfix and solving the deeper, complicated root cause afterwards may be the appropriate action. Other teams and management can be involved by the person responsible to investigate the incident. Keep a record of the investigation process.
6. Resolution: Resolution includes implementation, testing, and recovery as well as reaching out to other parties necessary, e.g. in case of a privacy incident to the authorities. We have a list of notification and who notifies them [here.](https://docs.google.com/spreadsheets/d/16NQhhRre_WqRhQW6KKle12UbkH46bZMiw3_2etg_EK0/edit?usp=sharing) Before advancing, the affected user or customer must also be in agreement that the incident has been resolved.
7. Closing: Now the incident can be closed. The assignee should ensure that the initial classification details are accurate for future reference and reporting. If the incident was about a vulnerability, follow up with vulnerability disclosure \(see below\).
8. Lessons Learned: Re-occuring incidents or those indicating a deeper, critical root cause, may be analyzed as part of a problem management process. To start problem management, create a task in Asana or the tracking tool of your choice. For lessons learned, to get more detailed log information on the services we run, contact the cloud team for access.

Our SLA for incidents is as follows:

Time to first response: maximum 5 days, 1 day for critical incidents Time to triage: 10 days Time to resolution: High - 30 days, Medium - 60 days, Low - 90 days

## BugBounty / Hackerone

HackerOne is a service that allows us to interact with external parties \(e.g. white hat hackers\) to collect, manage and disclose vulnerabilities that are discovered by them. HackerOne is managed by the security team. All members of Rocket.Chat can request access if they want or should collaborate directly with the 3rd party. HackerOne allows to export the current issues, but there is no direct integration between Asana and HackerOne. Currently the amount of reports does not warrant that we setup a full automated sync between Asana and HackerOne, but this may change.

The process is as follows:

* Once a new report is submitted, the security team analyzes it.
* If the report is not valid, it is closed directly with a message to the
* If a report is valid, it is triaged and a message sent to the 3rd party acknowledging the validity of the report. The triage default values of HackerOne are generally acceptable, but you can modify them if they are not fitting to the case.
* Then create an Asana task to have all the internal discussions and roadmap planning done there. Give the task the tag "hackerone" and set the priority according to the criticality. Assign it to the right internal team and set the due date according to our incident metrics. The report can also be triaged directly into GitHub. HackerOne only supports integration into a single GitHub repository per program, so we chose the Enterprise repository of Rocket.Chat because it is confidential. So if you want you can duplicate the issue into GitHub, but it is not recommended. Better to use Asana only.
* For external discussions with the 3rd party, use HackerOne, but try to mirror all discussions in Asana \(e.g. copy and paste\).
* Once the vulnerability has been fixed, decide if you want to verify with the external party to double check or continue to close the issue right away.
* To close the issue, close both the task in Asana and in HackerOne. Ask the external party if they want the vulnerability disclosed. If yes, continue with the playbook for Vulnerability Disclosure.

On a quarterly basis, the security team reviews the scope and the settings of the hackerone program. Our incident metrics are mirrored in HackerOne.

## Vulnerability Disclosure

We differentiate if the code affected is open-source or closed-source. When a disclosure happens, we should assume that attacking starts immediately.

### Closed Source Vulnerability

Start this workflow once a vulnerability has been fixed and merged.

1. Create a vulnerability disclosure task in Asana, link it to the vulnerability task if needed.
2. First phase - on the release day or upcoming days
3. Update our hosting \(cloud\) client's servers
4. Enterprise clients
5. Second phase - latest 14 days after the release
6. Include a phrase in our release blog post \(more details\)
7. Notify our support clients and partners. Create a message for the support team and link to the blog post.
8. Third phase - latest 30 days after the release
9. In case the instance was not updated: Notify the administrator via banner system
10. In case the app was not updated: notify the user via banner system
11. Add the fix to our page of security fixes \(to be added\)
12. Fourth phase - latest 90 days after the release
13. Inform/Allow the disclosure of the breach details by the external reporter. We currently do not use CVE-numbers, but maybe the reporter does.
14. Give credit on HackerOne and on WhiteHat List on our Website
15. Send bounty/gift to Hacker. The list with the codes is stored in GDrive. Our policy is to award a $50 gift certificate for every new hacker that reported a new vulnerability to us that has at least the criticality of medium. Exceptions to this policy can be made by the security team where warranted \(e.g. award a second certificate for a hacker that demonstrated exceptional committment\).
16. Close task in Asana \(and HackerOne if applicable\)

### Open Source Vulnerability

The same process as Closed Source Vulnerabilities, except:

1. Phrase the PullRequests in a non-sensitive and technology-focussed way that explains what was changed
2. Do not include keywords like "XSS", "hacker", "exploit" in the PR
3. The merged PR will show in the release notes in GitHub \(this happens automatically\)

## Pentesting \(internal\)

For pentesting, we use OWASP ZAP. OWASP ZAP is a Proxy server that allows for testing against common web application vulnerabilities. The relevant GDrive folder is [here](https://drive.google.com/drive/folders/1-3vERUvdNxrQsRM59RGoJN5bIIdT_HYh?usp=sharing).

We use the following process:

* Install the most recent version of OWASP ZAP on a local machine. Get it from the website.
* Set up a test instance of Rocket.Chat with all features enabled with the most recent version
* Use persistent session in OWASP ZAP
* Analyze --&gt; Scan Policy: Import the "basic scan" and "selected Features" policies from GDrive
* Perform an automated scan using traditional and ajax spider
* Remove non-rocket.chat domains \(e.g. gstatic\) from the scope
* Perform an automated scan using both scan policies
* Now perform a manual scan: log in using both a standard user and an admin account created in the test instance and explore. Focus exploration on newly added or recently changed features.
* Perform another automated scan using both scan policies
* End the scan activities
* Create a PDF export and an HTML exports of the alerts. The PDF export is easier to read and open, but does not contain all fields. This is a problem with ZAP.
* Export the current session of OWASP. Watch out, the file size can be several GB.
* Store both reports in GDrive with an indicator of the date the scans were performed.
* Go into Asana and check all findings \(except informative ones\) against existing or past Asana tasks. Search for the tag "pentest".
* Add new tasks for new findings. Re-open closed tasks for findings that keep re-occuring even though they were closed in Asana already. Do not open a new task for closed tasks that have a comment regarding acceptance of the vulnerability.
* Provide an overview of the recent scan in the \#security channel in RC.

## Reporting

On a monthly basis, the security team provides a metric sheet to management and presents in the all-hands meeting. The sheet can be found in [GDrive](https://docs.google.com/spreadsheets/d/1J6VGHN5znUa07lG7r7wfqa4ewxb8_AJd-Z7irQEfUXc/edit?usp=sharing). On a weekly basis, the security team reports the status of the current tasks and issues in the all-hands meeting as per an Asana export and addition to the newsletter.

## Task & Project Management

Task and Project Management for Security occur in Asana. Security uses three projects:

* Product Security: contains tasks that deal with the overall features and improvements of our products and services, e.g.: new features
* Security Management System: contains tasks that deal with our internal management processes of security, e.g.: policies, reoccurring audit tasks
* Incidents & Vulnerabilities: containts tasks that deal with the said, e.g.: hackerone reports, github issues pointing out a flaw

Important security milestones are mirrored in the "Milestones" project of the company. Proper Tags should be added, especially to vulnerabilities. We mostly use the tags: hackerone, github, pentest Tasks involving security are often cross-referenced in other projects in Asana. Other teams requesting resources of the security team can simply create a task in Asana and assign it to one of the security members.

## Static Code Analysis

Static Code Analysis helps us find potential security vulnerabilities in the codebase. We use "LGTM" on our public GitHub repositories. We have decided not to purchase a license for our closed repos. For every pull request or ad-hoc as queried on other parts of the code, LGTM analyses the code and provides alerts with recommendations to fix. We use LGTM the following way:

* LGTM is enabled for all public repos
* To enable LGTM for a repo, you must be admin
* To access LGTM, use your GitHub account
* LGTM provides alerts when merging new PRs. The merge process is delayed by a couple of minutes, depending on the size of the code changed. Alerts should be reviewed before the PR is finally merged.
* To review an alert: Open it in LGTM, review the alert and recommendation, and decide on the mitigation measure. There are different types of alerts \(error, warning and recommendation\). Errors and warnings must be mitigated, recommendations are optional.
* To mitigate an alert: change the codebase as per the suggestion and re-submit the PR. Review that the alert does not show up anymore.
* To dismiss an alert, click the crossed-out eye icon and follow the instructions. As the dismissal involves adding a line in the code, we should limit dismissals of alerts and rather re-tune LGTM or fix the alert at its root.

Repo owners and the security team should use the query console to analyze other parts of their repositories on a regular basis, that are not affected by PRs. On a monthly basis, the security team will create a report with all open alerts and request a response to open alerts not tagged with a mitigation measure. Repo owners must submit a response to an alert in LGTM until the next monthly report.

## Awareness & Training Plan

Awareness means putting someone´s attention on security challenges. Training means giving people the right level of security skills for their job.

### Awareness

At Rocket.Chat, we can build on a tech-savvy team that has a broad knowledge of security topics and specializations. Therefore we focus on raising an awareness on new things that happen. Goal: Keep all members of Rocket.Chat appraised of new and current developments in the security landscape

We are not a large size organization, so putting up programs for formal awareness measurement are currently not efficient to establish. We rather focus on ad-hoc awareness topics that are in line with our organizational direction. We use the following measures:

* Every new member gets a personal introduction into our security policies as part of his onboarding
* Policy updates are posted in the \#important channel
* New vulnerabilities & industry news are submitted in the respective channels, e.g. \#important, \#random or \#dev, to allow for an ongoing discussions
* Annually, all members of the organization submit a policy acknowledgment, meaning: the have to read the policies
* Weekly, we add important news in the company newsletter

### Training

Goal: Provide all rocket.chat members with the security skills fitting to their job profile and career path

We are not a large size organization and often dont have strict organizational boundaries. Therefore members of different teams often need skills of another team, this goes for security as well. We are also a product centric company with a growing footprint providing services \(e.g. cloud offering\). We use the following measures:

* Every new member gets a personal introduction into our security policies as part of his onboarding
* All trainings provided are recorded and available on request
* All trainings should accomodate for remote participation
* Trainings should focus on on-demand topics and have a workshop character rather than classroom training. Team Leads can contact the security team to provide a training for specific areas.
* We aim to provide one training half a year.
* Topics-wise, the main subject matter areas are: Secure Development Lifecycle, Securing Cloud Services, Web Application Security, SecDevOps
* Where there is internal expertise missing, we consider leveraging external specialists.
* Training outcomes \(e.g. application of security principles in a PR\) should be highlighted in our RC channels, especially \#dev

