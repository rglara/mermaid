FROM mcr.microsoft.com/devcontainers/typescript-node:18

# get latest OS updates
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y upgrade

# install Cypress prerequisites
RUN apt-get -y install \
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# clean up apt repository for smaller final container size
RUN rm -rf /var/lib/apt/lists/* \
    && apt-get clean

# install pnpm for non-root user
USER node
SHELL ["/bin/bash", "-c"]
RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /home/node/.bashrc
