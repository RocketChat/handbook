---
description: This policy applies to all employees and contractors.
---

# Authentication and Password policies

## Authentication Policy

### Purpose

The Authentication Policy for Rocket.Chat outlines the procedures and guidelines that all employees of the organization must follow to authenticate their identity while accessing Rocket.Chat and its assets. This policy is designed to ensure the security of our organization’s data and communication systems.

### Access

Access to confidential Rocket.Chat data is only allowed after successfully and securely authenticating an individual. Your main account is your rocket.chat email account and serves as your main digital identity. You will receive your account during your onboarding process as well as other, potentially needed digital identities.

You should always use your firstname.lastname@rocket.chat identity. Exceptions apply when you are testing out a service or you specifically want to access the service under a pseudonym. You may not circumvent authentication or use different identities unless this is specifically part of your duties.

### Authentication Methods

In terms of authentication methods, you should a**lways opt for using SSO/SAML** authentication where possible. Since your identity is tied to a Google account, you can also click on the **"Sign up with Google"** button or similar phrasing, in case SAML/SSO is not available. If you get an error when authenticating via SAML or SSO, contact the person who invited you to enable it properly.

**2-Factor (2FA)** or Multifactor (MFA) Authentication is required before accessing critical assets and will be set as mandatory there. For non-critical assets that allows 2FA we still highly recommend it to be set up, since it grants a higher level of security.

For systems that do not support Google Sign Up or SSO/SAML, follow the following Password Policy while creating a password to access the service or account.

## Password & Secrets Policy

* Always use strong passwords, as described e.g. [here.](https://www.fpainc.com/blog/password-guidelines-from-nist)
* Always reset your password if you have suspicion of it being compromised.
* Always keep your passwords in a secure and encrypted location like your password manager (preferred, e.g. ZOHO Vault) or your head.
* Never share your passwords with anyone. Credential sharing is not allowed. An exception to this applies if the password is shared by nature.

Systems that allow password policy enforcement will be configured to expire password after 90 days and only accept passwords that comply with the Password Creation Rule below:

### Password Creation Rules

* Passwords must be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters.
* Passwords must not contain any dictionary words, personal information, or easily guessable patterns.
* Passwords must be unique and not used for multiple accounts.
* Passwords can not be reused in the same system.

### Shared Passwords

Shared passwords & secrets should only be used, if a personal password can NOT be used. Always prefer using your own passwords (tied with your own account/credential). Shared passwords must be stored in an approved secure and auditable password storage system. Our current standard is ZOHO Vault, its integrations are approved (e.g. the browser extension).

Shared Passwords MUST:

* Abide our password policies (complexity, length), unless the target system/use case does not allow this or prescribes a different standard
* Have one or multiple owners, default owner is the creator of the shared password. In Zoho, this is called “Authorizer” or “Owner”.
* Always be maintained in the central storage system. Do not update passwords and keep an outdated password in ZOHO. ZOHO is single source of truth.

Shared Passwords SHOULD:

* Be put in folders (ZOHO: “Chambers”), with a pre-configured set of persons with access. This makes it easier to manage access control.
* Not be exported out of Zoho.

When a person leaves the company, he must transfer ownership of the shared password to a successor. Click on “more actions” → “Transfer Ownership” in ZOHO.

**NEVER** share a password or secret in plain text or via any kinda of communication platform, even Rocket.Chat.

If it is impossible to use the Share Password feature from Zoho Vault and you really need to send the secret via a communication platform you can use specific tools such as [PwPush](https://pwpush.com/). Remember to push only the secret, without any other context about where it will be used or event the username, and set the link with the most restrict expiration settings possible.
