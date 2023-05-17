# Images take forever to upload and render while using GridFS for MongoDB 4.X.X<

**Description of the issue:**\
After upgrading to Rocket.chat version **4.X.X.**, MongoDB **4.2.X**  and above some users reported slow image uploads and reduced performance in general.**​**\
The **main reason** is the usage of **GridFS for files uploading**, it's becoming very slow with 60K+ chunks and it takes forever to upload images and a long time for the images to be visible once the image is there.

{% hint style="info" %}
**Note:** GridFS is only sustainable if you are using the Retention Policy and only storing a small number of files per week which is not hefty but it is not recommended by us because it is not scalable.&#x20;
{% endhint %}

\
**Quick Solution:**\
1\. Enter mongo shell ( command example for Docker)

```
docker exec -it mongodb mongo
```

2\. choose rocket chat DB:\


```
use rocketchat
```

2\. After adding an index with the command below, it **goes** back to normal.\
\
db.rocketchat\_uploads.chunks.createIndex( { files\_id: 1, n: 1 }, { unique: true } )

{% hint style="info" %}
**Reference:** [https://github.com/RocketChat/Rocket.Chat/issues/23467#issuecomment-957126927](https://github.com/RocketChat/Rocket.Chat/issues/23467#issuecomment-957126927)
{% endhint %}

\
\
