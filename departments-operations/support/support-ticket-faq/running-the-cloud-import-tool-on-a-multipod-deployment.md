# Running the Cloud import tool on a Multipod deployment

### **Problem**

In some cases where the client has a multipod-deployment, the tool may get stuck and although it won't show any errors, it won't progress on the import process.

\


\


### **Environment**

RC on Docker deployments with more than one pod.

\


\


### **Cause**

The main cause of the issue is that the tool fails to connect to the MongoDB, the tool does not diferenciate this, thus, the process will just never start since the connection to the MongoDB is never established.

Specific scenerios and solutions are given below:

\


### **Fix**

Make sure you enter the container and download the import tool inside of the container and execute the tool from there.

In case the user would like to run the tool form outside the container, they will need toinstead use the IP of the database container in the connection string

Alternatively if the user wants to run the tool from a different container, they need to make sure to use the correct name of the DB container.

\


### **Useful commands:**

_docker ps_ (shows the current containers)

_docker-compose exec mongo bash_ (mongo being the name of the service in the container)

_docker inspect mongo | grep "IPAddress"_ (shows the external IP of the container)
