# FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory

When rocket chat service was crashed with the following error: \


### ![](<../../../.gitbook/assets/image (35) (1).png>)FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory 

Most probably it is because the last time you tried updating/upgrading **Node** with a different package manager than used before like **npm/nvm/apt-get** etc. As a result, the location can be changed.\


&#x20;

### **It is easy to check by the following commands:**

which node - to check the location where the system thinks the current node is located

node -v to check the node version which is located in that location.

which -a node   - will show you all node locations

&#x20;

### ![](https://img.zohostatic.com/zde/static/images/file.png)**NOTE:** Rocket.chat service is using by default the following location: **/usr/local/bin/node** 

**1.** If the output shows you an old version it means you will need to upgrade or reinstall the node in the correct location with the method you have used during installation.\
\
**2.** Or change a simlink: **ln -s /usr/bin/..... /usr/local/bin/node**

In the example on the first position should be the directory from the which node command output and on the second one  **/usr/local/bin/node**
