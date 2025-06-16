FROM node:22.14.0-alpine3.21

USER 0:0

RUN corepack enable \
    && corepack enable pnpm

RUN apk add --no-cache git=~2.47 \
    && git config --add --system safe.directory /mermaid

ENV NODE_OPTIONS="--max_old_space_size=8192"

EXPOSE 9000 3333
