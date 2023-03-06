# Cryptography and Key management

Cryptographic requirements are adressed in the other parts of the subpolicies and must follow the general principles as described by [OWASP](https://www.owasp.org/index.php/Guide\_to\_Cryptography) Cryptography in our products will be described in the product documentation.

On the Rocket.Chat servers you use for business purposes and share sensitive business information, you must set your End-to-End-Encryption key when logging in the first time on a new device and encrypt the relevant channels before sharing the sensitive information.

## Password & Secrets Policy

* Always use strong passwords, as described e.g. [here.](https://www.fpainc.com/blog/password-guidelines-from-nist)
* Always reset your password if you have suspicion of it being compromised.
* Always keep your passwords in a secure and encrypted location like your password manager (preferred, e.g. ZOHO Vault) or your head.
* Never share your passwords with anyone. Credential sharing is not allowed. An exception to this applies if the password is shared by nature.

### Shared Passwords

Shared passwords & secrets should only be used, if a personal password can NOT be used. Always prefer using your own passwords (tied with your own account/credential). Shared passwords must be stored in an approved secure and auditable password storage system. Our current standard is ZOHO Vault, its integrations are approved (e.g. the browser extension).

Shared Passwords must:

* Abide our password policies (complexity, length), unless the target system/use case does not allow this or prescribes a different standard
* Have one or multiple owners, default owner is the creator of the shared password. In Zoho, this is called “Authorizer” or “Owner”.
* Always be maintained in the central storage system. Do not update passwords and keep an outdated password in ZOHO. ZOHO is single source of truth.

Shared Passwords SHOULD:

* Be put in folders (ZOHO: “Chambers”), with a preconfigured set of persons with access. This makes it easier to manage access control.
* Not be exported out of Zoho.

When a person leaves the company, he must transfer ownership of the shared password to a successor. Click on “more actions” → “Transfer Ownership” in ZOHO.
