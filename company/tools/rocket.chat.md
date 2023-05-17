---
description: >-
  This page contains best practices for using Rocket.Chat on your day-to-day
  work
---

# Rocket.Chat

## Using Rocket.Chat Daily

We use Rocket.Chat in our daily routine. We expect you to use it while you are working. Make sure to add the channel `#important` to your favourites, or check it regularly. Company announcements are usually made there.

## Best Practices

### No Hello

Please _do not_ say just "Hello" in chat. It is as if you called someone on the phone and said "Hi!" and then put them on hold!

You are trying to be polite by not jumping right into the request, as you would do in person or on the phone, but chat is neither of those things. Typing is much slower than talking. Instead of being polite, you are just making the other person wait for you to phrase your question, which is lost productivity.

Asking your question before getting a reply allows for asynchronous communication. If the other party is away, and you leave before they come back, they can still answer your question, instead of just staring at a "Hello" and wondering what they missed.

{% embed url="https://nohello.com" %}

### Don't Overuse Audio

Audios are not searchable. Ensure that when you use audio, it's short and given a context around, it so people can find it if they use the search. Audios should not convey more than one topic or task. You can't break audio into multiple pieces if you need to refer back to a specific point in time.

### Don't Overuse Multiuser DMs

The DMs with multiple users are by design forever limited to the original members. You will never be able to add or remove any member to the conversation, even if they leave the company. This type of channel was designed for personal conversations with a defined and limited audience. If you are going to discuss any nonpersonal topic, please consider creating a channel or a discussion.

### Keep People Updated

When you ask someone to help you with something, but this person takes too long to answer, and you end up finding a solution somewhere else, let them know. Often the person didn't answer right away and will try to find the solution before telling you they are looking for one to give you a complete answer (and an asynchronous one). As a gratitude token towards them possibly finding a solution, let them know they don't need to worry about it anymore.

### Use Mentions

Even on DMs, if you need someone's attention immediately, mention them so they will see a red badge beside the room name. Don't overuse it, though. Mentioning people in every DM will make it useless, and people may start ignoring it at all.

### Share Passwords Responsibly

In certain, limited cases, a password or other secret needs to be shared between multiple people. Never share passwords in plaintext (such as a normal Rocket.Chat message or email), but always use a password-sharing tool like Zoho Vault, to which the other person has access to.

### Don't Spam

Don't send the same message to multiple rooms (known as cross-posting) in the hopes that everybody will read it. If you need to send a message to the whole team, send it on #important or the Rocket.Chat Core Team group.

In the same way, don't send the same request to multiple people. If you need someone from a team to do a task, then send in that team's channel, or add to that team's Clickup board.

### Permissions

Every user on the Rocket.Chat server has specific permissions, combined together in a role. You can see most roles a person has in form of a `tag` next to username. Here we explain how we grant them:

* The `admin` role is only given to individuals that have a regular need to change and control settings and permissions on the server (engineering squad leads, QA, infrastructure and similar).
* The `moderator-global` role is given to individuals who manage users and content on a global scale (HR, management, security), such as for adding users to non-owned rooms or teams or deactivating users. Beyond that, it does not contain access to additional server settings.
* The `view-privileged` role is given to individuals who need to know, but not change the current settings of the server (e.g. PMs for troubleshooting). It is single permission.
* Everyone else gets the `user` role and additional permissions only on a room level (e.g. being the owner of a certain room). This role can still create rooms and discussions.

Additional roles with a more granular permission set have to be requested from and documented by the admins.
