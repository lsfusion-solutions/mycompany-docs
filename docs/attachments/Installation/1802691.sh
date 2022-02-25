#Wget Installation
dnf install -y wget

#Install Java 11
dnf install -y java-11-openjdk

#Add postgres 12 repo
rpm -Uvh https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm

#Install postgres12 and disablerepo
dnf install -y postgresql12-server --disablerepo=AppStream

#Init DB
/usr/pgsql-12/bin/postgresql-12-setup initdb

# Allow trust connection from localhost
sed -i 's/ident/trust/g' /var/lib/pgsql/12/data/pg_hba.conf

# Enable postgresql autostart
systemctl enable postgresql-12.service
# Start postgresql server
systemctl start postgresql-12.service

# Install lsFusion repo
dnf config-manager --add-repo https://download.lsfusion.org/yum

# Import lsFusion GPG Key
rpm --import https://download.lsfusion.org/yum/GPG-KEY-lsfusion

# Install lsFusion server and client
dnf install -y lsfusion4-server lsfusion4-client

# Enable autostart lsFusion server and client
systemctl enable lsfusion4-server.service
systemctl enable lsfusion4-client.service

#Download MyCompany Jar File

cd /var/lib/lsfusion/

wget "https://download.lsfusion.org/solutions/mycompany-1.0.jar"

#Allow connections to server 
firewall-cmd --permanent --add-port=8080/tcp
firewall-cmd --permanent --add-port=7652/tcp
firewall-cmd --reload

#Start lsFusion server and client
systemctl start lsfusion4-server
systemctl start lsfusion4-client
