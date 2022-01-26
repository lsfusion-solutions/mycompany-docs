add-apt-repository -y ppa:openjdk-r/ppa
apt-get update
apt -y install language-pack-ru
localectl set-locale LANG=ru_RU.UTF-8

source <(curl -s https://download.lsfusion.org/apt/install-lsfusion4)
service lsfusion4-server stop

#Download MyCompany Jar File
#apt install -y wget
wget http://download.lsfusion.org/solutions/mycompany-1.0.jar -O /var/lib/lsfusion/mycompany.jar
echo "logics.topModule = MyCompanyRu" >> /etc/lsfusion4-server/settings.properties

service lsfusion4-server start
service lsfusion4-client start
