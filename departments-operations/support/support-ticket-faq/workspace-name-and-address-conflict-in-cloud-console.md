# Workspace name and address conflict in Cloud console

In a case where the DB for a prod server was cloned into the DB for the staging server, it could cause a conflict with the workspace name and address in the Cloud console. One issue could be that when the admin hit Sync in the staging env, it could cause the workspace name and address for the prod env to change (that is, look the same as the staging env) in the Cloud console.\
\
The resolution: Unregister the staging server with the Cloud console by un-setting the Cloud\_Workspace\_Client\_Id in the staging env DB. This can be done by connecting to the DB and running the command: _**`` `db.rocketchat_settings.remove({"_id": "Cloud_Workspace_Client_Id"})`, ``**_ then restart the server and re-register it in the Cloud console. Finally, the license has to be re-provisioned on FC.
