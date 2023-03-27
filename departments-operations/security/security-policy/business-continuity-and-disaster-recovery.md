# Business Continuity and Disaster Recovery

## Purpose

The purpose of this plan is to ensure the continuity of Rocket.Chat operations in the event of a disaster or disruptive event. The plan outlines the steps to be taken to minimize the impact of the event on Rocket.Chat operations, ensure the safety of personnel, and enable the timely recovery of critical business functions.

## Scope

This plan applies to all Rocket.Chat operations and systems, including but not limited to, servers, databases, network infrastructure, and personnel.

## Disaster Recovery Team

The Disaster Recovery Team will be responsible for implementing this plan. The team will consist of key personnel from Security, Operations, Management, and the owners of the system affected. The team will be responsible for:

* Activating the plan in the event of a disaster or disruptive event.
* Assessing the impact of the event on Rocket.Chat operations and systems.
* Initiating recovery operations to restore critical business functions.
* Coordinating with external agencies and vendors as needed.

## Disaster prevention:

Disaster prevention is everyone´s responsibility. This means that every employee must actively prevent disasters from occurring and report potential risks of a disaster to management. Most controls to prevent disasters are taken on a system level by the respective system administrator and will be performed against a system specific control catalog (e.g. backup configuration). Since many of our systems rely on third party providers, following our policies for third parties is critical. Disaster Prevention controls include:

* **Preventing vendor lock-ins**
* **Trusted partners**\
  ****We should always choose partners that provide an adequate level of security (e.g. SaaS providers with high reputation)
* **Storing data offsite and off-client**
* **Backup and Recovery**\
  Regular backups will be taken of all critical data and systems. The backups will be stored offsite in a secure location. The recovery process will be tested regularly to ensure its effectiveness.
* **Redundancy**\
  Redundant systems and infrastructure will be implemented to ensure continuity of operations in the event of a system failure.
* **High Availability**\
  Critical systems will be designed for high availability to minimize downtime.
* **Cloud Services**\
  Cloud services will be used to provide redundancy and disaster recovery capabilities.
* **Emergency Communications**\
  ****Emergency communication protocols will be established to enable communication with employees, customers, and vendors in the event of a disaster.

## Business Impact Analysis

A Business Impact Analysis will be conducted to identify critical business functions, dependencies, and recovery time objectives (RTO) and recovery point objectives (RPO) for each function.

Rocket.Chat maintains a list of all systems, including a rating of their criticality on our business processes. This criticality is mostly based on tolerable downtime. The criticality ratings are defined in specific DR documents. Criticality ratings to a system may be adjusted on a case-by-case basis where the circumstances justify the adjustment. Rocket.Chat also runs a risk management program to identify and manage risks, including risks of a disaster occurency.

You can find the asset list [here](https://docs.google.com/spreadsheets/d/1Fmei\_-OGpXvUwsHzd8K87ke-CgCLOGpzerrPEQo9e0Q).

## Risk Assessment

A Risk Assessment will be conducted to identify potential hazards and threats to Rocket.Chat operations and systems. The assessment will include a review of physical security, environmental risks, and cyber threats.



## Disaster Recovery:

In case of a disaster, we will form an incident response team consisting of the respective members of our management team, security and other individuals, depending on the type of disaster. The members of the team will communicate using Rocket.Chat - or where this is not possible - email or phone. We will inform all affected employees via the Rocket.Chat channel "important" or others where relevant. In case the disaster has taken down the rocket.chat servers, we will notify via email or - where warranted - contact you via the phone numbers you have given us during on-boarding. The incident response team will also ensure that affected customers are informed via the proper methods.

Refer to the the [Incident Response Plan](https://docs.google.com/document/d/17yZJ9oP3OJl3oWYTSNKNeXy54OEr7dn3ldpDKi52Ksc/edit#heading=h.wytzxqmvrwlq)

## Testing:

Annually, we test our business continuity and disaster recovery capabilities. The scope and method of testing are related to our risk management process and decided by management. The results of these tests are shared in the company and may lead to updates to this policy.
