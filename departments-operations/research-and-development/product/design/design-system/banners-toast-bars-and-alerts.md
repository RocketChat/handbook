# Banners, Toast Bars and Inline Alerts

## Notifications

In order to fully understand Banners, Toast Bars and Inline Alerts, we need to take a step back to notice that, in the end, they are all notifications trying to communicate with the user.

There are two notifications' levels:

1. **System Level Notifications:** provide information actions performed not based on the user interactions, but on the system operations behind the scenes;
2. **User Level Notifications:** provide information based on users' interactions.

### Notification Components

#### Banner

![](<../../../../../.gitbook/assets/warning (5) (2) (2) (4) (5) (1) (23).png>)

#### Toast Bar

![](<../../../../../.gitbook/assets/warning (8) (2) (2) (3) (3) (17).png>)

#### Inline Alert

![](<../../../../../.gitbook/assets/warning (2) (2) (2) (4) (6) (3) (20).png>)

### Components' Proprieties

| Type             | Interaction                                                                                                           | System Level | User Level | Time-based | Dismissed by the User     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- | ---------- | ------------------------- |
| **Banner**       | Persist until dismissed by the user and may contain links so they can handle the notification                         | Yes          | No         | No         | Depends on the importance |
| **Toast Bar**    | Disappear automatically and can be dismissed by the user                                                              | No           | Yes        | Yes        | Yes                       |
| **Inline Alert** | Persist until its status changes, once this happens, its life-cycle starts again. It can not be dismissed by the user | Yes          | Yes        | No         | No                        |

### Notification Types

| Type        | Usage                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Neutral     | Provide users information and next steps so they can understand and address the notification.                                                          |
| Highlighted | Similar to Neutral, however they should be used when we need to bring the information to the users' attention.                                         |
| Success     | It confirms that a task was completed as expected.                                                                                                     |
| Warning     | It provides feedback of pending actions or about things that in the future may turn into a problem as well as an informed way to prevent it to happen. |
| Error       | It alerts a task \_\*\*\_was not completed as expected and also provides a way to address the issue or contact the Support Team.                       |

### Notification Importance

| Type             | Feedback Type      | Red Route\* Breaker |
| ---------------- | ------------------ | ------------------- |
| Urgent           | Error or Success   | Yes                 |
| Important        | Warning or Success | Maybe in the future |
| Relevant         | Highlighted        | No                  |
| Informative Only | Neutral            | No                  |

**Red Route:** They are the critical tasks a system has. Having any of these flows broke means that a valuable part of the system are not usable and it compromises the overall product experience.

## Banners

Working on the System Level Notifications, they are not time-based, may contain links so users can address the notification and can or can not be dismissed by the user depending on the notification's importance.

Examples:

* Security feature disabled;
* New feature released;
* Break change about to be released;
* NPS research;
* New legal term to be accepted;
* Service usage about to reach the limit;
* A network disconnection.

{% tabs %}
{% tab title="Neutral" %}
![](<../../../../../.gitbook/assets/Neutral (9).png>)

Example:

* NPS research;
* New set of features to be released;
{% endtab %}

{% tab title="Highlighted" %}
![](<../../../../../.gitbook/assets/Highlight (3).png>)

Example:

* New legal term to be accepted;
{% endtab %}

{% tab title="Success" %}
![](<../../../../../.gitbook/assets/Success (5).png>)

Example:

* Auto-syncronization with third-party systems that might influence the user experience in the Rocket.Chat Platform.
{% endtab %}

{% tab title="Warning" %}
![](<../../../../../.gitbook/assets/warning (5) (2) (2) (4) (5) (1) (24).png>)

Examples:

* Services' usage about to reach the limit;
* Break change about to be released;
* Security feature disabled.
{% endtab %}

{% tab title="Error" %}
![](<../../../../../.gitbook/assets/Error (5).png>)

Examples:

* A network disconnection;
* Services' usage reaches the limit;
{% endtab %}
{% endtabs %}

## Toast Bars

Working on the User Level Notifications, helping to understand what is the status of a performed action, they are time-based, may contain links so users can address the notification and can be dismissed by the user.

They are time-based, it means that Toast Bars should disappear after a minimum of five seconds.

* **Minimum Time**: 5 seconds, until 120 characters;
* **Long Text Content:** After the minimum length, we must add 1 second each 60 characters, rounding up.

{% tabs %}
{% tab title="Neutral" %}
![](<../../../../../.gitbook/assets/Neutral (7).png>)
{% endtab %}

{% tab title="Highlighted" %}
![](<../../../../../.gitbook/assets/Highlight (2).png>)
{% endtab %}

{% tab title="Success" %}
![](<../../../../../.gitbook/assets/Success (4).png>)
{% endtab %}

{% tab title="Warning" %}
![](<../../../../../.gitbook/assets/warning (8) (2) (2) (3) (3) (18).png>)
{% endtab %}

{% tab title="Error" %}
![](<../../../../../.gitbook/assets/Error (4).png>)
{% endtab %}
{% endtabs %}

## Inline Alerts

Working on both, System Level Notifications and User Level Notifications, they are not time-based, may contain links so users can address the notification, can not be dismissed by the user.

It is important to highlight that, they persist until its status changes, once this happens, its life-cycle starts again, therefore they will be always displayed in its current status.

The Inline Alerts' goal is to help users shaping their mental modal of the current status of the system.

{% tabs %}
{% tab title="Success" %}
![](<../../../../../.gitbook/assets/Success (3).png>)
{% endtab %}

{% tab title="Warning" %}
![](<../../../../../.gitbook/assets/warning (2) (2) (2) (4) (6) (3) (21).png>)
{% endtab %}

{% tab title="Error" %}
![](<../../../../../.gitbook/assets/Error (3).png>)
{% endtab %}
{% endtabs %}
