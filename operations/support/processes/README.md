# Support Processes

## Overview

Rocket.Chat main support platform is [Zoho Desk](https://desk.rocket.chat). Tickets can be created by a support agent directly inside Zoho Desk \(in case of internal request\) or by a customer or community user from external ways: Zoho Desk Support Portal, Rocket.Chat main website form, e-mail, social media \(Twitter, Facebook\) or offline livechat message.

Alternatively, emails sent to one of the email addresses below will reach Zoho Desk as well:

* `cloud@rocket.chat`
* `omni@rocket.chat`
* `support@rocket.chat`
* `suporte@rocket.chat`
* `security@rocket.chat`
* `gdpr@rocket.chat`

## Working with Zoho Desk

An agent can see whether the ticket was created from a web request or email by checking the **History** tab of the ticket, and from the icon preceding the ticket title. If the ticket was created through a web request, the Channel field in the History tab will show **Web**. If the ticket was created through email, the Channel will say **Email**. Facebook and Twitter messages will be displayed accordingly.

All tickets can be seen on the [Agent Dashboard](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/q/duedate), on the **Tickets** page.

### Ticket Priorities

There are three priority levels:

1. `High` \(e.g., system down, main functions affected, large number of users unable to access, severe performance problems\)
2. `Medium` \(e.g., essential functions affected, significant impact to system usage, inconsistent performance\)
3. `Low` \(e.g., small impact to functions, low number of users affected, minor bugs, simple questions\)

Tickets created by email are automatically assigned as "Medium" priority and will have the associated SLAs according to the account information. Customers entitled to paid support **are recommended** to raise tickets on the Support Portal.

The SLAs are defined taking into account the priority, the paid plan/product and the customer account status.

Available plans/products and their respective SLAs-&gt; please go to [Support SLA page](https://rocket.chat/handbook/support/slas/)

**The account information from all customer base are in synch with Zoho CRM, and we base our SLA calculation taking into account the information stored on Zoho CRM. Everything is automated and retrieved in the ticket creation.**

### Zoho Desk Departments

Currently Zoho Desk is divided in three different departments:

* **Paid Support -&gt;** All tickets with contractual SLAs \(paid customers\)
* **Community -&gt;** Tickets related to the community users \(no deals/contracts or active trials\)
* **Trials -&gt;** Tickets related to the following customers/users
  * Active SaaS trial customers
  * Potential customers
  * Potential - VIP customers

Currently all agents are assigned to all departments. The ticket routing between the departments is done automatically via scripting.

## Hotline Support

24x7 phone hotline support is offered within Rocket.Chat paid support plans.

Phone calls are handled in [Freshcaller tool](https://rocketphone.freshcaller.com/). Each call results in a ticket that is created in Zoho Desk and sent to the customer as a short follow-up. If the issue addressed via hotline needs to be escalated to the developers or sales team, the support staff assigns the ticket accordingly and notifies the responsible team member in [Open Server](https://open.rocket.chat). All support agents should be connected to Freshcaller during their shift.

## Replying mobile apps reviews

Mobile applications reviews are routed from the Google Play Developer console and App Store developer accounts to [AppFollow](https://watch.appfollow.io/apps/rocket-chat/). The responses to all reviews can be posted either through the developer accounts on each app store, or in the AppFollow workspace. Reviews for beta versions are answered by the in-house team, while other reviews are handled by the remote support team. Critical or frequent issues occuring in the reviews to mobile apps are addressed to the mobile team in [Open Server](https://open.rocket.chat).

## Best practices

Solving technical problems can be hard, but it always helps to keep a few best practices in mind:

1. Clearly define the problem. If the problem description provided by the user is unclear, try to clarify if first before jumping to conclusions. Try to write the problem in your own words and see if you clearly understand what are the issues involved.
2. Gather data! The more, the better. For example: how many users are affected? If only a few, which ones? What system areas are affected? Can the problem be reproduced consistently, or is it intermittent? When did the problem start? Was it working before? What changed recently? If the issue is client-specific, collect the info on the client as well \(version of the browser or desktop app, mobile app, opeartional system etc\)
3. If a problem is reproducible, try to do so on a test system. Sometimes a simple instance installed on a virtual machine is enough to troubleshoot most scenarios.
4. If you know what is the solution, test it first. Does it work correctly? Can it be improved? Are there any other workarounds?

## Follow-up

When following up on a closed ticket, ask the following questions:

1. Can a related documentation be improved or created?
2. Is the problem related to a known or new bug?
3. Is the problem related to a missing feature? Can a feature request be created?

## Daily work systems/tools

* [Zoho Desk](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases) -&gt; Ticket system
* [Zoho CRM](https://crm.zoho.com/crm/org660081933/tab/Home/begin) -&gt; Customer Relationship Management system
* [ClickUp](https://app.clickup.com/4207297/v/l/li/31350041?pr=3057758) -&gt; Project/task management tool
* [Omnichannel KeyGen](https://rocketchat-omnichannel-mgmt.frd.mn/) -&gt; Omnichannel/Facebook token generator
* [Rocket.Chat GitHub Repositories](https://github.com/RocketChat)
* [Fleetcommand / Cloud Admin](https://cloud.rocket.chat/admin)

