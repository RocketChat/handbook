# Security Logs ingestion and review

Logs are collected from various sources, such as, applications running in Kubernetes clusters, servers, Google Workspace apps, etc... Here you can find deatails about how logs are collected, processed and reviewed.



### Collection of logs:

Rocket.Chat logs are collected from various sources and centralized in Elasticsearch. The collecting process may happen in two different ways:

1. Through the Elastic Agent native Integration\
   Elastic agent has several native integrations with different apps and system that allows us to collect, parse and ingest logs in a transparent way.
2. Reading information from a custom file.\
   For those applications that are not contemplated in the elastic agent pool of integrations we can read a log file defined in a custom ingesting pipeline. While defining the pipeline you must also determine how the logs will be parsed.

### Filtering and normalization:

Logs are filtered and normalized to remove unnecessary information and convert data into a standardized format. This process is important to assure that meaningless logs are not being stored and using processment and storage that are useful for important security logs and events.

### Parsing and Enrichment:

Parsed logs are enriched with additional context to provide more insights, such as user IDs, device types, or geo-locations.

### Threat Detection:&#x20;

Security rules are defined and implemented to detect potential security threats in the log data.

### Alert Generation:&#x20;

When a security rule is triggered, an alert is generated and sent to designated recipients for further investigation.

### Investigation:

The recipients of alerts investigate and triage potential security incidents based on the available information.

### Incident Response:

If a security incident is confirmed, the appropriate incident response plan is executed.

For more information refer to the internal [Incident Response plan](https://docs.google.com/document/d/17yZJ9oP3OJl3oWYTSNKNeXy54OEr7dn3ldpDKi52Ksc/edit?usp=share\_link)

### Reporting and Analytics:

Reports and analytics are generated from the log data to provide insights into security trends, compliance, and risk management.

### Logs review and retention period.

The review process of SIEM logs stored in Elasticsearch for Rocket.Chat is an ongoing process that involves continuous monitoring, analysis, and improvement to ensure the security and compliance of the Rocket.Chat environment.

The review process involve checking the analytics and model that define the expected amount of logs coming from each system. If any inconsistence is found an alert is generated triggering a deeper review process.

The default retention period is set to 13 months:

* <7 days in Hot Data Tier
* \>7 days <14 days in Warm Data Tier
* \>14 days <3 Months in Cold Data Tier
* \>3 months <13 months in Frozen data tier
* \>13 months in snapshots (not searchable, takes more time and effort to be accessed)

Note these times may be changed depending on the usage and inportance of the log source.

