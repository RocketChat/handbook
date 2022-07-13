# Technical Writing

## **Rocket.Chat Documentation Guidelines**

If you are a new Technical Writer joining our team or a community member who wants to contribute to Rocket.Chat documentation, here are some actionable writing guidelines you can apply to make your writing in tune with our documentation. They may seem painfully simple and obvious, yet if you ignore them repeatedly in your piece, the document might lose its tone/purpose.

## **Introductions**

Provide introductions: A good introduction should identify your topic and provide essential context. It also needs to engage your users' interest. For technical topics provide a strong non-technical context that demonstrates value proposition and provides motivation.&#x20;

## **Body**

* Use simple, short sentences.
* Address user in second-person pronouns, **you, your, yours, yourself, yourselves** instead of **the user.**
* Try starting actionable instruction with a verb. (e.g., “Click **Submit**…” \[Correct] vs. “Click the Submit button…” \[Not Preferred]).
* Use the actual names of UI components only, not their types. (e.g., “Click **Submit**…” \[Correct] vs. “Click the Submit button…” \[Not Preferred] OR "Turn **Enable encryption** on" \[Correct] vs. "Turn on the **Enable encryption** toggle" \[Not Preferred]).
* Use Active Voice whenever possible (e.g., “You can change these configurations by…” \[Active] vs. “These configurations can be changed by…” \[Passive]).
* Convey value but stay factual.
* When a hosting provider is referenced state that it is provided as an example.
* Always spell check for typos and grammar check for polish.

### Info blocks/call outs

Avoid partial content references.

Call-outs should be used for external dependencies or prerequisites. Below are a few good examples of info block usage.&#x20;

{% hint style="info" %}
Matrix support in Rocket.Chat is currently considered alpha. Expect bugs.
{% endhint %}

{% hint style="info" %}
Users need to set up a Matrix homeserver and a dendrite server
{% endhint %}

### Screenshots

* Use screenshots only one navigation/step is so complex that you cant describe it in words.
* Make sure screenshots are readable.
* For difficult navigations, mark your screenshots always, as shown below:

![Marked screenshot](<../../../.gitbook/assets/image (24).png>)

### Document Flow

Make sure that information is provided organically. Always assume, the user is new to the Rocket.Chat, reading the document you are writing as the first document, and know nothing about Rocket.Chat previously.&#x20;

* A prerequisite step is given first, as shown in the example below:

![Prerequisite step](<../../../.gitbook/assets/image (34).png>)

* If you are referring to another feature within the document you are writing, assume that your reader does not know about it and give a hyperlink to the documentation of that feature, as shown in the example below:

![](<../../../.gitbook/assets/image (35).png>)

* Maintain the flow of the feature and give any next steps, as shown in the example below:

![Next step](<../../../.gitbook/assets/image (29).png>)

* When documenting a new topic in a feature, always use branches and dedicated pages. This way, the necessary information is searchable by users through keywords on the page title, as shown below:

![](<../../../.gitbook/assets/image (23).png>)

* Use headings, bullet points, and links to break up information into chunks, not long explanatory paragraphs.
* Actionable items in a bulleted list should not end in a full stop.
* Use tables and diagrams, not sentences, to represent information with multiple dimensions.
