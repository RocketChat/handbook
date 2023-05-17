# Engineering Important Definitions

### I - Purpose of this document:

Define key concepts that are regularly mentioned by engineering.&#x20;

### II - Key definitions:

**A - Breaking Change** -> Breaking Changes are modifications to code that impact functionality of a Rocket.Chat component and require other people/applications, that are using the affected resources, to make a corresponding change to prevent dependent items from stop working. A few situations that generate breaking changes include, but are not limited to: &#x20;

* Changes to a method signature;
* Changes to the behavior of a method;
* Changes to settings/configuration;
* Deprecated items.

**B - Bug** -> Bugs are defects or miss behaviors experienced by end users on a released version of Rocket.Chat;

**C - Deprecation** -> Process of taking older code and marking it as no longer being useful within the codebase, usually because it has been superseded by newer code, and will be removed from the codebase;

**D - Long Term Support (LTS)** -> Identify the last minor version before a major version, e.g. 2.4 is the last minor version before 3.x. A new major version means that the version introduces breaking changes and requires attention to the upgrade, so we maintain the support of the previous version for a longer time in order to give the user more time to plan and test the upgrade to the new major version;

**E - Beta version** -> A pre-release version of Rocket.Chat. When in the end of the development cycle, the Engineering Team will release a candidate version to be tested internally;

**F - Regression** -> Similar to bugs, but on it affects only beta versions of a release. Regressions are defects encountered on pieces of software/functionality that is **NOT** yet on a released version of Rocket.Chat, i.e., the issue was introduced in the current development cycle.
