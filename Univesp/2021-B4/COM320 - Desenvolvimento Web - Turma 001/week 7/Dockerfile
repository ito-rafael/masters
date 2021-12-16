# define a imagem base
FROM itorafael/com320-app-v2.0
# define o mantenedor da imagem
LABEL maintainer="ito.rafael@gmail.com"

# Atualiza a imagem com os pacotes
RUN apt-get update && apt-get upgrade -y

# Expoe a porta 80
EXPOSE 80

# Comando para iniciar o apache e o mysql no Container
CMD service apache2 start; service mysql start; tail -f /dev/null
