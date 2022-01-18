# meugo:1.0
# FROM golang
# WORKDIR /app
# ADD . /app
# RUN go mod init meugo && go build -o meugo
# ENTRYPOINT ./meugo
# docker image build -t meugo:1.0 .

# meugo:2.0
FROM golang as build

WORKDIR /app
ADD . /app
RUN go mod init meugo && go build -o meugo

FROM alpine 
WORKDIR /newapp
COPY --from=build /app/meugo /newapp/

ENTRYPOINT ./meugo
# docker image build -t meugo:2.0 .

# docker container run -ti meugo:1.0/ meugo:2.0 