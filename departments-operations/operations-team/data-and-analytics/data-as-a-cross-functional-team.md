# Data as a Cross-Functional Team

The Data & Analytics Team is one of the most important teams in Rocket.Chat due to its strong cross-functional nature. In this document, you'll find how we act together with many other teams and departments to deliver value and apply data insights into our business strategies.

### Sales & RevOps

Data and RevOps work closely together in visualizing sales performance, forecasting scenarios, churn rates, data modeling, etc. Further, RevOps functions as a bridge between Data and the Sales department.

Most common interactions between us:

* Creating and maintaining Dashboards, Charts, and Reports;
* Changes in CRM should be reflected in Analytics. Every now and then, RevOps changes fields, adds features, and comes up with new business logic in our CRM. It's our job to create, adapt and maintain reports based on that data;
* Providing specific visualizations and reports: Zoho has a feature called [Query Tables](https://www.zoho.com/analytics/help/query-tables.html), enabling us to create complex data modeling tables based on Sales Data;
* Providing Dashboards with usage data enabling sales cycle reductions.

Point of Contact: [Leandro Coletti](https://open.rocket.chat/direct/leandro.coletti) (Sales)

### Finance

For a couple of months, the Data team was responsible for managing and updating the spreadsheet [Consolidation 2](https://docs.google.com/spreadsheets/d/1D1IFAN\_nvn50qsPbC2Bg9iC-C8luS75rVyetYE3UMFw/edit?ts=5f0c523a#gid=0), which consolidates (duh!) our financial data from Brazil and the United States. This spreadsheet will soon be replaced by a proper financial system.

We still get most of our KPIs from the spreadsheet, they are all located in the tabs Unit Economics, Unit SaaS, and Unit Self. It's still our responsibility to maintain these three tabs and come up with visualizations (available in a [Data Studio report](https://datastudio.google.com/u/0/reporting/1WcfrsaG9Mf0-en8R00p0U53pq72pSYMm/page/8ioz)).

Point of Contact: [Kaique Silva](http://open.rocket.chat/direct/kaique.silva) (to check for missing invoices) and [Alan Wright](https://open.rocket.chat/direct/alan.wright)

### Marketing

Most of the work Data & is related to lead generation and campaign tracking. Our Marketing operations are migrating to HubSpot (May 2021), so we expect to work closely together with this department.

Main activities:

* Preparing [data for our website](https://github.com/RocketChat/Rocket.Chat.DataAnalytics.PythonScripts/tree/main/Marketing) via sheetsdb API;
* Tracking Leads generation on [Zoho Analytics](https://analytics.zoho.com/workspace/2019720000000006001/view/2019720000000549144);
* Supporting metrics tracking related to UTM and campaign ROI;
* Coming up with specific visualizations and reports with [Query Tables](https://www.zoho.com/analytics/help/query-tables.html) ([1](https://analytics.zoho.com/workspace/2019720000000006001/view/2019720000006982002) and [2](https://analytics.zoho.com/workspace/2019720000000006001/view/2019720000006447214)).

Point of Contact: [Paola Palhais](https://open.rocket.chat/direct/paola.palhais)

### Corporate Management

There are two main ways the Data Team works together with Corporate Management.

* Data provided extensive support to the visualization and tracking of OKRs framework in 2021 via ClickUp).
* Most importantly, we are the main players regarding company updates to investors (both monthly and quarterly reports).

Point of Contact: [Alan Wright](https://open.rocket.chat/direct/alan.wright).

### Product

We usually deliver ad-hoc requests from the Product Team. Most of the time, the data comes from our MongoDB database, containing info about usage data, feature adoption, engagement metrics, etc. The Team Collaboration and Omnichannel product managers, Renato Becker and Milton Rucks, fill in a data request template, and then we deliver data products on Zoho Analytics.

Examples of ad-hoc requests:

* Omnichannel feature usage by country, company size, and industry, Omnichannel adoption ratio, the average number of omnichannel agents per month, etc. Most of the analysis is done in the [Omnichannel dashboard](https://analytics.zoho.com/workspace/2019720000004718015/view/2019720000008386702).
* Team Collaboration: servers by language (used to define which languages we were going to officially support), engagement metrics such as [MAU/DAU/WAU](https://app.clickup.com/t/391xh1),

Points of Contact: [Renato Becker](https://open.rocket.chat/direct/renato.becker) and [Milton Rucks](https://open.rocket.chat/direct/milton.rucks).

### Community

Even though we started working with Community recently, we are a key team in measuring community health and growth. At the beginning of 2021, the Data Team developed a [Composite Index](https://analytics.zoho.com/workspace/2019720000004718015/view/2019720000008851051) to measure Community Size growth. Find more info about it [here](https://handbook.rocket.chat/company/glossary#community-size-composite-index), and check [this presentation](https://docs.google.com/presentation/d/1Q4HuCKfgOS7Xglbf\_-1N0kbmO3yldaHRYxhPK1OHuQE/edit#slide=id.gdb76277bfc\_1\_0) for a tutorial on how to update it.

Overall, we continuously review the metrics tracked and come up with new ones, especially related to Push Notifications and Community Engagement (both on Open Server and on GitHub).

Point of Contact: [Sing Li](https://open.rocket.chat/direct/sing.li).

### People Experience

The People Experience department uses Zoho People to manage employees and HR-related matters. That system is natively connected to Zoho Analytics and, because of that, many dashboards and reports were automatically created. At the beginning of 2021, we performed a major rework of all dashboards and charts to make sure the right business logic was being used.

Nowadays, our main job is to maintain the dashboards that currently exist, create new visualizations, and do minor adjustments to the existing charts.

Point of Contact: [Ana Paula Lopes](https://open.rocket.chat/direct/analopes.grun).
