FROM selenium/standalone-chrome-debug:3.141.59

COPY scripts/node_10.x.sh /opt/node/node_setup.sh
COPY . /webdriver-boilerplate

# Setup node for install - will run apt-get update for us
WORKDIR /opt/node
RUN sudo bash node_setup.sh

RUN sudo apt-get install -y              \
      nodejs                             \
      build-essential                 && \
    sudo rm -rf /var/lib/apt/lists/*

WORKDIR /webdriver-boilerplate
RUN sudo npm install

CMD ["sudo", "npm", "test"]
