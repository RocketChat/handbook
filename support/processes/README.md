# Processes

## Overview

Tickets can be created by a support agent directly inside Zoho Desk (after every phone call request) or by a customer or community user from external ways: web form, email, social media (Twitter, Facebook) or offline livechat message.

Before we fully migrate to Zoho Desk Helpdesk solutions, customers can create tickets on the [Support Portal](https://support.rocket.chat), provided they have a registered user (also known as a **named contact**. The number of named contacts available for a customer will depend on the support offering associated with the contractual service level). When creating a ticket, the user must select a **Type**, the **Subject**, add a **Text** with the description. Optionally, the user can add an **Attachment** and select the **Priority** level of the issue (if no priority is select, the ticket will be created as a **Low** priority issue). The ticket will be mirrored and handled in Zoho Desk platform with the same fields and values.

There are four possible ticket types:

1. `Question`
2. `Problem`
3. `Feature`
4. `Other`

The default type is **Question**.

There are three priority levels:

1. `High` (e.g., system down, main functions affected, large number of users unable to access, severe performance problems)
2. `Medium` (e.g., essential functions affected, significant impact to system usage, inconsistent performance)
3. `Low` (e.g., small impact to functions, low number of users affected, minor bugs, simple questions)

Alternatively, emails sent to one of the email addresses below will reach Zoho Desk as well:

- `cloud@rocket.chat`
- `omni@rocket.chat`
- `support@rocket.chat`
- `security@rocket.chat`
- `gdpr@rocket.chat`

Tickets created by email **do not** have associated SLAs and are considered to be Community requests. Customers entitled to paid support **must** raise tickets on the Support Portal.

## Working with Zoho Desk

An agent can see whether the ticket was created from a web request or email by checking the **History** tab of the ticket, and from the icon preceding the ticket title. If the ticket was created through a web request, the Channel field in the History tab will show **Web**. If the ticket was created through email, the Channel will say **Email**. Facebook and Twitter messages will be displayed accordingly.

All tickets can be seen on the [Agent Dashboard](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/q/duedate), on the **Tickets** page.

## Assigning

There are typical requests that should be assigned to specific departments or employees:

1. `Omni channel API keys requests` are autoassigned to [Jonas Friedmann](https://open.rocket.chat/direct/frdmn)
2. `Sales requests` are manually assigned to Sales team
3. `Security and GDPR requests` are automatically assigned to the Security team.
4. `Support requests` are automatically assigned to Rocket.Chat Support team.

If necessary during analysis, the tickets can be forwarded to a team member who is responsible for the area that the tickets subject refers to.  The agent should assign a new **Owner** to ensure the ticket is visible on the new responsible's dashboard. If no **Owner** is available or the agent is unsure, it should be set to **Rocket.Chat team**.

## Hotline Support

Phone support is offered within Silver, Pro, Gold and Enterprise plans.
Phone calls are handled in [Freshdesk system](https://wow24-7.freshcaller.com). Each call results in a ticket that is created in Zoho Desk and sent to the customer as a short follow-up. If the issue addressed via hotline needs to be escalated to the developers or sales team, the support staff assigns the ticket accordingly and notifies the responsible team member in [Open Server](https://open.rocket.chat).

## Replying mobile apps reviews

Mobile applications reviews are routed from the Google Play Developer console and App Store developer accounts to [AppFollow](https://watch.appfollow.io/apps/rocket-chat/). The responses to all reviews can be posted either through the developer accounts on each app store, or in the AppFollow workspace. Reviews for beta versions are answered by the in-house team, while other reviews are handled by the remote support team. Critical or frequent issues occuring in the reviews to mobile apps are addressed to the mobile team in [Open Server](https://open.rocket.chat).

## Best practices

Solving technical problems can be hard, but it always helps to keep a few best practices in mind:

1. Clearly define the problem. If the problem description provided by the user is unclear, try to clarify if first before jumping to conclusions. Try to write the problem in your own words and see if you clearly understand what are the issues involved.
2. Gather data! The more, the better. For example: how many users are affected? If only a few, which ones? What system areas are affected? Can the problem be reproduced consistently, or is it intermittent? When did the problem start? Was it working before? What changed recently? If the issue is client-specific, collect the info on the client as well (version of the browser or desktop app, mobile app, opeartional system etc)
3. If a problem is reproducible, try to do so on a test system. Sometimes a simple instance installed on a virtual machine is enough to troubleshoot most scenarios.
4. If you know what is the solution, test it first. Does it work correctly? Can it be improved? Are there any other workarounds?

## Follow-up

When following up on a closed ticket, ask the following questions:

1. Can a related documentation be improved or created?
2. Is the problem related to a known or new bug?
3. Is the problem related to a missing feature? Can a feature request be created?
