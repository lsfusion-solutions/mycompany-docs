---
title: 'Installing with Docker'
---

:::info
You must install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/) to work with Docker containers.
:::

### Launching Mycompany using Docker Compose {#docker-platform}

- Download the `compose.yaml` file from [central server](https://download.lsfusion.org/solutions/mycompany-docker/) to a folder of your choice (we'll call it `$FUSION_DIR$`). This file contains settings for running four containers:
    - PostgreSQL
    - Application Server
    - Mycompany
    - Web Client

- The `compose.yaml` setting (optional):
    - If you need to change the startup settings (e.g., use a different container version or customize environment variables), edit the `compose.yaml` file according to the [Docker documentation](https://docs.docker.com/get-started/overview/).
    - Application server startup options can also be set using the container's environment variables - in the environment attribute. For example, to change the server locale to Russian, write:
       ```yml
       environment:
       - USER_SETLANGUAGE=ru
       - USER_SETCOUNTRY=RU
       ```
  When searching for startup parameters in environment variables, Spring automatically converts them to uppercase and replaces dots with underscores. In the example above, the values of the environment variables will be substituted into the corresponding parameters: `user.setLanguage` and `user.setCountry`.
    - Available lsFusion container images:
        - [Server](https://hub.docker.com/r/lsfusion/server/tags)
        - [Client](https://hub.docker.com/r/lsfusion/client/tags)

- Starting the containers:

  Go to the `$FUSION_DIR$` folder and run the command:
    ```bash
     docker-compose up
    ```
  Once the launch is complete, the web client will be available at: `http://localhost:8080/`.

- Working with project files:
  After the first launch, subfolders will be created in the `$FUSION_DIR$` folder:
    - `docker-client-conf` - client configuration.
    - `docker-db` - database files.

  The server data will be stored in a Docker volume managed by Docker Engine, with the default name `mycompany_docker-server`. Your lsFusion language modules (`.lsf` files or folders with them) as well as other resources (reports, Java files, images, CSS, JS, etc.) or the `settings.properties` file will be stored there. Server logs are also located there.

  If necessary, files are copied to the running container. For example, to copy the `conf` folder with the `settings.properties` file in it, use the command:
    ```bash
    docker cp <yourPath>/conf mycompany-server-1:/lsfusion
    ```
`mycompany-server-1` is the default server container name. It may be changed according to your settings.

After stopping the container, the files from the `lsfusion` folder will be saved in the volume.