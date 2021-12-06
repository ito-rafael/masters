# parent image
#FROM ubuntu:latest
FROM node:lts-bullseye
LABEL maintainer="ito.rafael@gmail.com"

#=======================================
# update & install packages
#=======================================
#RUN apt-get update && apt-get install -y tzdata nano net-tools systemctl curl
RUN apt-get update
RUN apt-get install -y curl systemctl tzdata
# Apache
RUN apt-get install -y apache2
RUN systemctl start apache2
# Angular CLI
RUN npm install -g @angular/cli

#=======================================
# Angular CRUD App
#=======================================
# create project
WORKDIR /var/www/html
RUN ng new angular-crud-app --routing=true --style=scss
WORKDIR /var/www/html/angular-crud-app
#=============================
# module & components
#=============================
#-------------------
# panel
#-------------------
# creating module & component
RUN ng generate module components/painel
RUN ng generate component components/painel
# copying files
COPY [                                                      \
    "./src/app/components/painel/painel.module.ts",         \
    "./src/app/components/painel/painel.component.html",    \
    "./src/app/components/painel/painel.component.scss",    \
    "./src/app/components/painel/painel.component.ts",      \
    "./src/app/components/painel/"                          \
]
#-------------------
# country
#-------------------
# creating module & component
RUN ng generate module components/pais
RUN ng generate component components/pais
# copying files
COPY [                                                  \ 
    "./src/app/components/pais/pais-routing.module.ts", \
    "./src/app/components/pais/pais.module.ts",         \
    "./src/app/components/pais/pais.component.html",    \
    "./src/app/components/pais/pais.component.ts",      \
    "./src/app/components/pais/"                        \
]
#-------------------
# university
#-------------------
# creating module & component
RUN ng generate module components/universidades
RUN ng generate component components/universidades
# copying files
COPY [                                                                      \
    "./src/app/components/universidades/universidades-routing.module.ts",   \
    "./src/app/components/universidades/universidades.module.ts",           \
    "./src/app/components/universidades/universidades.component.html",      \
    "./src/app/components/universidades/universidades.component.ts",        \
    "./src/app/components/universidades/"                                   \
]
#=============================
# services
#=============================
# creating services
RUN ng generate service services/pais
RUN ng generate service services/universidades
# copying files
COPY [                                              \
    "./src/app/services/pais.service.ts",           \
    "./src/app/services/universidade.service.ts",   \
    "./src/app/services/"                           \
]
#=============================
# other files
#=============================
# app
COPY [                                  \
    "./src/app/app-routing.module.ts",  \
    "./src/app/app.module.ts",          \
    "./src/app/app.component.html",     \
    "./src/app/"                        \
]
#-------------------
# env (defines IP address where to connect to)
COPY src/environments/environment.ts ./src/environments/environment.ts
# scss
COPY src/styles.scss ./src/styles.scss

#=======================================
# final config
#=======================================
# serve outside docker (not only localhost)
RUN sed -e 's/ng serve/ng serve --host 0.0.0.0/' -i package.json
#-------------------
# expose port 4200/TCP (used to display front-end)
EXPOSE 4200
#-------------------
# start application
CMD npm start; tail -f /dev/null;
