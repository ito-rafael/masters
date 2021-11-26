# parent image
FROM ubuntu:latest
LABEL maintainer="ito.rafael@gmail.com"

# update & install packages
RUN apt-get update && apt-get install -y tzdata nano net-tools systemctl curl

# Apache
RUN apt-get install -y apache2
RUN systemctl start apache2

# MySQL
RUN apt-get install -y mysql-server
RUN apt-get upgrade
#RUN mysql_secure_installation
RUN service mysql start && \
    mysql -e "CREATE DATABASE laravel_db;" && \
    mysql -e "CREATE USER 'laravel_user'@'localhost' IDENTIFIED BY 'User@2021';" && \
    mysql -e "GRANT ALL ON laravel_db.* TO 'laravel_user'@'localhost';" && \
    mysql -e "FLUSH PRIVILEGES;"

# PHP
RUN apt-get install -y php libapache2-mod-php php-mbstring php-cli php-bcmath php-json php-xml php-zip php-pdo php-common php-tokenizer php-mysql

# Composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

# Laravel
COPY laravel.conf /etc/apache2/sites-available/laravel.conf
RUN a2ensite laravel.conf
RUN a2enmod rewrite

# Node.js
SHELL ["/bin/bash", "-c"]
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN source ~/.bashrc && \
    . ~/.nvm/nvm.sh && \
    nvm install v14.18.0

# npm
RUN apt-get update && apt-get install -y npm

# laravel-crud-app
COPY ./laravel-crud-app/ /var/www/html/laravel-crud-app/
RUN cd /var/www/html/laravel-crud-app && composer update
RUN chmod -R 777 /var/www/html/laravel-crud-app/bootstrap/cache
RUN chmod -R 777 /var/www/html/laravel-crud-app/storage
COPY ./laravel_env /var/www/html/laravel-crud-app/.env
RUN php /var/www/html/laravel-crud-app/artisan key:generate  
RUN php /var/www/html/laravel-crud-app/artisan cache:clear
RUN service mysql start && php /var/www/html/laravel-crud-app/artisan migrate:refresh

# expose port 80/TCP (HTTP)
EXPOSE 80

# start services
CMD service mysql start;    \
    service apache2 start;  \
    tail -f /dev/null
