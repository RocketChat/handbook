# Athena Naming Conventions

### **Databases**

All the databases should be the same name as the source system, all the names should be in lowercase and separated by underscore.

### **Tables**

All the tables should be the same name as the source module and be under the database which corresponds to your system, all the names should be in lowercase and separated by underscore.

Tables that tagged with a "**\_s**" contains sensitive information hided.

### **Views**

All the views should follow the template below:

![](<../../../../.gitbook/assets/image (25).png>)

<mark style="color:red;">Red</mark> = all views should contain the prefix "**vw**";\
<mark style="color:orange;">Orange</mark> = indicates the the periodicity of the table (d = daily, w = weekly, m = monthly, y = yearly);\
<mark style="color:purple;">Purple</mark> = indicates the owner of this view, the owner should be identified by his initials;\
<mark style="color:green;">Green</mark> = subject of the view, and should indicate with kind of data we can find in this view.





