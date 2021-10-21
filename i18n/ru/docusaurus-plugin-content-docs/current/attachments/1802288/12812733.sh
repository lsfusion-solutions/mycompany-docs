#Install lsFusion4 server and client Centos7
dnf install -y glibc-langpack-ru
localectl set-locale LANG=ru_RU.UTF-8
source <(curl -s https://download.lsfusion.org/dnf/install-lsfusion4)
yum install -y wget
wget http://download.lsfusion.org/solutions/mycompany-1.0.jar -O /var/lib/lsfusion/mycompany.jar
echo "logics.topModule = MyCompanyRu" >> /etc/lsfusion4-server/settings.properties
systemctl stop lsfusion4-server
systemctl start lsfusion4-server

#Allow connections to server 
firewall-cmd --permanent --add-port=8080/tcp
firewall-cmd --permanent --add-port=7652/tcp
firewall-cmd --reload

#Start lsFusion server and client
systemctl start lsfusion4-server
systemctl start lsfusion4-client
