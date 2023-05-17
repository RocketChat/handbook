# Error: Workspace is missing

\
**Workspace is missing**\


\
Sometimes, customers could try to install an app from the RC server marketplace and encounter the below error message:\
\
Sadly, an error occurred while processing your request.Request ID: 6c696a06-6869-42cc-a1f1-ba8681b8c1af\


```
Error Code: 264
Error: workspace is missing
```

\
To fix this issue, we will need to re-initiate a connection from the RC server to our end. To do this, kindly do the following;\
\


* Connect to their rocketchat DB and clear the Cloud info stored in the DB using the command: \

* `db.rocketchat_settings.remove( {"_id": /Cloud_/} )`

the result should be looking like this:

* ![](https://desk.rocket.chat/galleryDocuments/edbsnb2fdf93210d85759c70f92859f8b113c055fb6be4e5dbb03b0e3859c76846b7110d45b77c9a074c619bf33bd48703caf?inline=true)\

* **RESTART** the RC server\


\
After we have their feedback that the above has been done successfully, search for the workspace in Fleet Command, click on the dropdown next to Edit and re-generate the registration token using the option "Regen Initial Token" ( see screenshot below).\
\
![](https://desk.rocket.chat/galleryDocuments/edbsn2ef8af17215d85a8c33655c6ed0c3e144a1bb04e6bff90833a30182f95bfc1f331b967e5934fa833145e8cc268c3bfb8?inline=true)\
\
Then, go to the workspace details page in Fleet Command and copy the registration code.![](https://desk.rocket.chat/galleryDocuments/edbsncbabf46e8b9ba6d535bd3aebe3f06ee58c7f471e3b8b01b1a645cd0bfe85ebe0b0a35cf919f974569a363630980c7b9a?inline=true)\
\
This code should be entered into the empty **TOKEN** field in the Connectivity Services page in the RC server, and then click on **Connect**.\
\
![](https://desk.rocket.chat/galleryDocuments/edbsn2bd9252648b5929d84ff7912d8d93001cb752200ce644fedbf90e3614f09d1a7af734a5327fc40547255a117905069a1?inline=true)\
Then try installing the apps from the Marketplace again. It should be installed fine now without any error.\
P.S.: If the token field is not displayed on the Connectivity Services page, then either the DB query was not run correctly, or the RC server was not restarted. Both actions need to be done correctly.
