# How to set up Nginx HTTP to HTTPS redirection (Default settings)

In case You decide to use this example, place the two config files separately inside /etc/nginx/sites-available and create a symlink for them inside /etc/nginx/sites-enabled (please temporarily remove symlink for your previous configs inside /etc/nginx/sites-enabled . No need to remove them completely)





1\. First file name **"Default"**\
\


1. &#x20;   server {
2. &#x20;       listen       80 default\_server;
3. &#x20;       listen       \[::]:80 default\_server;
4. &#x20;       server\_name **Your\_server\_address.com**
5. return 301 https://$host$request\_uri;
6. location /{
7. proxy\_pass http://localhost:3000;
8. proxy\_http\_version 1.1;
9. proxy\_set\_header Upgrade $http\_upgrade;
10. proxy\_set\_header Connection "upgrade";
11. proxy\_set\_header Host $http\_host;
12. proxy\_cache\_bypass $http\_upgrade;
13. }
14. &#x20;   }&#x20;

\
\
2\. Second file name "**https.conf"**\


1. \# HTTPS Server
2. server {
3. &#x20;   listen 443 ssl;
4. &#x20;   server\_name **Your\_server\_address.com**;
5. \

6. &#x20;   \# You can increase the limit if your need to.
7. &#x20;   client\_max\_body\_size 200M;
8. \

9. &#x20;   error\_log /var/log/nginx/rocketchat.access.log;
10. \

11. &#x20;   ssl\_certificate your full cheined certificate location&#x20;
12. &#x20;   ssl\_certificate\_key your SSL certificate key location
13. &#x20;   ssl\_protocols TLSv1 TLSv1.1 TLSv1.2; # dont use SSLv3 ref: POODLE
14. \

15. &#x20;   location / {
16. &#x20;       proxy\_pass http://localhost:3000;
17. &#x20;       proxy\_http\_version 1.1;
18. &#x20;       proxy\_set\_header Upgrade $http\_upgrade;
19. &#x20;       proxy\_set\_header Connection "upgrade";
20. &#x20;       proxy\_set\_header Host $http\_host;
21. proxy\_cache\_bypass $http\_upgrade;
22. \

23. &#x20;   }
24. }
