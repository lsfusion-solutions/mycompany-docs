---
title: 'Установка'
---

Для установки решения потребуется сервер под управлением операционной системы Linux или Windows с подключением к Интернет.

На нем должно быть минимум 4 гигабайта оперативной памяти и должны быть открыты порты 8080 для работы веб-клиента и 7652 для работы десктоп-клиента.

### RHEL 8+ / CentOS 8+ / Fedora 35+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8-ru.sh)
```

### RHEL 7 / CentOS 7
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos7-ru.sh)
```

### Ubuntu 18+ / Debian 9+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18-ru.sh)
```

Лог запуска сервера lsFusion можно посмотреть в /var/log/lsfusion5-server/start.log .

Чтобы увеличить количество памяти, выделяемую приложению, нужно отредактировать параметр -Xmx в файлах /etc/lsfusion5-server/lsfusion.conf и /etc/lsfusion5-client/lsfusion.conf. После этого необходимо перезапустить службы.

### Windows

1. Скачать и запустить установщик платформы lsFusion для выполнения : https://docs.lsfusion.org/ru/next/Execution_auto/.
2. Скачать собранный jar-файл с логикой MyCompany по ссылке https://download.lsfusion.org/solutions/mycompany-1.0.jar.
3. Поместить скачанный jar-файл в директорию C:\Program Files\lsFusion 5\Server\lib.
4. Добавить в файл C:\Program Files\lsFusion 5\Server\conf\settings.properties строку `logics.topModule = MyCompanyRu` .
5. Перезапустить службу lsFusion 5 Server.

### Войти в MyCompany

1.  Открыть в браузере web-интерфейс MyCompany <http://ip-вашего-сервера:8080>
2.  В открывшемся окне авторизоваться под пользователем **admin** без пароля

![](images/Installation_1.png)

### Разработка

Поскольку в проекте используется Maven, то можно использовать следущий алгоритм действий для настройки среды разработки :

#### Настройка окружения и клиентской части

Установить платформу lsFusion для разработки за исключением серверной части (Server), как указано по ссылке https://docs.lsfusion.org/ru/next/Development_auto/.

В качестве пароля для PostgreSQL желательно использовать 11111. 

#### Настройка серверной части

1. Сделать Get from VCS в стартовом меню или Git / Clone, используя в качестве источника https://github.com/lsfusion-solutions/mycompany.git .
2. Дождаться пока IntelliJ IDEA создаст проект и скачает при помощи Maven все зависимости (может занять несколько минут).
3. Проверить, что был успешно найден Java Development Kit. Для этого нужно зайти в форму File / Project Structure и проверить, что установлено поле Project / SDK. 
4. Создать конфигурацию для запуска сервера lsFusion. Для этого нужно в форме Run / Edit Configurations нажать кнопку **+**, а затем выбрать lsFusion Server. Проверить, что Working Directory указывает на папку, в которой находится pom.xml.
5. Добавить в файл settings.properties строку `logics.topModule = MyCompanyRu` . 
6. Запустить сервер через пункт меню Run / Run <имя конфигурации>. 

#### Сборка jar-файла для выполнения на сервере

После внесения изменений в исходный код приложения для сборки итогового jar-файла необходимо :

1. В форме File / Project Structure нужно зайти в пункт Artifacts и нажать кнопку **+** и выбрать Jar / Empty project.
2. В поле Output Directory выбрать каталог, в который нужно будет поместить собранный jar-файл. 
3. Из списка Available Elements перенести в jar файл элемент 'mycompany' compile output. Затем нажать ОК.
4. Затем в пункте меню выбрать Build / Build artifacts. Дальше выбрать пункт Build.

Собранным файлом можно заместить старый файл, находящийся на сервере в папке /var/lib/lsfusion или C:\Program Files\lsFusion 5\Server\lib, и перезапустить службу на сервере.
