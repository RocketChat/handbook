# Marketing Leads Attribution Model

**Marketing is responsible for bringing new leads and correctly attributing and enriching them to be sent to the sales team. The data flow starts when a new contact enters Hubspot and from this point, its origin and interest must be clear for the salesperson to work with the lead.**

## **Lifecycle Stage and Sales Status**

To identify and assign workflows for sales processes, we have in CRM and Hubspot the fields for Stages and Status**.** 

**Lifecycle Stages \(Lead, MQL, SQL, Opportunity, Customer\):** focused on letting us to know the maturity of the contact, his relationship with sales.   
**Sales Status \(New, In Progress, Disqualified, Refer to Partner, Customer\):** helps us to know about our relationship with the contact, if already in progress, etc. This is important to know for how long sales is working with the contact and help us to create strategies around it.   
**Current Status \(Active, Inactive\):** can be used in all times for contacts, meaning if there is any active sales/customer relationship or not.

Both contacts and accounts have stages and status. An Account stage and status is defined by the most advanced contact stage/status. Stage Client predominate on others. 

If we get new contacts to existing accounts, they will follow a brand new process, being recognized as a MQL/PQL and human interaction to understand if a new sales opportunity will be needed.

### **Lifecycle Stage definitions** 

Defined by workflows created in Hubspot  
****Location in Zoho: LEADS MODULE  
Location in Hubspot: CONTACT MODULE

* **LEAD:** Description: Contacts that have interest in knowing more about us but are not sales ready. Identification: 
  * Has Email AND Contact Source is any of: Events, Livechat, Livechat \(Offline\), Webinar, Outsourced, Enrichment or Download
  * Has Email AND  Website Form is equal to Newsletter
* **MQL:**  
  Description: Contacts with sales or partnership interest or with a high ICP score \(Ideal Customer Profile- based on country, industry and company size\)  
  Identification: 

  * ICP Score &gt; 73 AND Email doesn’t contain Personal Domains AND Event contains Webinar
  * Form Submission of Sales Contact Form
  * Form Submission of Schedule a Demo
  * Form Submission of Partnership Form
  * Form Submission of Partner Opportunity Registration
  * Contact Source is any of Technology Review or  Referral

  Automation: Every time the lifecycle status change to MQL, a task is assigned to the owner of that Lead in Zoho

Location in Zoho: CONTACT MODULE  
Location in Hubspot: CONTACT MODULE 

* **PQL \(MQL\):**  
  Description: Product led contact that fits our Ideal Customer Profile.  
  Identification:

  * ICP &gt; 55 AND Acquisition Type is Product Led AND Email doesn’t contain Personal Domains
  * ICP &gt; 55 AND System Admin is True AND Email doesn’t contain Personal Domains \( Contacts with other Acquisition types that after a while try the product and should be recognized as PQLs because of their ICPscore\)

  Automation: Every time the lifecycle status change to MQL, a task is assigned to the owner of that Lead in Zoho  
  ****

* **SQL:** Responsible: Sales Description: Someone qualified by SDRs through Email or Phone.  Identification: 
  * Deal Stage is Pre-Pipe ****
* **OPP:**  
  Responsible: Sales  
  Description:Salesperson “Closer” is in touch with the contact developing business opportunities.  
  Identification: 

  * Deal Stage isn’t Pre-Pipe or Closed Won

  \*\*\*\*

* **CLIENT:** Responsible: Sales Description: Have become a customer. Identification: 
  * Deal Stage is Closed Won

###  **Sales Status Definition:**

Workflows to update from “New” are created in Zoho

* New: When the contact changes its lifecycle stage, it always move to "New" meaning that the contact is new to the Sales/CS responsible for the current stage. 
  * Lifecycle Stage: Lead, MQL/PQL, SQL, Opportunity, Customer
  * Updated: Automatically by Default
* In Progress: After any engagement of email, phone, task
  * Lifecycle Stage: MQL/PQL, SQL, Opportunity
  * Updated: Automatically with 1st Task Completed in each Lifecycle Stage
* Refer to Partner: Not for direct Sales 
  * Lifecycle Stage: MQL/PQL, SQL
  * Updated: Manually By SDR when he starts working with contact  
* Disqualified 
  * Lifecycle Stage: MQL,PQL, SQL, Opp
  * Updated: Manually by SDR or Closer or Automatically by Deal Cancelled/Lost
  * Disqualified Reason: 
    * Bad Timing: Contact in future and Nurturing
    * No Response: Stopped to reply
    * Community
    * Not a Priority
    * No Fit
    * Junk Lead
    * Competitor

## **Additional Fields**

### Current Status

Workflows updated at Zoho.  
****This field is updated based on the sales relationship with a contact regarding ongoing negotiations or customer relationship. Leads, Contacts and Accounts can be classified as Active or Inactive.

_Leads module at Zoho CRM \(In future\)_   
Lifecycle Stage: Lead, MQL   
Current Status Active: Leads with Sales Status New, In Progress or Refer to Partner   
Current Status Inactive: Leads with Sales Status Disqualified   
Update: Automatically based on Sales Status

_Contacts module at Zoho CRM_   
Lifecycle Stage: MQL, SQL, Opportunity   
Current Status Active: Contact with Sales Status New, In Progress or Refer to Partner   
Current Status Inactive: Contact with Sales Status Disqualified   
Update: Automatically based on Sales Status  
Lifecycle Stage: Customer   
Current Status Active: There is an active deal OR an open renewal OR active workspace that is not on trial.   
Current Status Inactive: Customer doesn’t have any open deal or active contract or active workspace.   
Update: Automatically based on workflows at CRM

_Accounts_   
Follow the current status of its contacts, giving priority to Active. Update: Automatically based on workflows at CRM

### **Acquisition Type and Source:**

Acquisition Type Inbound, Outbound and Partner are updated through Hubspot Workflow  
Acquisition type Product are updated from Fleetcomand and sent to Hubspot 

| **Acquisition Type** | **Source** |
| :--- | :--- |
| Inbound | Website Form, Webinar, Livechat, Livechat\(Offline\), Support, Download, Technology Review, Referral, Events |
| Outbound | Enrichment, Outsourced |
| Partner | Referral |
| Product Led  | Community, SaaS |

## **Third Level Attribution**

### **Website Form: Single Line**

When the source is Website Form, this field is obligatory and its value will indicate which field the registration came from. Ex: Schedule a Demo 

### **Event: Single line** 

When the source is Webinar or Event this field is used to identify which event or webinar.  
Field format: EventFormat: Month-Day-Year-Name  
Example: Webinar: 08-24-21-Hybrid-Work-Work

### **Referred by: Drop Down**

_Options: Client, Employee, Partner  
When the source is Referral._

### **Partner Name: Single Line and Association Field**

When the source is a Partner, the ideal is to identify which Partner is responsible, for now we are able to bring that information in single line format and as the Partner team receives the information in the qualification process, when they create the association the info goes back to Hubspot. 

### **First touch converting campaign: Single Line**

Automatically filled with details of which campaign brought the lead to Hubspot.  
Ex: ads, content download, social media, page views

### **Last touch converting campaign: Single Line** 

Automatically filled with details of which campaign the lead last converted.  
Ex: ads, content download, social media, page views

### **Recent Conversion**

This field brings the most recent conversion that a contact had, it could be a form submission to subscribe for a webinar, download a eBook or ask to become a partner.   


