# Partner Guide

## Installation and Requirements
<br/>
Rocket.Chat deployment is highly flexible. There are two main versions: **Cloud** and **Self-Managed**.

## Cloud
<br/>
The Cloud version is hosted by Rocket.Chat in three paid versions: Bronze, Silver, and Gold. Pricing and features for each version are described on [https://rocket.chat/pricing#cloud](https://rocket.chat/pricing#cloud).

Usually, you can easily check whether a customer is using the Cloud version by checking the instance URL. A Cloud instance will follow the [https://company.rocket.chat](https://company.rocket.chat) format. This is not always the case, as Silver and Gold plans are entitled to custom domains (e.g., [https://chat.company.com](https://chat.company.com)).

Cloud instances are managed by the Rocket.Chat Cloud Engineering Team. Customers have access to an administration area where a few operations can be performed, such as restarting the instance. The Cloud Console URL is [https://cloud-console.rocket.chat](https://cloud-console.rocket.chat). Support tickets can also be raised from the Cloud Console.

Customers usually sign up for a trial on the Cloud before deciding which version to subscribe to. The trial version is the full-featured (Gold) one.

**Tip:** Cloud installations are easier to set up and preferable for companies with limited IT personnel.

## Self-Managed
<br/>
The on-premise version of Rocket.Chat comes in three versions: Community, Pro, and Enterprise. Of the three, only the last two are paid; the Community version is free and open source. Pricing and features for each version are described on [https://rocket.chat/pricing#self](https://rocket.chat/pricing#self).

There are several ways to deploy Rocket.Chat on-premise, either in local servers or in virtual private clouds. All deployment options can be found at [https://rocket.chat/install](https://rocket.chat/install). Rocket.Chat is also available on the AWS Marketplace: [https://aws.amazon.com/marketplace/seller-profile?id=dcb2092b-ef39-40bd-bc7c-f2394fa75ba7](https://aws.amazon.com/marketplace/seller-profile?id=dcb2092b-ef39-40bd-bc7c-f2394fa75ba7).

**Tip:** an on-premise installation allows full local control of the data, which is a very important point for privacy-minded companies that are distrustful of the Cloud.

## Features

### Deployment
<br/>
#### High Scalability Cluster
<br/>
For companies requiring high availability and scalability, Rocket.Chat and be deployed in multiple instances, forming a cluster. Currently, the scalability capacity is the same across all versions, but, in the near future, this will change considerably as the Enterprise version incorporates important learnings from our development team.

In other words, the Community edition contains our first generation of scaling. Customers can scale the community edition, and many have. We are not removing any possibility of deploying multiple instanced servers for RC. Having said that, we have been learning a lot about how to scale RC for large deployments, adding some orchestration processes to avoid the N to N stream of messages between all the instances, for example, and we are adding some of that learning back into the community edition to improve performance, and adding some of it to our Enterprise offering. Enterprise edition will embrace our second generation of scaling.
<br/><br/>
#### File Storage Migrate Tool
<br/>
This is an internal tool we have to move files between different file storage systems, such as Google Storage, S3, GridFS, etc. This may be handy for customers who want to migrate between Cloud vendors.

### General Features
<br/>
#### Users
<br/>
Rocket.Chat allows customers using any form of deployment to add unlimited users to the platform. This is different from other chat solutions, which limit users depending on the plan.
<br/><br/>
#### Messages History
<br/>
Rocket.Chat allows customers to see an unlimited amount of message history. This is different from other chat solutions, which limited message history depending on the plan.
<br/><br/>
#### Public Channels
<br/>
Public channels are channels that can be joined by any user in the instance.
<br/><br/>
#### Private Channels
<br/>
Private channels can be joined by invitation only, and are inaccessible for other users in the instance.
<br/><br/>
#### Broadcast Channels
<br/>
Broadcast channels are 1-to-many; for example, they can be used for general announcements or surveys, keeping the focus on the message without generating public discussion. Individual users on the channel will receive the message but won't be able to reply publicly to it (only privately).
<br/><br/>
#### Conferencing Server
<br/>
Rocket.Chat allows the integration of dedicated conference servers. The steps to do so are explained at [https://rocket.chat/docs/administrator-guides/setting-up-video-conferencing](https://rocket.chat/docs/administrator-guides/setting-up-video-conferencing).

The Community, Bronze and Silver editions use a shared server hosted by Rocket.Chat. Gold users have a dedicated server.
<br/><br/>
#### Storage (Cloud-only)
<br/>
Bronze users are entitled to 1 terabyte of storage space. Silver and Gold are entitled to 5 and 20 terabytes, respectively.
<br/><br/>
#### Integrations
<br/>
Rocket.Chat on-premise allows unlimited integrations. An upcoming app marketplace will be the main repository for easy-to-install integrations. In the meantime, a list of possible integrations is available (alongside instructions for deployment) at [https://rocket.chat/docs/administrator-guides/integrations](https://rocket.chat/docs/administrator-guides/integrations).

Rocket.Chat Cloud has a limit on integrations. For Bronze users, 5 integrations are the limit. For Silver and Gold, the limits are 100 and 1000 integrations, respectively.
<br/><br/>
#### Multi-language Interface
<br/>
Rocket.Chat is available in more than 30 languages already. The translation effort is public and open, and anyone can help by joining our Lingohub page: [https://rocket.chat/docs/contributing/translating](https://rocket.chat/docs/contributing/translating).
<br/><br/>
#### Desktop Apps
<br/>
While any user can join the instance by using the web client, native desktop apps for Windows, macOS, and Linux are also available. They are built using the [Electron](https://electronjs.org/) framework.
<br/><br/>
#### Mobile Apps
<br/>
Mobile apps for Android and iOS are available on the respective app stores. An experimental app based on [React Native](https://facebook.github.io/react-native/) is also available. More information about it can be found on [https://rocket.chat/2018/11/13/reactive-native-update](https://rocket.chat/2018/11/13/reactive-native-update).
<br/><br/>
#### Custom Domains
<br/>
For Cloud customers who want a different domain than [https://company.rocket.chat](https://company.rocket.chat), we allow custom domains (e.g., [https://chat.company.com](https://chat.company.com)).
<br/><br/>
#### White Label (Branding)
<br/>
We allow customers to customize Rocket.Chat, replacing logos and changing any other visual aspect of the clients. This customization, however, should be performed by the customer and we do not provide support.
<br/><br/>
#### Live Chat
<br/>
All versions of Rocket.Chat support our first version of the live chat feature. Live chat windows can be integrated on company websites; a dedicated channel will be created on Rocket.Chat, where an agent or bot can interact with the customer. A new, more feature-rich version of the live chat integration will be available on the Enterprise version soon.
<br/><br/>
#### Live Streaming
<br/>
Rocket.Chat can be integrated with YouTube for live streaming. This is explained on [https://rocket.chat/docs/administrator-guides/youtube-broadcasting](https://rocket.chat/docs/administrator-guides/youtube-broadcasting).
<br/><br/>
#### Read Receipt
<br/>
Customers can use the REST API to get read receipts of messages. This is explained on [https://rocket.chat/docs/developer-guides/rest-api/chat/getmessagereadreceipts](https://rocket.chat/docs/developer-guides/rest-api/chat/getmessagereadreceipts).
<br/><br/>
#### Message Auditing Panel
<br/>
This feature is exclusive to the Enterprise and Gold versions of Rocket.Chat. The auditing panel allows specific users to read any conversation between any users. The time range can be chosen freely. An auditing log feature is also available, allowing specific users to verify who and when a conversation was inspected.

### Pre-configured Proxy Servers
<br/>
#### Push Notifications
<br/>
We provide pre-configured push notifications gateways. Customers using the community version are limited to 1000 push notifications per month; Pro customers are entitled to 10000 push notifications per month, and Enterprise customers are entitled to unlimited push notifications.

Separate packages are available for customers of the Community and Pro versions who do not want or need to move to the Enterprise version.

Additionally, customers who don't want to pay for the package can configure their own gateways by following the instructions at [https://rocket.chat/docs/administrator-guides/notifications/push-notifications](https://rocket.chat/docs/administrator-guides/notifications/push-notifications).

On the Cloud, push notifications are unlimited for all three versions.

#### Social Network Login
<br/>
Rocket.Chat supports OAuth authentication, enabling customers to hook up their system to the social network logins. This is explained at [https://rocket.chat/docs/administrator-guides/authentication/oauth](https://rocket.chat/docs/administrator-guides/authentication/oauth).
<br/><br/>
#### OmniChannel Integrations
<br/>
Customers can contact our support team to gain an API key and token, allowing them to integrate Rocket.Chat with Facebook.
<br/><br/>
#### Real-time Translation
<br/>
Pro and Enterprise customers can integrate Rocket.Chat with the Google translation API. This is explained on [https://rocket.chat/docs/administrator-guides/google-cloud/auto-translate](https://rocket.chat/docs/administrator-guides/google-cloud/auto-translate), but please notice that the customers will have to purchase their own access to the API first.
<br/><br/>
#### Audio to Text Conversion
<br/>
Enterprise customers can use the Google API to enable automatic audio to text conversion by dictating into the application.

### Administration
<br/>
#### Analytics Reporting
<br/>
For on-premise customers, starting with version 0.73.2 there will be a section on the administrator settings allowing them to link their workspace to the Cloud Console. The customer will be able to see all their workspaces in the cloud, and this will allow statistics and reporting.
<br/><br/>
#### Multi-factor Authentication
<br/>
All users can enable Two Factor Authentication. This will require the user to get a key code from an app on her phone, thus increasing the security when logging in.
<br/><br/>
#### Customizable User Permission
<br/>
Rocket.Chat allows the definition of a rich amount of roles and permissions to fine-tune access depending on each company's needs. This is explained in detail on [https://rocket.chat/docs/administrator-guides/permissions](https://rocket.chat/docs/administrator-guides/permissions).
<br/><br/>
#### LDAP / Active Directory
<br/>
Community users have the ability to use basic LDAP authentication as detailed on [https://rocket.chat/docs/administrator-guides/authentication/ldap](https://rocket.chat/docs/administrator-guides/authentication/ldap).

Pro and Enterprise users will soon have access to a feature-rich LDAP integration.
<br/><br/>
#### Engagement Dashboard
<br/>
TBD.

### Resources
<br/>
#### Documentation & Tutorials
<br/>
Self-service support options at [https://rocket.chat/docs](https://rocket.chat/docs).
<br/><br/>
#### Tutorial Videos
<br/>
Self-service support options at [https://www.youtube.com/channel/UCin9nv7mUjoqrRiwrzS5UVQ](https://www.youtube.com/channel/UCin9nv7mUjoqrRiwrzS5UVQ).
<br/><br/>
#### Forums
<br/>
Self-service support options at [https://forums.rocket.chat](https://forums.rocket.chat).
<br/><br/>
#### Features or Bugs
<br/>
Anyone can raise features or bugs on our GitHub page at [https://github.com/RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat).

### Support
<br/>
#### Updates
<br/>
Cloud customers are entitled to automatic updates whenever a new version is available. These upgrades are performed in batches by our engineers.
<br/><br/>
#### Online Ticket Creation
<br/>
Pro, Enterprise and all Cloud customers can create tickets online through the Cloud Console. Additionally, tickets can be created directly on [https://support.rocket.chat](https://support.rocket.chat).
<br/><br/>
#### 24/7 Email
<br/>
Pro, Enterprise and all Cloud customers can create tickets by sending an email to support@rocket.chat.
<br/><br/>
#### 24/7 Chat
<br/>
Pro, Enterprise and Gold customers are entitled to a dedicated, private channel on the open server at [https://open.rocket.chat](https://open.rocket.chat).
<br/><br/>
#### 24/7 Phone
<br/>
Pro and Silver customers can contact our support team by phone to report critical issues.

Enterprise and Gold customers can contact our support team by phone to report issues of any priority.
<br/><br/>
#### Support Entitlement
<br/>
Community users are not entitled to support.

Pro customers can designate 1 named contact to reach our support team.

Enterprise customers can designate up to 3 named contacts to reach our support team.

Cloud administrators are entitled to create support tickets.
<br/><br/>
#### Post-incident Reports
<br/>
Enterprise customers are entitled to post-incident reports, where our engineering team provides technical detail and root cause analysis.

### SLA - Initial Response Time
<br/>
#### Low
<br/>
Tickets reporting issues which do not impact usage of the system.
<br/><br/>
#### Medium
<br/>
Tickets reporting issues with moderate impact to one or more features of the system.
<br/><br/>
#### High (Critical)
<br/>
Tickets reporting issues with severe impact to one or more features of the system, including system down situations.

### Extras
<br/>
#### Onboarding Call
<br/>
Enterprise and Gold customers will be offered an initial welcome and onboarding call with our support team. On this call, our team will explain how support operates, who are the main contacts on our side and will have the opportunity of having any questions answered.
<br/><br/>
#### Migration Assistance
<br/>
Pro, Enterprise and Gold customers will have a fast lane to contact our support and engineering teams to troubleshooting issues related to migration from other chat solutions.
<br/><br/>
#### Access to Product Team
<br/>
Enterprise customers are entitled t recurring, short meetings with our engineering team to provide feedback and ask questions related to the product roadmap. The exact length and format of such meetings should be discussed by the sales team during contract creation.
<br/><br/>
#### On-Call Upgrade Assistance
<br/>
Enterprise and Gold customers are entitled to on-call upgrade assistance, provided our support team is informed beforehand with at least two weeks of prior notice.

Since Gold customers are on the Cloud but are on an Enterprise-level tier, they are able to choose when the instance is upgraded.
<br/><br/>
#### Atlassian Integration Apps Bundle
<br/>
Pro, Enterprise and all Cloud customers have immediate access to all Atlassian integration apps (Bamboo, Bitbucket, Confluence, and Jira). These apps will eventually be available on the marketplace for separate purchase for the Community edition.
