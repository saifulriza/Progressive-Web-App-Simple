FROM gitpod/workspace-mysql

USER gitpod

# Export environment variables
ENV DATABASE_USER=root
ENV DATABASE_HOST=127.0.0.1
ENV DATABASE_PASSWORD=
