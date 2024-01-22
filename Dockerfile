FROM n8nio/n8n:latest



ARG ENCRYPTION_KEY


ENV N8N_ENCRYPTION_KEY=$ENCRYPTION_KEY

COPY dist ~/.n8n/custom
CMD ["cd ~/.n8n/custom && ls"]
WORKDIR /home/nodes/
RUN npm install n8n-nodes-browserless
CMD ["cd ~/.n8n/custom && ls"]

EXPOSE 5678/tcp