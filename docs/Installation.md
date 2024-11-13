---
title: 'Installation'
---

To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet.

It must have a minimum of 4 gigabytes of RAM and open ports 8080 for web client operation and 7652 for desktop client operation.

### RHEL 8+ / CentOS 8+ / Fedora 35+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8.sh)
```

### Ubuntu 18+ / Debian 9+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18.sh)
```

You can see the lsFusion server startup log in /var/log/lsfusion6-server/start.log .

To increase the amount of memory allocated to the application, you need to edit the -Xmx parameter in /etc/lsfusion6-server/lsfusion.conf and /etc/lsfusion6-client/lsfusion.conf. You must then restart the services.

### Windows installation

1. Download and run lsFusion platform installer (execution) : https://docs.lsfusion.org/Execution_auto/.
2. Download the assembled jar file with MyCompany logic from https://download.lsfusion.org/solutions/mycompany-6.0.jar.
3. Put the downloaded jar file to the directory C:\Program Files\lsFusion 6\Server\lib.
4. Restart lsFusion 6 Server service.

### Log in to MyCompany

1.  Open MyCompany web interface in your browser **http://your-server-ip:8080**
2.  In the open window sign in using login admin without password.

![](images/Installation_1.png)

### Development

Since the project uses Maven, you can use the following algorithm to configure the development environment :

#### Setting up the environment and client part

Install lsFusion development platform, except for the server part (Server), as described at https://docs.lsfusion.org/Development_auto/.

As a password for PostgreSQL preferably use 11111.

#### Configuring the server part

1. Do Get from VCS in the start menu or Git / Clone, using https://github.com/lsfusion-solutions/mycompany.git as the source .
2. Wait for IntelliJ IDEA to create the project and download all dependencies using Maven (may take a few minutes).
3. Check that Java Development Kit has been successfully found. To do this, go to File / Project Structure form and check that Project / SDK field is set.
4. Create the configuration for running the lsFusion server. To do this, in Run / Edit Configurations form you need to click **+**, and then select lsFusion Server. Verify that Working Directory points to the folder where pom.xml is located.
5. Run server through Run / Run `<configuration name>` menu item.

#### Building a jar file to run on the server

After making changes to the application source code to build the final jar file, you need to :

1. In File / Project Structure form you need to go to Artifacts item and press **+** button and select Jar / Empty project.
2. In Output Directory field choose the directory where you want to place the assembled jar file.
3. From Available Elements list transfer the 'mycompany' compile output element to the jar file. Then press OK.
4. Then select Build / Build artifacts in the menu item. Then select Build.

With the artifact you can replace the old file, which is on the server in the folder /var/lib/lsfusion or C:\Program Files\lsFusion 6\Server\lib, and restart the service on the server.
