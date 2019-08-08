# Security

Security is very important for Rocket.Chat. Not only for our product but we ourselves have to stick to good security practices to keep our information secure. Also our customers and community expect that we keep their information secure.

## Contacts

- [Markus Kirsch](https://open.rocket.chat/direct/markus.kirsch), Lead Security Engineer & Researcher, Data Protection Officer
- [Rodrigo Nascimento](https://open.rocket.chat/direct/rodrigo.nascimento), CTO - in case of emergencies

## Main Tasks

Objective of the security team is to help everyone to keep Rocket.Chat and our customers secure. We can only achieve that when we all work together!

## Communication and Information

Discussion Channels

- [RC security channel](https://open.rocket.chat/group/rocketchat-security) - day-to-day conversation, invite on request
- [RC important](https://open.rocket.chat/group/important) - company-wide announcements

Mailing lists

- [Security mailing list](mailto:security@rocket.chat) - all things related to security
- [Privacy mailing list](mailto:privacy@rocket.chat) - all things related to privacy@rocket.chat
- [GDPR mailing list](mailto:gdpr@rocket.chat) - special mailing list for GDPR inquiries, no longer used

Public

- [Security solutions](https://rocket.chat/security) - summary of security features of the product
- [Invitation to contribute to security](https://rocket.chat/docs/contributing/security/) - Disclosure policy

## Policies

See [Security Policies](https://rocket.chat/handbook/operations/security-policy/)

## Playbooks

Playbooks help us to standardize certain processes around security and enable transparency on how we work.

## Incident Management

We follow the following incident management process:
1. Once we have identified a potential security incident (e.g. by an alert, by an issue or a customer complaint), we log it in our task-tracking tool (currently Asana). You should link to background information, e.g. a support ticket.
2. As a next step it must be assigned to the proper team and added to the project "Incidents & Vulnerabilities".  Also add the source of the incident as a tag (e.g. hackerone), if possible. If you are unsure to whom to assign it to, assign it to the security lead.
3. As a next step, the incident is triaged, meaning: it gets evaluated for its priority- low, medium or high. Also set a proper due date for the incident to be resolved. We want to resolve incidents as quickly as possible, but to manage our risks effectively, we focus on high priority incidents first. External criteria like customer specifications of priority or CVE-numbers are taken into consideration in the triage process, but can be modified where the context allows. Triaging may also result in the finding that no incident exists.
4. If the incident cannot be resolved at this stage, it must be re-assigned and potentially escalated. Interested internal parties should be added as "followers", so they get notified.
5. Once in a stage where the right person is assigned to the incident, it gets resolved. Resolution includes implementation, testing, as well as reaching out to other parties necessary, e.g. in case of a privacy incident to the authorities. Before advancing, the affected user or customer must also be in agreement that the incident has been resolved.
6. Now the incident can be closed. The assignee should ensure that the initial classification details are accurate for future reference and reporting. For vulnerability disclosure, see below.
7. Re-occuring incidents or those indicating a deeper, critical root cause, may be analyzed as part of a problem management process. To start problem management, create a task in Asana.

## Vulnerability Disclosure

We differentiate if the code affected is open-source or closed-source. When a disclosure happens, we should assume that attacking starts immediately.

### Closed Source Vulnerability

1. Create a vulnerability disclosure task in Asana, link it to the vulnerability task if needed
2. First phase - on the release day or upcoming days
- Update our hosting (cloud) client's servers
- Enterprise clients
3. Second phase - latest 14 days after the release
- Include a phrase in our release blog post (more details)
- Notify our support clients and partners. Create a message for the support team and link to the blog post.
4. Third phase - latest 30 days after the release
- In case the instance was not updated: Notify the administrator via banner system
- in case the app was not updated: notify the user via banner system
- Add the fix to our page of security fixes (to be added
5. Fourth phase - latest 90 days after the release
6. Inform/Allow the disclosure of the breach details by the external reporter
7. Give credit on HackerOne and on WhiteHat List on our Website
8. Send bounty/gift to Hacker
9. Close task

### Open Source Vulnerability

The same process as Closed Source Vulnerabilities, except:
1. phrase the PullRequests in a non-sensitive and technology-focussed way that explains what was changed
2. do not include keywords like "XSS", "hacker", "exploit"

## Hackerone

to be added

## Pentesting

to be added

## Reporting

to be added

## Task & Project Management

to be added
