# Data Lake

### **What is the Data Lake?**

A data lake is a centralized repository that allows you to store all your structured and unstructured data at any scale. In our infra we are collecting data from the systems:\
\
\- Xero\
\- Conta Azul\
\- Stripe\
\- Zoho CRM\
\- Clickup\
\- Github\
\- 360 Dialog\
\- MongoDB

### Purpose and Objective

Ensure the right data is in the right place at the right time, to empower Rocketeers with data and propel the company to be more data-driven.

Guaranteeing the data quality and data governance across our platforms.

### Infrastructure

The Data Lake is based in AWS, below the tools that we current use:\
\
\- AWS Lambda (for data treatment and data extraction)\
\- Cloud Watch (for scheduling the AWS Lambda execution)\
\- S3 (store all the raw data and treated data)\
\- Athena (query the data stored in S3)\
\
Check in the [Data Platform](https://github.com/RocketChat/Rocket.Chat.DataPlatform) repository in Github to see the full documentation of the scripts. To a complete view of the current infrastructure you should check the [Data Infrastructure](https://whimsical.com/data-infrastructure-HWkBGEJeQmbiMLdNwVwfTT) flow.

### How to use the Data Lake?

We've prepared a documentation of how to use the Data Lake, you can check this presentation [here](https://docs.google.com/presentation/d/1Gs5ONrP4ViKUdAeQtKcZOaHPrCLwQHmgcaptRc2o16M/edit?usp=sharing). Due to special needs for the Product Data we decided to create a different flow for the Product team, the full documentation you can find [here](https://docs.google.com/document/d/1-1QUJuHqlreYmhmktwKuO2PAA6YhdxBoeMaxYBPrfEA/edit?usp=sharing).\
\
For all the teams that have interest in use the Data Lake or to collect more data from different databases the Data & Analytics team offer the full support, feel free to get in touch with Alan Wright.&#x20;

### Technical Documentation

* How to create new tables in Athena? (WIP)
* How to import tables/databases from Athena in Zoho Analytics? (WIP)

