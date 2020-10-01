## Kedro gRPC Node Client

## Install grpc dependency
`npm install`

Make sure you have `kedro-grpc-server` installed and running in a kedro project
In your Kedro project:

`kedro server grpc-start`

## Trigger a kedro pipeline run
`node client.js runp`

## Check streaming status of a pipeline run
`node client.js status {RUN_ID}`


Kedro gRPC Server installation:

https://github.com/mmchougule/kedro-grpc-server
