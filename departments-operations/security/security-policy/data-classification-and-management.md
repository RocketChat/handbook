---
description: >-
  Purpose: Ensure that data is classified and handled appropriately and securely
  throughout its lifecycle, reducing the risk of data breaches, protecting
  sensitive data, and ensuring compliance with reg
---

# Data Classification and Management



Scope: This data classification policy applies to all data and to all user-developed data sets and systems that may access these data, regardless of the environment where the data reside (including cloud systems, servers, personal computers, mobile devices, etc.).&#x20;

The policy applies regardless of the media on which data reside (including electronic, microfiche, printouts, CD, etc.) or the form they may take (text, graphics, video, voice, etc.)\
\
Note: Your private opinion, e.g. what you share on social media under your personal name, is not in scope of this policy. You should always make clear if you are posting in the name of Rocket.Chat or privately, if the context leaves room for ambiguity.



### Types of data handled within our organization 

There are a variety of data types handled within the organization, such as personal data, financial data, intellectual property, confidential data, etc. and for each system or repository within our [Asset Register](https://docs.google.com/spreadsheets/d/1Fmei\_-OGpXvUwsHzd8K87ke-CgCLOGpzerrPEQo9e0Q), data must be identified and classified according to the following types:&#x20;

* Open data: same as public. Contain data that can be seen by anyone.&#x20;
* Financial: contains monetary data (invoices, paychecks, reports,...)
* Customer - Personal data (PII, PHI, user credentials,...)
* Rocket.Chat - Personal data (employees or contractors data, PII, PHI, benefits, salary,...)&#x20;
* Operational data: contains information related to an organization's operational processes, system configurations, or IT infrastructure.
* Other - cases that do not fall into none of the above categories.&#x20;



### Data Classification and Handling&#x20;

#### For in-house and third-party applications 

All data stored within our applications (in-house and third-party) shall be classified based on its sensitivity level.\


* Public data: This type of data is freely accessible to the public (i.e. all employees/company personnel). It can be freely used, reused, and redistributed without repercussions. An example might be first and last names, job descriptions, or press releases.
* Internal-only data: This type of data is strictly accessible to internal company personnel or internal employees who are granted access. This might include internal-only memos or other communications, business plans, etc.
* Confidential data: Access to confidential data requires specific authorization and/or clearance. Types of confidential data might include Social Security numbers, cardholder data, M\&A documents, and more. Usually, confidential data is protected by laws like HIPAA and the PCI DSS.
* Restricted data: Restricted data includes data that, if compromised or accessed without authorization, which could lead to criminal charges and massive legal fines or cause irreparable damage to the company. Examples of restricted data might include proprietary information or research and data protected by state and federal regulations.\


The handling requirements for each category consist of access controls to ensure that only authorized users can access and modify the data. Within the Asset Register, the control SPA and asset owner must be indicated and are responsible for granting access to the system or application in question and for reviewing access and privileges periodically.\


#### User-developed data (Internal files and documents, email content, …) 

As a Rocket.Chat employee or contractor, all data created, modified, received or otherwise processed in connection with Rocket.Chat, must be handled confidentially and protected according to the risk related to it. (Confidential Data). Your NDA includes more details on what is considered confidential and what not. We do not distinguish between various levels of confidentiality (like secret, top secret, super secret, ...).

An exception to confidentiality of data applies when the data in question is specifically targeted at a broader audience outside the organization (e.g. blog posts, webinars, public source code). This data is classified as "public". (Public Data).



In regards to handling and marking of data, unless stated otherwise, the creator of data is considered its owner and has to ensure the provisions of this policy are followed. Our general policy is that access to data is denied by default within the company, unless the owner has authorized access to it (e.g. to an individual, to a role or to a group of individuals). This granting or changing of access must be logged and the access control lists regularly reviewed by the owner. This also means we follow the principle of discretionary access control, meaning that owners of data grant access to this data by themselves.\


* Confidential data: We generally do not tag or otherwise mark confidential information. Instead we store information in secure repositories and grant access to information only when there is a legitimate need for it ("need-to-know"-access). Unauthorized access must be prevented with the features of the tools you are using. E.g. you should set links to a file with the correct sharing permission. Before sharing confidential data with individuals outside the Rocket.Chat organization, an NDA must be signed. This NDA signature is the responsibility of the HR team for employees and contractors and of the Sales team for potential clients and customers. In case you are in doubt of the existence of an NDA, contact these teams respectively before sharing confidential data. For confidential information shared from us to customers or other external parties (e.g. a slidedeck), you must tag it with the Rocket.Chat logo to indicate its origin and minimize intellectual property infringement. Where the context warrants an additional note to the recipient, you should consider putting a footer like "Confidential material. Do not reproduce" on your document. Secure ways of sharing data (e.g. PGP-encrypted mailing, end-to-end encrypted channels on Rocket.Chat) should be preferred. For sending confidential material via hardcopy, only use legitimate mail services and avoid marking that draws attention to the content of the package.
* Public data: Public data is also not marked specifically, instead it is characterized as being public when you put it on a place where the intended audience can access it (e.g. on our website or a public GitHub repository). To distinguish public data and confidential data, consider where it is being placed. Consider also that all data you put on the web is potentially replicated in other places (e.g. wayback machine, reupload on youtube, etc.) so be sure to check in advance if the data in question is really intended to be public.



Note: Other handling and marking methods depending on tools and systems you use may apply. When you work with specific tools and systems, these systems often come with their own classification schemes (e.g. GitHub Public vs Private Repositories) and mechanisms (access control lists, metadata, etc.). You should use these classification mechanisms in the spirit of this policy and the context of how you use the system.\


### Deletion of data

Once data is considered no longer necessary, it should be deleted. Keep in mind that we are required to keep certain data for a minimum or maximum amount of time (e.g. for legal reasons).&#x20;

Use secure methods for deleting data, e.g.[ DBAN](https://dban.org/) .Contact the security team in case you are in doubt of deleting data.&#x20;

Wiping of customer data and sanitization of assets must follow defined procedures. For laptops, the sanitization shall be done upon return of the asset to the company. For servers, contact the infrastructure team for information on how the process is conducted.&#x20;

In regards to data stored within third-party organizations, those shall also have appropriate data classification and handling policies in place to protect the data. &#x20;

Public data generally does not need to be deleted since the risk associated with it is low and our external audience often expects this data to be available (e.g. in our public source code repositories).

\
