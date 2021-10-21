apt install -y wget

apt install -y default-jdk

# Install PostgreSQL repo
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

codename=`lsb_release --codename | cut -f2`
echo deb http://apt.postgresql.org/pub/repos/apt/ $codename-pgdg main > /etc/apt/sources.list.d/postgresql.list

apt update

# Install PostgreSQL
apt install -y postgresql-12 postgresql-client-12

# Allow trust connection from localhost
sed -i 's/md5/trust/g' /etc/postgresql/12/main/pg_hba.conf
su - postgres -c "/usr/lib/postgresql/12/bin/pg_ctl reload -D /var/lib/postgresql/12/main"

# Import lsFusion GPG Key
wget --quiet -O - https://download.lsfusion.org/apt/GPG-KEY-lsfusion | sudo apt-key add -

# Install lsFusion repo
echo deb https://download.lsfusion.org/apt all main > /etc/apt/sources.list.d/lsfusion.list

apt update

# Install lsFusion server and client
apt install -y lsfusion4-server lsfusion4-client

# Enable autostart lsFusion server and client
systemctl enable lsfusion4-server.service
systemctl enable lsfusion4-client.service

#Download MyCompany Jar File

cd /var/lib/lsfusion/

wget "https://download.lsfusion.org/solutions/mycompany-1.0.jar"

#Start lsFusion server and client
service lsfusion4-server start
service lsfusion4-client start
