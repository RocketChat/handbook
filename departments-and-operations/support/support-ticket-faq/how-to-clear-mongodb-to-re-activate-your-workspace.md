# How to clear MongoDB to re-activate your workspace

This is the procedure on how to clear MongoDB data in cases where you have mismatching information and your workspace isn’t working as expected.

### &#x20;Reason/Causes:

You can’t access your workspace and needs to re-register after obtaining a new workspaceToken.

### Environment

Self-hosted.

### Steps on how to clear MongoDB to re-activate your workspace:

\
1\. Enter the mongo shell with the command ( this command depends on your deployment type and is different in the case of Docker):

> mongo shell
>
>

&#x20;2\. Chose rocket chat DB:

> use rocketchat

3\. Run the following query ( you should receive successful output where will be statements that a few entries were successfully changed ):

> db.rocketchat\_settings.remove( {"\_id": /Cloud\_/} )

4\. Restart  Rocket.Chat server (this is needed for the server to get the refreshed changes on the collection.

5\.  Request for the token from the support agent.

&#x20;After all, you will need to pass the registration token which we provide for the workspace under Administration -> connectivity services.

\
