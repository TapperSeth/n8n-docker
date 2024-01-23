FROM n8nio/n8n:latest

RUN npm install n8n-nodes-browserless

RUN mkdir ~/.n8n/custom
WORKDIR /home/node/.n8n/custom

ADD dist .

EXPOSE 5678/tcp