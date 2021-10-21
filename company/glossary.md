---
description: >-
  The purpose of this document is to define common definitions as seen around
  our documentation, metrics, and day-to-day conversations.
---

# Glossary

## Metrics

#### Prospect:

* Visitors on the website or any other medium although they didn’t share any type of personal/company information nor interest (sources).
* Responsible: Marketing

#### Lead:

* Someone that expresses interest and shares more information that has:
  * Shared personal information but no company information &#x20;
  * Registered on newsletter, events, etc
* Responsible: Marketing

#### Marketing Qualified Lead (MQL):

* Someone that expresses interest and shares more information regarding the company that has:
  * Shared individual and company information
* This is the point where the lead is ready to talk to an SDR
* Responsible: Marketing

#### Product Qualified Lead (PQL):

* Someone that has engaged on a free trial or in our community version and has a score above a threshold taking into account: size, industry and country.
* This is the point where the lead is ready to talk to an SDR
* Responsible: Marketing and Product

#### Sales Qualified Lead (SQL):

* Someone that the SDR has already talked to and fits the target profile, has the pain identified and the timing is right.
  * At this stage, the SDR will have already talked to the client and identified a potential opportunity (need, time, authority, budget)&#x20;
* This is the point where the lead is ready to talk to a closer
* Responsible: Sales (SDR)

**Forecasting Category (former "Confidence Level" on Zoho CRM):**

* Commit (former "Very Confident"): either a late-stage deal OR a well-progressed deal that the rep says will close as part of their forecast for the current quarter. All deals in Verbal Approval with a closing date in the current quarter must be selected as Commit
* Best Case: upside or viable opportunities that could be accelerated to close in this quarter or are advancing with solid chances for us to eventually win. Rep has a solid amount of confidence on closing but may miss a key "SPICED" element such as decision-maker, timing, OR any other. Two things must be certain though, that we can solve their PAIN and they see IMPACT.
* Early Stage: uncertainty on many key elements of the SPICED framework that limit the ability to have any higher confidence level or inclusion in committed forecast number.
* Omitted: For just created opportunity or super early prospecting/discovery analysis. Opportunities may only exist because the company is in our ICP. Likely only "situation" or no elements of the SPICED framework have been identified/validated.

**Forecasting Scenarios:**

* Optimistic:&#x20;
  * Commit = 100%; Best Case = 50%; Early Stage = 10%
* Base:
  * Commit = 90%; Best Case = 40%; Early Stage = 0%
* Conservative:
  * Commit = 80%; Best Case = 35%; Early Stage = 0%

#### Lagged Contracts:

* New Sale / Upsell contracts closed at t, but starting at t + 1 (i.e. closed in April, but starts in May)

#### Contract Consumption:

* How much (%) of the total contract has been consumed.

#### Logos:

* Synonym for "Company" used in the context of Logo Churn and New Logo.

#### Opportunity (Opp):

* Someone that was verified by the sales team (closer/hunter) that benefits from the product and passes the SLA of opportunity.
  * At this stage, the Closer will have already talked to the client and identified an opportunity (need, time, authority, budget)&#x20;
* Responsible: Sales (Closer)

### Recurring Revenue Concepts

Refer to [Whimsical](https://whimsical.com/recurring-revenue-concepts-C7ffhDEB3oUsBeCiPeNr2j) for more info regarding recurring revenue..

#### ACV = Annual Contract Value:

* All contracts (Non-recurring such as Events and Professional services included)
* Value of contracts on a yearly basis
* Contracts that are > 12 months will be annualized
* Contracts that are < 12 months won’t be annualized

#### TCV = Total Contract Value:

* Takes into account non-recurring businesses&#x20;
* "Amount" field in Zoho CRM fields
* Back to our previous example Ex1 = $10k and Ex2 = $10k

#### Bookings ARR (Annual Recurring Revenue):

* **Deprecated since Feb 2021**
* Only recurring contracts (events and professional services not included)
* Value of contracts on a yearly basis
* Contracts that are > 12 months will be annualized
* Contracts that are < 12 months won’t be annualized

Ex1: 2 year contract worth $10k - Bookings ARR = $5k

Ex2: 6 month contract worth $10k - Bookings ARR = $10k

#### Deals Won

* Amount of deals on the stage closed won
* Includes all types (new sale, upsell, renewal)

#### Open Deals

* Amount of deals on pipeline meaning the stage is not closed won or lost

#### Overdue Tasks

* Tasks still open with the current date being after the deadline to complete the task

#### Target

* Sales quota based on ACV

#### Average Ticket Won

* ACV / Deal Won

#### Average Discount

* Takes into account all deals Closed Won divided by their supposed full price&#x20;
* (TCV (Amount) Closed Won / (TCV (Amount) Unit Price per Product x Seats Closed)

#### Win Rate:

* Only for New Sale deals
* Only for Opportunity onwards&#x20;
* Closed won deals / (Closed Won + closed lost)

#### Sales Cycle

* Only for closed Won Deals
* Only for type New Sale deals
* Sum of days spent on each stage&#x20;

#### Renewal Rate:

* Only for type Renewal&#x20;
* Closed Won / (Closed Won + Closed Lost)
* Can be by Amount ($) or by the logos (#)

#### Pipeline:

* All stages different from Closed Won and Closed Lost for types Upsell and Renewal
* From opportunity onwards not including Closed Won and Closed Lost for type new sale

#### SaaS (Software as a Service):

* "Software as a service is a software licensing and delivery model in which software is licensed on a **subscription basis** and is** centrally hosted**.". Check [this video](https://www.youtube.com/watch?v=4oQjPlS2gSg) for more info.

#### Sales Enabled:

* Customers who were acquired by the Sales Team. They could be SaaS (Gold, Silver, and Bronze) or Self-Managed (Pro and Enterprise).

#### Self-Service:

* Customers who haven't gone through the Sales Team. Exclusively SaaS (Gold, Silver, and Bronze).

#### Community Size Composite Index:

This index was created so we can better measure our[ Community Size growth](https://analytics.zoho.com/workspace/2019720000004718015/view/2019720000008139582). Find below its components and weights.

* 30% Users on [Open Server](https://analytics.zoho.com/workspace/2019720000004718015/view/2019720000008842627)
* 30% Users on [forums.rocket.chat](https://forums.rocket.chat)
* 20% [Stargazers on GitHub](https://analytics.zoho.com/workspace/2019720000004639019/view/2019720000004639804)
* 20% Unique Users Creating [Issues on GitHub](https://analytics.zoho.com/workspace/2019720000004639019/view/2019720000005682436)

### **Revenue Weekly - SDRs**

All the metrics below exclude Deals that went directly from Pre-Pipeline to Closed Lost.

#### Sales Territory

[How we get the Sales Territory](https://whimsical.com/how-we-get-the-sales-territory-TUxW3BaNBSn1jqTtEBe8Nu)

#### **# of SQL Created**

Count of New Sale Deals.

#### **# of Opps Created**

Count of New Sale Deals that left the Pre-Pipeline Stage.

#### **Total Current Pipeline**

Sum of Current Deal Amount of New Sale Deals in all Stages EXCEPT Pre-Pipeline.

#### **Open Current Pipeline**

Sum of Current Deal Amount of New Sale Deals in OPEN Stages EXCEPT Pre-Pipeline.

#### **Amount when Deal was created**

Snapshot Sum of Deal Amount when New Sale Deals were created.

### **Partners**

We use the "Partner (Lookup)" field from the Deals module on Zoho CRM to define which partner is related to an opportunity and create the proper metrics on Zoho Analytics.

We also have a "Partner (Lookup)" field in the Accounts module on Zoho CRM but it's only used for visual reference by the Salespeople.







