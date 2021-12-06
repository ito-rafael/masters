# parent image
FROM ubuntu:latest
LABEL maintainer="ito.rafael@gmail.com"

#=======================================
# packages & tools installation
#=======================================
# update & install packages
RUN apt-get update && apt-get install -y tzdata nano net-tools systemctl curl
#-----------------------------
# Apache
RUN apt-get install -y apache2
RUN systemctl start apache2
#-----------------------------
# MySQL
RUN apt-get install -y mysql-server
RUN apt-get upgrade
#RUN mysql_secure_installation
RUN service mysql start && \
    mysql -e "CREATE DATABASE laravel_db;" && \
    mysql -e "CREATE USER 'laravel_user'@'localhost' IDENTIFIED BY 'User@2021';" && \
    mysql -e "GRANT ALL ON laravel_db.* TO 'laravel_user'@'localhost';" && \
    mysql -e "FLUSH PRIVILEGES;"
#-----------------------------
# PHP
RUN apt-get install -y php libapache2-mod-php php-mbstring php-cli php-bcmath php-json php-xml php-zip php-pdo php-common php-tokenizer php-mysql
#-----------------------------
# Composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
#-----------------------------
# Laravel
COPY laravel.conf /etc/apache2/sites-available/laravel.conf
RUN a2ensite laravel.conf
RUN a2enmod rewrite
#-----------------------------
# Node.js
SHELL ["/bin/bash", "-c"]
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN source ~/.bashrc && \
    . ~/.nvm/nvm.sh && \
    nvm install v14.18.0
#-----------------------------
# npm
RUN apt-get update && apt-get install -y npm

#=======================================
# Laravel CRUD App
#=======================================
# create project
WORKDIR /var/www/html/
RUN composer create-project laravel/laravel --prefer-dist laravel-crud-app
WORKDIR /var/www/html/laravel-crud-app
#-----------------------------
# MySQL
RUN sed -e 's/DB_DATABASE=.*/DB_DATABASE=laravel_db/' \
        -e 's/DB_USERNAME=.*/DB_USERNAME=laravel_user/' \
        -e 's/DB_PASSWORD=.*/DB_PASSWORD=User@2021/' \
        -i .env
#-----------------------------
# model
RUN php artisan config:clear &&\
    php artisan make:model Pais --migration &&\
    php artisan make:model Universidade --migration
COPY [                                  \
    "./app/Models/Pais.php",            \
    "./app/Models/Universidade.php",    \
    "./app/Models/"                     \
]
#-----------------------------
# migration
COPY [                                                                  \
    "./database/migrations/TIMESTAMP-create_pais_table.php",            \
    "./database/migrations/TIMESTAMP-create_universidades_table.php",   \
    "./database/migrations/"                                            \
]
WORKDIR database/migrations
RUN mv TIMESTAMP-create_pais_table.php *_create_pais_table.php &&\
    mv TIMESTAMP-create_universidades_table.php *_create_universidades_table.php
WORKDIR /var/www/html/laravel-crud-app
RUN service mysql start && php artisan migrate
#-----------------------------
# controller
RUN php artisan make:controller PaisController --resource
RUN php artisan make:controller UniversidadeController --resource
COPY [                                                      \
    "./app/Http/Controllers/PaisController.php",            \
    "./app/Http/Controllers/UniversidadeController.php",    \
    "./app/Http/Controllers/"                               \
]
#-----------------------------
# API
COPY ./routes/api.php ./routes/api.php
#-----------------------------
# Apache
WORKDIR /etc/apache2/sites-available
COPY laravel.conf /etc/apache2/sites-available/laravel.conf
RUN a2ensite laravel.conf
RUN systemctl restart apache2
#-----------------------------
# fixing permissions
WORKDIR /var/www/html/laravel-crud-app
RUN chown -R $USER:www-data storage
RUN chmod -R 775 storage
#=======================================
# expose port 80/TCP (HTTP)
EXPOSE 80
#-----------------------------
# start services
CMD service mysql start;    \
    service apache2 start;  \
    tail -f /dev/null
