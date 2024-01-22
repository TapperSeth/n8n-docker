FROM n8nio/n8n:latest



ARG ENCRYPTION_KEY


ENV N8N_ENCRYPTION_KEY=$ENCRYPTION_KEY

COPY dist ~/.n8n/custom

WORKDIR /home/nodes/
RUN npm install n8n-nodes-browserless

EXPOSE 5678/tcp