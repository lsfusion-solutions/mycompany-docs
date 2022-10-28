---
title: 'Installation'
---

To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet.

It must have a minimum of 4 gigabytes of RAM and open ports 8080 for web client operation and 7652 for desktop client operation.

### RHEL 8+ / CentOS 8+ / Fedora 35+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8.sh)
```

### RHEL 7 / CentOS 7
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos7.sh)
```

### Ubuntu 18+ / Debian 9+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18.sh)
```

You can see the lsFusion server startup log in /var/log/lsfusion5-server/start.log .

To increase the amount of memory allocated to the application, you need to edit the -Xmx parameter in /etc/lsfusion5-server/lsfusion.conf and /etc/lsfusion5-client/lsfusion.conf. You must then restart the services.

### Windows installation

Download and run the installer [MyCompany-1.0-x64.exe](https://download.lsfusion.org/solutions/MyCompany-1.0-x64.exe) or [MyCompany-1.0.exe](https://download.lsfusion.org/solutions/MyCompany-1.0.exe)

### Log in to MyCompany

1.  Open MyCompany web interface in your browser **<u><http://your-server-ip:8080></u>**
2.  In the open window sign in using login admin without password.

![](images/Installation_1.png)

  



