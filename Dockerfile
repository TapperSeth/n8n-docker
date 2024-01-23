FROM n8nio/n8n:latest



ARG ENCRYPTION_KEY


ENV N8N_ENCRYPTION_KEY=$ENCRYPTION_KEY
RUN npm install n8n-nodes-browserless

RUN mkdir ~/.n8n/custom
WORKDIR /home/node/.n8n/custom
RUN ls
ADD dist .
RUN ls ~/.n8n/custom/


EXPOSE 5678/tcp