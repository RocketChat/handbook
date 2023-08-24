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

In terms of authentication methods, you should always opt for using SSO/SAML authentication where possible. Since your identity is tied to a Google account, you can also click on the "Sign up with Google" button or similar phrasing, in case SAML/SSO is not available. If you get an error when authenticating via SAML or SSO, contact the person who invited you to enable it properly.

2-Factor (2FA) or Multifactor (MFA) Authentication is required before accessing critical assets and will be set as mandatory there. For non-critical assets that allows 2FA we still highly recommend it to be set up, since it grants a higher level of security.

For systems that do not support Google Sign Up or SSO/SAML, follow the following Password Policy while creating a password to access the service or account.

## Password Policy

While creating passwords to access company assets we recommend the employees to use Password Wallets, preferred [Zoho Vault](https://vault.zoho.com/app#/login) (using your rocket.chat email to access Zoho).

Set up a strong Master Password your wallet and enable 2FA. Refer to the Password Creation Rules.

Remember also to change your password periodically. In the case of a password leak or exposure, change it immediately and report the fact to the Security team.

Systems that allow password policy enforcement will be configured to expire password after 90 days and only accept passwords that comply with the Password Creation Rule below:

### Password Creation Rules

* Passwords must be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters.
* Passwords must not contain any dictionary words, personal information, or easily guessable patterns.
* Passwords must be unique and not used for multiple accounts.
* Passwords can not be reused in the same system.

### Shared secrets

You should always avoid using shared accounts, but in the extreme case where it is needed (or if you need to share another kind of secret among a team or peers), do it using the Share Password feature of Zoho Vault. **NEVER** share a password or secret in plain text or via any kinda of communication platform, even Rocket.Chat.

If it is impossible to use the Share Password feature from Zoho Vault and you really need to send the secret via a communication platform you can use specific tools such as [PwPush](https://pwpush.com/). Remember to push only the secret, without any other context about where it will be used or event the username, and set the link with the most restrict expiration settings possible.
