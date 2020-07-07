var grpc = require('grpc');

var kedroProto = grpc.load('kedro.proto').kedro;

var client = new kedroProto.Kedro('127.0.0.1:50051', grpc.credentials.createInsecure());

function printResponse(error, response) {
    if (error)
        console.log('Error: ', error);
    else
        console.log(response);
}

function listPipelines() {
    client.ListPipelines({}, function(error, books) {
        printResponse(error, books);
    });
}

function runPipeline(id, title, author) {
    var pipeline = {
        pipeline_name: "de"
    };
    client.Run(pipeline, function(error, empty) {
        printResponse(error, empty);
    });
}

function getStatus(id) {
    let run = {
        run_id: id.toString()
    }
    var call = client.Status(run);
    call.on('data', function(status) {
        console.log(status)
    });
    call.on('end', function(e) {
        console.log(e);
    })
    call.on('error', function(e) {
        console.log(e);
        // An error has occurred and the stream has been closed.
    });
    call.on('status', function(status) {
        console.log(status);
    });
}

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

if (command == 'listp')
    listPipelines();
else if (command == 'runp')
    runPipeline(process.argv0[0]);
else if (command = 'status')
    getStatus(process.argv[0]);
