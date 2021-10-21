---
title: 'Установка: Обзор'
sidebar_label: Обзор
---

Для установки решения потребуется сервер под управлением операционной системы Linux или Windows с подключением к Интернет.

На нем должно быть минимум 2 гигабайта оперативной памяти и должны быть открыты порты 8080 для работы веб-клиента и 7652 для работы десктоп-клиента.

(Приведенные ниже команды приведены для установки в среде Centos7 с правами суперпользователя root)

Установить сервер и клиент lsFusion:

#### `root@centos7: localectl set-locale LANG=ru_RU.UTF-8`

#### `root@centos7: source <(curl -s https://download.lsfusion.org/yum/install-lsfusion4)`

Установить бизнес-логику MyCompany:

#### `root@centos7: yum install -y wgetroot@centos7: wget http://download.lsfusion.org/solutions/mycompany-1.0.jar -O /var/lib/lsfusion/mycompany.jar`

#### `root@centos7: echo "logics.topModule = MyCompanyRu" >> /etc/lsfusion4-server/settings.properties`

Перезапустить сервер lsFusion:

#### `root@centos7: systemctl stop lsfusion4-serverroot@centos7: systemctl start lsfusion4-server`

Лог запуска сервера lsFusion можно посмотреть в /var/log/lsfusion4-server/start.log .

### Можно воспользоваться скриптами, приведенными ниже:

Установка Centos8

[install-mycompany-centos8.sh](attachments/1802288/1802405.sh)

Скачать скрипт установки:

#### `root@centos8: dnf install -y wget`

#### root@centos8: wget "https://mycompany-docs.lsfusion.org/download/attachments/1802288/install-mycompany-centos8.sh" -P /tmp

Разрешить запуск скачанного скрипта установки:

#### `root@centos8: chmod +x /tmp/install-mycompany-centos8.sh`

Выполнить скрипт:

#### `root@centos8: /tmp/install-mycompany-centos8.sh`

Установка Ubuntu 18/ Debian 9

[install-mycompany-ubuntu18.sh](attachments/1802288/1802432.sh)

Скачать скрипт установки:

#### `root@ubuntu18: wget "https://mycompany-docs.lsfusion.org/download/attachments/1802288/install-mycompany-ubuntu18.sh" -P /tmp`

Разрешить запуск скачанного файла командой

#### `root@ubuntu18: chmod +x /tmp/install-mycompany-ubuntu18.sh`

Запустить скрипт установки командой:

#### `root@ubuntu18: /tmp/install-mycompany-ubuntu18.sh`

Установка Centos 7

[install-mycompany-centos7.sh](attachments/1802288/1802656.sh)

Скачать скрипт установки:

#### `root@centos7: yum install -y wget`

#### `root@centos7: wget "https://mycompany-docs.lsfusion.org/download/attachments/1802288/install-mycompany-centos7.sh" -P /tmp`

Разрешить запуск скачанного файла командой

#### `root@centos7: chmod +x /tmp/install-mycompany-centos7.sh`

Запустить скрипт установки командой:

#### `root@centos7:/tmp/install-mycompany-centos7.sh`

Установка Windows

Скачать установщик и запустить [MyCompany-1.0-x64.exe](https://download.lsfusion.org/solutions/MyCompany-1.0-x64.exe) или [MyCompany-1.0.exe](https://download.lsfusion.org/solutions/MyCompany-1.0.exe)

## Войти в MyCompany

1.  Открыть в броузере web-интерфейс MyCompany  <http://ip->вашего-сервера:8080
2.  В открывшемся окне авторизоваться под пользователем **admin **без пароля

![](attachments/1802288/1802424.png)

  

  

ПОЛЬЗОВАТЕЛЬСКИЙ ИНТЕРФЕЙС
