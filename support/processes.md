# Processes

## Overview

Tickets can be created by a support agent directly inside OTRS \(e.g., in cases such as phone calls or channel requests\) or reach it from external ways: web or email.

Customers can create tickets on the [Support Portal](https://support.rocket.chat), provided they have a registered user \(also known as a **named contact**. The number of named contacts available for a customer will depend on the support offering associated with the contractual service level\). When creating a ticket, the user must select a **Type**, the **Subject**, add a **Text** with the description. Optionally, the user can add an **Attachment** and select the **Priority** level of the issue \(if no priority is select, the ticket will be created as a **Low** priority issue\).

There are four possible ticket types:

1. `Feedback`
2. `Problem`
3. `Question`
4. `Request`

The default type is **Question**.

There are three priority levels:

1. `High` \(e.g., system down, main functions affected, large number of users unable to access, severe performance problems\)
2. `Medium` \(e.g., essential functions affected, significant impact to system usage, inconsistent performance\)
3. `Low` \(e.g., small impact to functions, low number of users affected, minor bugs, simple questions\)

Alternatively, emails sent to one of the email addresses below will reach OTRS as well:

* `cloud.support@rocket.chat`
* `omni@rocket.chat`
* `support@rocket.chat`

Tickets created by email **do not** have associated SLAs and are considered to be Community requests. Customers entitled to paid support **must** raise tickets on the Support Portal.

## Working with OTRS

An agent can see whether the ticket was created from a web request or email by checking the initial article created on the ticket. If the ticket was created through a web request, the initial article type will be **customer -- web request**. If the ticket was created through an email, the initial article type will be **customer - email-external**.

New tickets can be seen on the [Agent Dashboard](https://otrs.rocket.chat/otrs/index.pl?Action=AgentDashboard), under the **New Tickets** widget. In order to help maintain consistency throughout the support team, please ensure the following columns are visible on the **New Tickets** widget:

1. Created
2. Changed
3. Priority
4. TicketNumber
5. Title
6. CustomerName
7. Customer Company Name
8. Age

## Queues

There are three main queues, with Support having three sub-queues:

1. `Junk` \(for spam and invalid tickets\)
2. `Sales` \(for forwarding tickets to the sales team\)
3. `Support` \(the main support queue\)
   * `Community` \(for incoming email tickets\)
   * `Development` \(for forwarding tickets to the development team\)
   * `OmniChannel` \(for forwarding API requests to the OmniChannel team\)

All tickets with registered users and an SLA should be assigned to and worked in the main Support queue. If necessary during analysis, the tickets can be forwarded to the Development, OmniChannel or Sales queue. The agent should also assigned a new **Owner** to ensure the ticket is visible on the new responsible's dashboard. If no **Owner** is available or the agent is unsure, it should be set to **Admin OTRS**.

## Best practices

Solving technical problems can be hard, but it always help to keep a few best practices in mind:

1. Clearly define the problem. If the problem description provided by the user is unclear, try to clarify if first before jumping to conclusions. Try to write the problem in your own words and see if you clearly understand what are the issues involved.
2. Gather data! The more, the better. For example: how many users are affected? If only a few, which ones? What system areas are affected? Can the problem be reproduced consistently, or is it intermittent? When did the problem start? Was it working before? What changed recently?
3. If a problem is reproducible, try to do so on a test system. Sometimes a simple instance installed on a virtual machine is enough to troubleshoot most scenarios.
4. If you know what is the solution, test it first. Does it work correctly? Can it be improved? Are there any other workarounds?

## Follow-up

When following up on a closed ticket, ask the following questions:

1. Can a related documentation be improved or created?
2. Is the problem related to a known or new bug?
3. Is the problem related to a missing feature? Can a feature request be created?

