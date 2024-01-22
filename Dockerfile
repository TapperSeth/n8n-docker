FROM n8nio/n8n:latest



ARG ENCRYPTION_KEY


ENV N8N_ENCRYPTION_KEY=$ENCRYPTION_KEY


WORKDIR /home/nodes/
RUN npm install n8n-nodes-browserless
COPY dist ~/.n8n/custom

EXPOSE 5678/tcp