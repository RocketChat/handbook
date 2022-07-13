# Login with custom oAuth ( keycloak) shows blank screen

### **Issue Description**

When trying to log in to self-hosted server using custom Oauth authentication customers get a blank screen after entering the Keycloak credentials on the keycloak login page. The app gets stuck there and it shows a blank screen even though it works well on the web.\


![](https://desk.rocket.chat/galleryDocuments/edbsn8e5b50daeceeaa75457ab69330ec470516445e29092c69bdeec46134f1a3f2f36ddd28754982e6b2a9bb34705ee68e3d?inline=true)\


### &#x20;**Solution**

Administration > Settings > oAuth > Custom oAuth > change login style from default to popup.\


![](<../../../.gitbook/assets/image (37).png>)

\
