---
description: Rocket.Chat Documentation Guidelines
---

# Technical Writing

If you are a new Technical Writer joining our team or a community member who wants to contribute to Rocket.Chat documentation, here are some actionable writing guidelines you can apply to make your writing in tune with our documentation. They may seem painfully simple and obvious, yet if you ignore them repeatedly in your piece, the document might lose its tone/purpose.

## **Introductions**

Provide introductions: A good introduction should identify your topic and provide essential context. It also needs to engage your users' interest. For technical topics provide a strong non-technical context that demonstrates value proposition and provides motivation.&#x20;

## **Body**

* Use simple, short sentences.
* Address the user in second-person pronouns, **you, your, yours, yourself, yourselves** instead of **the user.**
* Refer to admin user as **'administrator'** or **'workspace administrator'.**&#x20;
* Refer to Rocket.Chat server as, **'workspace'** or **'your workspace'** or **'your Rocket.Chat workspace'**.&#x20;
* Try starting actionable instruction with a verb. (e.g., “Click **Submit**…” \[Correct] vs. “Click the Submit button…” \[Not Preferred]).
* Use the actual names of UI components only, not their types. (e.g., “Click **Submit**…” \[Correct] vs. “Click the Submit button…” \[Not Preferred] OR "Turn **Enable encryption** on" \[Correct] vs. "Turn on the **Enable encryption** toggle" \[Not Preferred]).
* The future tense does not have the same immediacy as the present tense. Compare “When you connect the power cable, the device will boot up automatically” to “When you connect the power cable, the device boots up automatically.” The future tense suggests a mild uncertainty as to how things unfold.
* Use Active Voice whenever possible (e.g., “You can change these configurations by…” \[Active] vs. “These configurations can be changed by…” \[Passive]).
* Convey value but stay factual.
* Always spell check for typos and grammar check for polish. Rocket.Chat provides a Grammarly business account. Get in touch with your leader to get yours.

## Info blocks/callouts

Avoid partial content references.

Call-outs should be used for external dependencies or prerequisites. Below are a few good examples of info block usage.&#x20;

{% hint style="warning" %}
Matrix support in Rocket.Chat is currently considered alpha. Expect bugs.
{% endhint %}

{% hint style="info" %}
Users need to set up a Matrix homeserver and a dendrite server
{% endhint %}

## Screenshots

* Avoid screenshots at all costs. With our new versions coming regularly, they can easily get outdated. Be descriptive in your writing and explain every step/navigation with words.&#x20;

## External references&#x20;

* Official documentation: When you are referencing portions of the external official documentation, give links to those documents instead of copying content from them.&#x20;
* Forums/Discussion: When you are referencing something from a forum/discussion, document the hack/fix that worked for you and give the link to the discussion as well so your readers can follow if the discussion evolved after you documented it.&#x20;

## Document Flow

Make sure that information is provided organically. Always assume the user is new to the Rocket.Chat. Start every document with edge-case in mind.

* A prerequisite step is given first. (e.g., “If you are using the conference call feature for the first time on Rocket.Chat, contact your administrator, or follow the admin guide linked below to configure conference calling on your Rocket.Chat instance." )
* If you are referring to another feature within the document you are writing, assume that your reader does not know about it and give a permalink to the documentation of that feature, as shown in the example below:

![](<../../../.gitbook/assets/image (35).png>)

* Maintain the flow of the feature and give any next steps, as shown in the example below:

![Next step](<../../../.gitbook/assets/image (29).png>)

* Use headings, bullet points, and links to break up information into chunks, not long explanatory paragraphs.
* Actionable items in a bulleted list should not end in a full stop.
* Use tables and diagrams, not sentences, to represent information with multiple dimensions.
