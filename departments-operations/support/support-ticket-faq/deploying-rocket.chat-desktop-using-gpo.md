# Deploying Rocket.Chat Desktop using GPO

Download the latest desktop app to a shared with everyone folder on your windows server, Create a script folder share it with everyone and write a script that will run each time a user logs in, ie.: rocketchatdeploy.bat:\
\
if not exist %LOCALAPPDATA%\Programs\rocketchat\ (goto GO) else (goto STOP):GO\
if not exist %APPDATA%\Rocket.Chat\ md %APPDATA%\Rocket.Chat\\\
copy /y \\\ad01\Softwares\config.json %APPDATA%\Rocket.Chat\\\
msiexec /i \\\ad01\Softwares\rocketchat-setup-3.4.0.msi /quiet\
:STOP\


**config.json** = you can customize the server URL on this file, so when you deploy to all machines, they will be pointing to the same and correct rocket.chat server.**ad01** = your server name, remember to share the folder with everyone.\
Attach it to a GPO:\
\
![](https://desk.rocket.chat/galleryDocuments/edbsn7babc8dd72338aaa2c3e079ee114da763fd1c166ef063090d538aa0867179d3329f47ca476a23834ed206441e53a0f2f?inline=true)\
\
That's it, the summary would be:\
if the folder %APPDATA%\Rocket.Chat\ doesn't exist, it will be created then the config.json file will be copied to the folder, and after that, Rocket.Chat app will be silently installed.
