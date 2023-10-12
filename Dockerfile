FROM node:20 as builder

COPY /app/package*.json /srv
RUN npm install -C /srv

FROM node:20

COPY /app /srv
COPY --from=builder /srv/node_modules /srv/node_modules

COPY entrypoint.sh /entrypoint.sh

RUN chmod 755 /entrypoint.sh

CMD ["/entrypoint.sh"]
