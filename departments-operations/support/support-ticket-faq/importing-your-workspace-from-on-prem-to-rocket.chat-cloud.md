# Importing your workspace from on-prem to Rocket.Chat Cloud

This document describes the procedure to perform the cloud import and a few considerations before proceeding with it.\
\
This process is intended to help users get their on-premise instance migrated to the Cloud if they decide to use our Cloud services.\
\
In order to start the migration, there are a couple of things to consider.\
1\. The origin environment needs to be on a stable version.\
2\. There are a couple of tools and dependencies needed, so the origin server needs to have an up-to-date OS.\
3\. On the origin environment we need to download the Cloud Import Tool. [https://s3.amazonaws.com/cloud.rocket.chat/tools/cloudImport/linux-amd64/cloudImport](https://s3.amazonaws.com/cloud.rocket.chat/tools/cloudImport/linux-amd64/cloudImport)\
4\. The cloud import tool uses mongo db tools to perform a db dump. So make sure you have them installed. [https://docs.mongodb.com/database-tools/installation/installation/](https://docs.mongodb.com/database-tools/installation/installation/)5. You need to have a could workspace already set up and a cloud account in order to run the cloud import tool. Check the guide on how to create a Cloud account [https://docs.rocket.chat/rocket.chat-saas/cloud-account](https://docs.rocket.chat/rocket.chat-saas/cloud-account).6. **IMPORTANT:** The destination server **must NOT be in use**, only set up and we need to flag it for import, you can create a trial Workspace and we will take care of flagging it after you let us know.   \
\
**Using the cloud import tool**\
\
Once the cloud import tool has been downloaded you can use it to start the import.\
You can use the cloud import with the below command:\
\
./cloudImport-\
connectionstring="mongodb://127.0.0.1:27017/rocketchat" --\
database=rocketchat\
\
Use MONGO\_URL that you normally pass to Rocket.Chat as the connection string. This tool does have a pop-up window to a browser. So if you are running on a server environment where you can't do that you'll need to first get a token to use. You can do that with:\
\
curl -L -X POST\
'[https://cloud.rocket.chat/api/v1/login'](https://cloud.rocket.chat/api/v1/login') \\\
\-H 'Content-Type: application/json' \\\
\--data-raw '{ "email": "cloud-registered-email", "password": "password" }'\
\
This in turn should return the token: {"token":"ey..."} That ey.. value is the token, is a hash, and needs to be copied so it can be passed as an argument on the cloud import command the option is\
\--token="{token}"\
\
If you want to run with zero downtime, you can pass the flag\
\
\--final=false\
\
on first import. It will import. Then you can transition your users over and validate. When ready to finish you can run the cloud import command one more time with\
\
\--final=true\
\
and it will import without shutting down the remote server. Settings changed during this diff won't be taken. For troubleshooting purposes, you can use the flag\
\
\--debug=true\
\
in order to have an output with feedback about how the process is going and which step is taking. Example of a cloud command\
\
./cloudImport--connectionstring="mongodb://127.0.0.1:27017/rocketchat"\
\--database=rocketchat\
\--token="ey..."\
\--final=false\
\--debug=true\
\
&#x20;**Setting things up on cloud** \
\
After the import tool is done, it should have uploaded everything to our Cloud. From this point, we will proceed to import everything and get the flagged destination set up. Once it is done you can access it and make sure everything is ok. After everything has been completed, we need to change the DNS entry to point the traffic to the cloud instance. This process may depend on what you have configured as your DNS provider. Finally, if this is not a final import, just repeat the process and everything should be good to go.\
\
**Snaps**\
\
There are a few considerations when importing from a snaps deployment.\
\
1\. The database is not called rocketchat, it is called "parties" instead, so please note this when trying the connection string and the database (it would look like\
\--connectionstring="mongodb://127.0.0.1:27017/parties"\
\--database=parties\
2\. When trying to install the mongo dump you may run into issues with it if you install it manually. You can get the mongodump that is included in the snap is by doing:\
export PATH=$PATH:/snap/rocketchat-server/current/bin
