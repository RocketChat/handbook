# File uploads very slow after migration to wiredTiger



This issue only occurs when the storage type is GridFS and can be resolved by re-creating the index.\
\
For docker installation, use the below commands to create the index:\


1. docker exec -it mongodb mongo\

2. use rocketchat\

3. db.rocketchat\_uploads.chunks.createIndex( { files\_id: 1, n: 1 }, { unique: true } )
