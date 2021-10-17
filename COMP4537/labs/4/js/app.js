const http = require('http');
const url = require('url');

const GET = 'GET';
const POST = 'POST';
const endPointRoot = "/";

const status_created = 201;
const status_not_found = 103;

let dictionary = [];

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    });
    console.log(req.headers);
    if (req.method === GET) {
        const q = url.parse(req.url, true);
        if (dictionary.find(dict => dict.word === q.query.word)) {
            dict_word = dictionary.find(dict => dict.word === q.query.word);
            res.end(`${q.query.word}: ${dict_word.definition}`);
        } else {
            res.end(`Request # ${status_not_found} 
            <br/>Word '${q.query.word}' not found!`);
        }

    }
    if (req.method === POST && req.url === endPointRoot) {
        let body = "";
        req.on('data', function (chunk) {
            if (chunk != null) {
                body += chunk;
            }
        });
        req.on('end', function () {
            let q = url.parse(body, true);
            if (dictionary.find(dict => dict.word === q.query.word)) {
                res.end(`${q.query.word} already exists in the dictionary.`)
            } else {
                dictionary.push(q.query);
                res.end(`Request # ${status_created} 
                <br/>New entry recorded:<br/> 
                ${q.query.word} : ${q.query.definition}`);
            }
        });
    }
}).listen(8000);