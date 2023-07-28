---
description: Rocket.Chat Documentation Guidelines
---

# Technical Documentation Guidelines

For every new technical documentation writer joining our Rocket.Chat team or community members eager to contribute, it's important to align your writing with our existing documentation style. While the guidelines presented here might seem simple and obvious, overlooking them could dilute the tone and purpose of the document. Let's delve into the specifics of developing engaging and effective technical documentation for Rocket.Chat.

1. <mark style="color:blue;">**Introductions**</mark>: Introductions should provide an overview of your topic and set the necessary context. Aim to engage your users' interest by offering a strong non-technical context to highlight the value proposition and motive behind the topic.
2. <mark style="color:blue;">**Body**</mark>**:** The body of your documentation should adhere to these principles:

* Use simple, short sentences.
* Address the user in second-person pronouns, **you, your, yours, yourself, yourselves** instead of **the user.**
* Refer to admin user as **'administrator'** or **'workspace administrator'.**&#x20;
* Refer to Rocket.Chat server as, **'workspace'** or **'your workspace'** or **'your Rocket.Chat workspace'**.&#x20;
* Begin actionable instructions with a verb, such as “Click **Submit**…” \[Correct] vs. “Click the Submit button…” \[Not Preferred]).
* Utilize the actual names of UI components, avoiding their types, such as “Click **Submit**…” \[Correct] vs. “Click the Submit button…” \[Not Preferred] OR "Turn **Enable encryption** on" \[Correct] vs. "Turn on the **Enable encryption** toggle" \[Not Preferred]).
* Employ the present tense for a sense of immediacy, as the future tense can imply uncertainty. Compare “When you connect the power cable, the device will boot up automatically” to “When you connect the power cable, the device boots up automatically.” The future tense suggests a mild uncertainty as to how things unfold.
* Use Active Voice whenever possible to maintain directness and clarity, such as “You can change these configurations by…” \[Active] vs. “These configurations can be changed by…” \[Passive]).
* Convey value but stay factual.
* Proofread to ensure accuracy in grammar and spelling. Rocket.Chat provides a Grammarly business account, which can be acquired by contacting your team leader.

3. <mark style="color:blue;">**Info Blocks/Callouts**</mark><mark style="color:blue;">:</mark>

* Use call-outs for prerequisites or external dependencies.

{% hint style="warning" %}
Matrix support in Rocket.Chat is currently considered alpha. Expect bugs.
{% endhint %}

{% hint style="info" %}
Users need to set up a Matrix homeserver and a dendrite server.
{% endhint %}

4. &#x20;<mark style="color:blue;">**Screenshots:**</mark> Screenshots are highly discouraged due to their tendency to become obsolete with frequent software updates. Aim to be descriptive in your instructions, explaining every step and navigation process clearly.&#x20;
5.  <mark style="color:blue;">**Utilize Inline Images for Controls to Enhance Navigation:**</mark>&#x20;

    Inline images of controls play a crucial role in making technical documents more user-friendly and interactive. These images can serve as a direct visual aid to users, enabling them to follow instructions more efficiently and intuitively. The usage of inline images becomes particularly important when dealing with complex controls or user interfaces with a multitude of options.

    However, while using inline images, keep in mind the following best practices:

    * Always provide a brief description of the image. This not only aids in understanding but also supports accessibility for users who rely on screen readers.
    * The image should be relevant and directly tied to the instruction it is supposed to support.
    * Be mindful of the image's size and quality. It should be large enough to be clear but not so large that it hampers the page loading speed.

    By effectively using inline images of controls in your technical writing, you can provide a superior navigation experience, making your documentation more effective and user-friendly.
6. <mark style="color:blue;">**External references:**</mark>&#x20;

* Official documentation: When you are referencing portions of the external official documentation, give links to those documents instead of copying content from them.&#x20;
* Forums/Discussion: When you are referencing something from a forum/discussion, document the hack/fix that worked for you and give the link to the discussion as well so your readers can follow if the discussion evolved after you documented it.&#x20;

7. <mark style="color:blue;">**Document Flow:**</mark>

When starting a document always assume the user is new to the Rocket.Chat. Start every document with edge-case in mind.

* A prerequisite step is given first. (e.g., “If you are using the conference call feature for the first time on Rocket.Chat, contact your administrator, or follow the admin guide linked below to configure conference calling on your Rocket.Chat instance." )
* If you are referring to another feature within the document you are writing, assume that your reader does not know about it and give a permalink to the documentation of that feature, as shown in the example below:
* Maintain the flow of the feature and give any next steps, as shown in the example below:

![Next step](<../../../.gitbook/assets/image (29).png>)

8. <mark style="color:blue;">**Formatting**</mark>

* Don't write long explanatory paragraphs. Use headings, bullet points, and links to break up information into chunks.
* Actionable items in a bulleted list should not end in a full stop.
* Use tables and diagrams, not sentences, to represent information with multiple dimensions.

9. <mark style="color:blue;">**Best Practices for Headings**</mark>: Headings should be used as a navigational tool for the page, not as a means to draw attention. We should trust that users consuming the document are attentive. Employ headings only when tangible navigation is required. For instance, if a user is searching for a specific set of instructions within the document and does not need to go through the entire content. Example: H1: "Upgrade with Docker" within a document titled "Docker Deployment".
10. <mark style="color:blue;">**Accommodating Different User Levels:**</mark> Keep in mind that your documentation may be accessed by users with varying levels of familiarity with the product. Make sure to include both basic and advanced information, neatly sectioned so that a user can easily find the details appropriate to their skill level.
11. <mark style="color:blue;">**Accessibility:**</mark> Always consider accessibility when creating documentation. This includes providing alt text for images, ensuring good contrast for readability, and structuring content in a way that's easily navigable with assistive technology.
12. <mark style="color:blue;">**Iterative Review and Feedback Regularly**</mark>: Seek feedback from both your peers and users. This allows you to understand different perspectives, helping you refine the clarity, effectiveness, and accessibility of your content. Remember, documentation, like any other piece of writing, can always be improved.

By adhering to these guidelines, you can significantly improve the clarity, usefulness, and longevity of your Rocket.Chat documentation. Remember, our goal is to assist users in understanding and utilizing Rocket.Chat to its full potential.
