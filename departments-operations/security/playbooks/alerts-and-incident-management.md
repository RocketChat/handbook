# Alerts and Incident Management

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

##
