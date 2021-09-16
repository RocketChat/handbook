---
description: >-
  UTMs are the way we track users coming to our website from external
  sources.They are a set of parameters that can be added to the url to have a
  clear tracking of the user.
---

# UTM's Best Practices

Every time an external source of traffic is referred to our website. That includes \(but is not limited to\):

* **Paid ads and campaigns**
* **Social media posts**
* **Email campaigns**
* **Guest posts**

And so on.

### When **not** to use UTMs?

UTMs should not be used on links inside our website \(i.e. a CTA in one of our product pages\).

**There are 5 elements that can be added to the UTM in order to tag the user:**

* Source \(mandatory\)
* Medium \(mandatory\)
* Campaign \(mandatory\)
* Term \(optional\)
* Content \(optional\)

These parameters will contain information about our traffic, specifying and categorizing the users according to how they got to our website. The terms used should be as simple as possible, in order to make our Google Analytics understandable. The information should be arranged taking into consideration the following:

### **Source**

**Who?**

Where was the user before they got to our website? This parameter should answer the question: _who is sending us this traffic? / where did this user come from?_

**From?**

_Example: google, bing, github, facebook, twitter, instagram, linkedin, newsletter, blogs._

### **Medium**

**How?**

The medium is the way that the user, that was previously on another website, came to Rocket.Chat. It should answer the question: _how did the user get here? / what was the medium that brought the user here?_

_Example: organic, paid-social, cpc/paid-search, email, display, banner, referral._

### **Campaign**

**Why?**

The campaign name should identify the name of the campaign that has brought the user to our website. It should answer the question: _why did the user engage with our website? What was the reason that brought the user to our website?_

_Example:: omnichannel, webinars \(marketing team campaigns\), remarketing, en-lookalikes \(specific target audiences\)_

### **Term**

This parameter is only used on paid search UTMs _\(paid-search, ppc, cpc\)_ to identify the keyword that the user has searched. It should answer the question: _which keyword did the user search to get to our website?_

_I.e: team+collaboration, live+chat, open+source+slack_

### **Content**

This parameter is used mostly for A/B testing and to identify different contents inside the same website. Let’s say we want to test which CTA works best at the end of a newsletter \(Learn More x Click Here\), this is the parameter we’d use to differentiate the traffic coming from the testing.

_To see this parameter on Google Analytics, you need to use the Keyword dimension._

## **UTM do’s and don’ts**

* Create the UTM URL by filling up the blanks on the [URL Campaign Builder](https://ga-dev-tools.appspot.com/campaign-url-builder/). 
* Use lowercase letters at all times. \(✅ `utm_medium=paid-search` ❌`utm_medium=Paid-Search`\). 
* Use hyphens to separate the words, not underscores. 
* Avoid redundancy: if a term is already on the UTM, it shouldn’t appear again \(i.e.: `utm_source=facebook&utm_medium=facebook-post`\) 
* Watch out for what’s been previously done and follow the pattern. If the UTM that’s usually used is `utm_campaign=social`, don’t create a new one with `utm_campaign=social-media`.

### Examples of UTMs:

Post on LinkedIn: _utm\_source=linkedin&utm\_medium=organic&utm\_campaign=social_ 

LinkedIn Ad: _utm\_source=linkedin&utm\_medium=ads&utm\_campaign=09-09-20-webinar-smb-omnichannel_ 

Capterra PPC: _utm\_source=capterra&utm\_medium=ppc&utm\_campaign=review-platforms-paid_ 

Newsletter: _utm\_source=newsletter&utm\_medium=email&utm\_campaign=newsletter-september_

