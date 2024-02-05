# description: JupyterLab + Once-for-All
# author: Rafael Ito
# version:
#   - v0.1: first release
#   - v0.2: changed parent image from jupyter-dev to ml-generic + install nbterm
#   - v0.3: replace mit-han-lab/once-for-all with ito-rafael/once-for-all-2
#   - v0.4: change parent image from ml-generic to jupyter-dev

FROM itorafael/jupyter-dev:v0.4
#FROM itorafael/ml-generic:v0.1

# update system
USER root
RUN apt update && apt upgrade -y
RUN apt install -y git
RUN apt install -y jupyter

# clone repo
WORKDIR /home/jovyan
ARG GIT_USER="ito-rafael"
ARG GIT_REPO="once-for-all-2"
RUN git clone "https://github.com/$GIT_USER/$GIT_REPO.git"

# set environment
RUN pip install nvidia-ml-py3
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# install JupyterLab Code Formatter
#  - Python: black+isort
RUN pip install \
    jupyterlab-code-formatter \
    black \
    isort

# prevent container from dying
#ENTRYPOINT ["tail", "-f", "/dev/null"]
