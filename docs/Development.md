---
title: 'Development'
---

MyCompany - is a  free open-source business management system. We welcome developers who want to contribute to the evolution of the product!

#### To add your developments to the **[MyCompany](https://mycompany.lsfusion.org/en/)** **code **you need to follow the below steps:

  

Create a fork of the MyCompany repository for your GitHub account

Log in to **GitHub**, go to the MyCompany repository (**<https://github.com/lsfusion-solutions/mycompany.git>)** under your user, and click **Fork**. 

  

![](attachments/1802748/1802764.png)

  

This automatically creates a linked copy of the MyCompany repository in your account.

  

![](attachments/1802748/1802765.png)

Create a new project in Intellij IDEA from the GitHub repository

![](attachments/1802748/1802766.png)

Choose the MyCompany fork from available on your GitHub account if detected by IntelliJ IDEA 

![](attachments/1802748/1802768.png)

Or 

![](attachments/1802748/1802767.png)

Insert the address of the repository created in your GitHub account into the connection string

![](attachments/1802748/1802769.png)

  

 Make sure you connect to your repository

Select a task to implement on the primary repository

Navigate to the primary repository and select from the ISSUES list the task you want to implement, and then examine its statement.

![](attachments/1802748/1802759.png)

  

Create a branch in the IntelliJ IDEA for the selected issue

Select **Branches** from the Git IntelliJ IDEA menu. 

  

![](attachments/1802748/1802771.png)

  

If you already have several branches in your repository, you need to create them only from the Local master branch. Otherwise, there will be a lot of files in the changes and the architect who will revise the code will simply reject your changes!

![](attachments/1802748/1802772.png)

Make code changes

Make sure you're in your new branch.

![](attachments/1802748/1802756.png)

Make your changes to the code.

Commit

Once you have made the changes, you should commit them.  

  

![](attachments/1802748/1802755.png) 

  

It is obligatory to add a commit message. 

  

![](attachments/1802748/1802754.png)

Replace code from parent repository

 In the process of your development, the source code of the project (upstream) could be changed by other participants and your "commit" can be greatly increased due to other people's changes, so before sending the changes, it is necessary to replace the code from the parent repository **Rebase my GitHub Fork**, choose upstream: https ://[github.com/lsfusion-solutions/mycompany.com](http://github.com/lsfusion-solutions/mycompany.com) and make "push" of your changes. 

  

![](attachments/1802748/1802773.png)

Request to attach changes to the main project

In order to request the attachment of your changes(Commit) to the main project (Pull Request), you must go to (VCS)**Git** - **GitHub**, select **Create Pull Request**, select the remote repository **upstream**: <https://github.com/lsfusion-solutions/mycompany.git>

  

![](attachments/1802748/1802777.png)

  

Base fork: lsfusion-solutions:mycompany

Base branch: master

If you set other "pull request" parameters, your request will be denied.

![](attachments/1802748/1802752.png)

Check if the request has reached

To make sure that your request has reached, go to  https://github.com/lsfusion-solutions/mycompany/pulls and check if it is there.  

After the code revision by the technical manager, it will be added to the main project, or rejected, or requested for revision.

Problems that may arise

-   There is no upstream  repository when you select  Rebase or Pull Request

It should be added via  Remotes    

![](attachments/1802748/1802751.png)

  

-   There is no access to**upstream**

![](attachments/1802748/1802750.png)

You need to reassign the **upstream** link to https://github.com:/lsfusion-solutions/mycompany.git

## Learn the lsFusion language and install all necessary developer tools

MyCompany is developed on the [lsFusion](https://lsfusion.org/) platform.

All the necessary documentation on the platform and the lsFusion language can be found [here ](https://documentation.lsfusion.org/pages/viewpage.action?pageId=46367369)

  
