# description: JupyterLab + Once-for-All
# author: Rafael Ito
# version:
#   - v0.1: first release

FROM itorafael/jupyter-dev:v0.1

ARG GIT_USER="mit-han-lab"
ARG GIT_REPO="once-for-all"
ARG CONDA_ENV="ofa"

# update system
USER root
RUN apt update && apt upgrade -y

# clone repo
RUN git clone "https://github.com/$GIT_USER/$GIT_REPO.git"

# set environment
WORKDIR /home/jovyan
RUN pip install nvidia-ml-py3
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
