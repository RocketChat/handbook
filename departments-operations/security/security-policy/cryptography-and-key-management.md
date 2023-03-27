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

* Be put in folders (ZOHO: “Chambers”), with a pre-configured set of persons with access. This makes it easier to manage access control.
* Not be exported out of Zoho.

When a person leaves the company, he must transfer ownership of the shared password to a successor. Click on “more actions” → “Transfer Ownership” in ZOHO.\


## Encryption Keys

### Encryption Algorithm

Rocket.Chat requires the use of strong encryption algorithms for protecting sensitive information. Encryption algorithms must meet the industry standards and best practices, as outlined by OWASP Cryptography guidelines. The type, strength and quality of the encryption algorithm used must be appropriate to the level of sensitivity of the data being protected.

### Encryption for Mobile/Removable Media and Communication Lines:

All information transported by mobile or removable media devices or across communication lines must be encrypted using a secure encryption algorithm. Rocket.Chat will ensure that all endpoints, including mobile devices, comply with this policy.

### Key Management

#### Purpose&#x20;

The purpose of this policy is to establish guidelines for the management and protection of encryption keys used in Rocket.Chat systems. The policy aims to ensure that cryptographic keys are generated, stored, protected, and distributed securely and effectively.

#### Scope&#x20;

This policy applies to all encryption keys used in Rocket.Chat systems, including but not limited to, symmetric encryption keys, asymmetric encryption keys, and digital certificates.

#### Key Management Practices&#x20;

Rocket.Chat recommends the following key management practices:

* **Key Generation:** All cryptographic keys must be generated using a secure random number generator and with sufficient entropy.
* **Key Distribution:** Cryptographic keys must be distributed securely using a secure communication channel.
* **Key Storage:** Cryptographic keys must be stored securely and only authorized personnel should have access to them. The storage mechanism must use strong encryption and access controls to prevent unauthorized access, modification, or disclosure.
* **Key Usage:** Cryptographic keys must be used only for their intended purposes and in accordance with the policy and best practices.
* **Key Revocation:** Cryptographic keys must be revoked immediately if they are lost, compromised, or no longer needed. The revocation must be communicated to all parties involved in the key exchange.
* **Key Backup and Recovery:** A backup and recovery plan must be in place for cryptographic keys. The plan should include a process for backing up keys to a secure location and testing the recovery process to ensure its effectiveness

## Roles and Responsibilities:&#x20;

Rocket.Chat will ensure that the policy is implemented by assigning roles and responsibilities to its employees. The following roles and responsibilities will be assigned:

* Implementation of the policy: The Security Officer (SO) will be responsible for implementing the policy and ensuring its effectiveness.
* Key Management: Each person is responsible for the management of the keys they generate for personal use. For team or company-wide use, the manager of the team requiring the key is responsible for it's management.

