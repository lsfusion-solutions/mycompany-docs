---
title: 'MyCompany migration to another server'
---
The page is under development

[//]: # (Если у вас возникла необходимость перенести свою рабочую программу на другой сервер, необходимо:)

[//]: # ()
[//]: # (-    [**установить**]&#40;Installation.md&#41; MyCompany на новый сервер &#40;запустите для проверки корректности установки&#41;)

[//]: # (-   перенести на него бизнес-логику)

[//]: # (-   перенести базу данных.)

[//]: # ()
[//]: # (## Перенос бизнес-логики {#stop_server})

[//]: # ()
[//]: # (**1.** Прежде, чем переносить бизнес-логику, необходимо остановить сервер.)

[//]: # ()
[//]: # (**Windows**:)

[//]: # ()
[//]: # (![]&#40;images/MC_migration_to_another_server_1.png&#41; )

[//]: # (*Рис. 1 Остановка сервера в ОС Windows*)

[//]: # ()
[//]: # (**Linux**: ...`: systemctl stop lsfusion4-server`)

[//]: # ()
[//]: # (**2.** Необходимо скопировать все файлы бизнес-логики и вставить в соответствующую папку  на новый сервер. По умолчанию файлы бизнес-логики находятся в папке:)

[//]: # ()
[//]: # (**Linux**: /<u>var/lib/lsfusion/</u>)

[//]: # ()
[//]: # (**Windows**: <u>C:\\Program Files\\lsFusion 4\\Server\\lib\\</u>)

[//]: # ()
[//]: # (Чтобы проверить, корректно ли скопировались файлы, запустите сервер и проверьте работает ли программа.)

[//]: # ()
[//]: # (Windows:)

[//]: # ()
[//]: # (![]&#40;images/MC_migration_to_another_server_2.png&#41;)

[//]: # (*Рис. 2 Запуск сервера в ОС Windows*)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (Запуск на **Linux**: ...`: systemctl start lsfusion4-server`)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (## Перенос Базы данных)

[//]: # ()
[//]: # (**1**. [**Остановите**]&#40;#stop_server&#41; новый сервер)

[//]: # ()
[//]: # (**2.** Создайте бэкап своей рабочей базы: **Администрирование** - **Резервная копия** кнопка **Создать копию**.)

[//]: # ()
[//]: # (![]&#40;images/MC_migration_to_another_server_3.png&#41; )

[//]: # (*Рис. 3 Создание резервной копии базы данных*)

[//]: # ()
[//]: # (**3.** Сохраните копию базы данных, чтобы переместить на новый сервер: нажмите **Cкачать** и укажите путь, куда сохранить файл.)

[//]: # ()
[//]: # (![]&#40;images/MC_migration_to_another_server_4.png&#41; )

[//]: # (*Рис. 4 Сохранение резервной копии*)

[//]: # ()
[//]: # (**4** Восстановите базу данных с помощью **PostgreSQL**. В командной строке запустите команду `pg\_restore`.)

[//]: # ()
[//]: # (Windows по умолчанию:)

[//]: # ()
[//]: # (-   зайти в каталог C:\\Program Files\\PostgreSQL\\12\\bin)

[//]: # (-   затем запустить команду `pg\_restore -h сервер-p порт -U имя\_пользователя\_PostgreSQL -d имя\_БД "имя\_файла.backup"`  )

[//]: # (    *Например*: `pg\_restore -h localhost -p 5432 -U postgres -d lsfusion "d:\\2021-01-18-13-16-44.backup"`)

[//]: # (-   введите запрошенный пароль пользователя PostgreSQL)

[//]: # ()
[//]: # (:::info)

[//]: # (Данные сервера, порта, пользователя и пароля PostgreSQL прописаны в файле **C:\\Program Files\\lsFusion 4\\Server\\confsettings.properties**)

[//]: # (:::)

[//]: # (  )
[//]: # ()
[//]: # (**Linux** по умолчанию:)

[//]: # ()
[//]: # (-   запустите команду `/usr/bin/pg\_restore -*h сервер-p порт -U имя\_пользователя\_PostgreSQL -d имя\_БД "имя\_файла.backup"`  )

[//]: # (    *Например*:`usr/bin/pg\_restore -h localhost -U postgres -d lsfusion 2021-01-20-01-00-00.backup`)

[//]: # ()
[//]: # (-   введите запрошенный пароль пользователя PostgreSQL)

[//]: # ()
[//]: # (:::info)

[//]: # (Данные сервера, порта, пользователя и пароля PostgreSQL прописаны в файле **/etc/lsfusion4-server/confsettings.properties**)

[//]: # (:::)

  

