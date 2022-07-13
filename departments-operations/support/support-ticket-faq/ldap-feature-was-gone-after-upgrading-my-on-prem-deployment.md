# LDAP feature was gone after upgrading my On-Prem deployment



First, be sure that your license is applied correctly to your Workspace. After release 4.X.X, LDAP became an exclusive feature for the "Enterprise" plan.\
\
Go under **Administration > Info** and check for the orange "Enterprise" tag.  \
![](https://desk.rocket.chat/galleryDocuments/edbsnbae20b72171fb5ebcba0a6ab825853b0fbedbf2ce304d377551ac9e39b53d0fec1465f3acc02d2f25964d88d209cf259?inline=true)\


{% hint style="info" %}
**If you don't have the tag, look for one of these probable solutions below.**
{% endhint %}

### &#x20;**1st Scenario**

\
If you have internet access, try to log in to our Cloud and Sync.\


1. Go under **Administration > Connectivity Services**.\

2. Log into **Rocket.Chat Cloud** with the same account used to create your Workspace.\

3. Hit **Sync** button\
   ![](https://desk.rocket.chat/galleryDocuments/edbsneed2dec62a454c62798fb09ea8abed458109528c5bfe20f3b0474cd09bc397b1c99f503fbd89f7ca5497a15dad89d191?inline=true)
4. Check the Info page again.\


### **2nd Scenario**

\
You don't have internet access (Air-Gapped Operation).\


1. If you lost the feature after an upgrade, you must contact our Support Team and ask for an updated License that reflects the version you are using and apply it offline.\

2. Go under **Administration > Info** and click on "**Apply Offline License**"
3. Copy and paste the license that you have been provided![](https://desk.rocket.chat/galleryDocuments/edbsn34a0a06d0038a77a84e097357e64ac0b5ee54243e40fb0914068f03afb41de8cad87e7024e7edfdcd467a2b6b09a50a9?inline=true)
4. Check if the "**Enterprise**" tag is back.
