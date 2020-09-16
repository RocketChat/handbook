---
description: >-
  A webinar is a video workshop, lecture, or presentation hosted online where
  only one side has access to the streaming of content.
---

# Webinar Process

Any Rocket.Chat team member can host a webinar with the Marketing Team help, but the definition of dates and availability is in charge of the marketing team. After approval, from that date to the webinar, four weeks of preparation are requested.

**Before Webinar - Registration and Promotion**

**Ideation and Request**

1. Decide on the Webinar Format \(Q&A, AMA, Presentation, Conversation\)
2. Choose:
   1. Topic
   2. Duration of webinar
   3. Desirable dates, if any
   4. Speaker name\(s\), Linkedin Profile\(s\), Picture\(s\) and Mini Bio\(s\)
   5. Target Audience \(Country, Age, Job Seniority, Job Title, Company Size, Industry\)
   6. Language of webinar
   7. Create a briefing that has the primary goal of the webinar and what will be discussed.
   8. Define 5 keywords for the topic
3. Research about outreach partners
   1. Inform Who
   2. What is the suggested outreach partnership
4. Create a request for a webinar in [ClickUp](https://app.clickup.com/4207297/v/l/6-31347054-1?pr=3057758) with Inbox Status

**Approval**

1. The host will be directly notified to chose an available date
2. The host will introduce the organization to the outreach partner if payment is necessary, budget needs to be approved first with VP of Sales and General Manager

**Registration**

_Performed by the Marketing Team_

1. Create a list for attendee subscription in Zoho Campaigns
2. Create a [new contact form](https://rocket.chat/wp-admin/admin.php?page=wpcf7%5D) in Wordpress with “Webinar + Name” in the title

**a. Form:**

`<div class="forms-rocket">`

`[hidden Lead_Source default:"Webinar"]`

`[hidden Website_Form default:"Webinar"]`

`[hidden Lead_Status default:"Not Qualified"]`

`<label for="firstName">FIRST NAME`

`[text* First_Name id:firstName class:inputrocket placeholder"Type your first name"]`

`</label>`

`<label for="lastname">LAST NAME`

`[text* Last_Name id:last_name class:inputrocket placeholder"Type your last name"]`

`</label>`

`<label for="email">EMAIL ADDRESS`

`[email* Email id:email class:inputrocket placeholder"Type your email address"]`

`</label>`

`<label for="Phone">PHONE</label>`

`[intl_tel Phone id:phone class:inputrocket]`

`<label for="company">COMPANY`

`[text Company id:company class:inputrocket placeholder"Type your company name"]`

`</label>`

`[hidden g-recaptcha-shared default:"c0d27634-5093-4c80-908d-b629abe71662"]`

`<span class="texto-form-webinar">By submitting this form, you are confirming you have read and agree to our <a href="/terms/"><b>Terms</b></a> and <a href="/privacy/"><b>Privacy Statement</b><a/>.</span>`

`[submit id:formsubmit class:btnrocket "Register"]`

`</div>`

**b. Mail:**

To: wordpress@rocket.chat

Subject: Webinar + Name of Webinar

`Message: [Lead_Source]`

`[Website_Form]`

`[Lead_Status]`

`[First_Name]`

`[Last_Name]`

`[Email]`

`[Phone]`

`[Company]`

`[g-recaptcha-shared]`

**c. API integration:**

Send to API: Check  
Base URL: [https://mail-contact-form.rocketchat.now.sh/campaign/addcontact](https://mail-contact-form.rocketchat.now.sh/campaign/addcontact)

Input type: json

**Method: POST**

`JSON Template: {"listkey":"add-here-list-key-from-zoho-campaigns","contactinfo":{"firstName":"[First_Name]","lastName":"[Last_Name]","email":"[Email]", "phone":"[Phone]", "company":"[Company]", "Website_form":"[Website_Form]", "Lead_Status":"[Lead_Status]", "Lead_Source":"[Lead_Source]"}}`

1. Generate the Live Streaming in [Streamyard](https://streamyard.com/)
2. Add the webinar with all details in [WordPress](https://rocket.chat/wp-admin/edit.php?post_type=webinar_category)
   1. Use provided a description to create event
   2. Use shortcode from the contact form to add the subscription form
   3. Review and Publish

**Promotion**

Once the webinar is set, the marketing team will work on promoting the event.

1. Create a media kit for the event with Facebook, Linkedin, and Twitter format
2. Schedule Social Media Ad Focused on Target Audience 3 weeks before the webinar
3. Schedule Social Media Posts for current Audience in Linkedin, Facebook, and Twitter
4. Publicize Event in Newsletter
5. Publicize Event through E-mail Alert - Opt-in list of people who have asked to be notified of upcoming webinars.
6. Publicize Event with Outreach Partner \(Optional\)
7. Create flow to remind attendees of Event in Zoho Campaigns
   1. _1 reminder 3 weeks prior to event_
   2. _1 reminders 2 weeks prior to event_
   3. _2 reminders 1 week prior to event_
   4. _1 reminder 1 day prior to event_
   5. _1 reminder 0 days prior to event_

**During Webinar**

1. Login in: [https://streamyard.com/broadcasts](https://streamyard.com/broadcasts)
2. The transmission will be available on Youtube, LinkedIn \(Event Page or Profile Page\) and Facebook live
3. The host shows “welcome” banners or slides on the screen
4. The presenter can use visual aids, like a well-designed slide deck, to summarize key points.
5. The presenter can interact with audience members by generating questions, chats, feedback captures, and question prompts to ramp up engagement.
6. The host can share the Landing Page related to the topic during the Livestreaming
7. Finalize answering all questions and being available for further inquiries via email

**Follow up After Webinar**

The marketing team will be responsible for content generation after the event.

1. Two Follow up emails are sent to attendees via Zoho Campaigns providing a link to view the webinar record and download presentation slides \(in case of Presentation Format\). CTA to schedule demo can be included.
2. Webinar recording link with Thumbnail will be added to the Webinar Page in WordPress.

