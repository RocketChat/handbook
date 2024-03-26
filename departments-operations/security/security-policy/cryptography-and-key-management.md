---
description: This policy applies to all employees and contractors.
---

# Cryptography and Key management

Cryptographic requirements are adressed in the other parts of the subpolicies and must follow the general principles as described by [OWASP](https://www.owasp.org/index.php/Guide\_to\_Cryptography) Cryptography in our products will be described in the product documentation.

On the Rocket.Chat servers you use for business purposes and share sensitive business information, you must set your End-to-End-Encryption key when logging in the first time on a new device and encrypt the relevant channels before sharing the sensitive information.

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
