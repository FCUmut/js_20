const http = require("http");
const fs = require("fs");

const posts = [
  { id: 1, title: "Post one", body: "This is post one" },
  { id: 2, title: "Post two", body: "This is post two" },
];

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/") {
    // 200 is status code
    // response.writeHead(200, { "content-type": "text/html" });
    // response.writeHead(200, { "content-type": "text/plaintext" });
    // response.end("<h1>Welcome</h1>");

    fs.readFile("index.html", (error, file) => {
      if (error) {
        response.writeHead(500, { "content-type": "text/html" });
        response.end("<h1>Sorry, we have a problem</h1>");
      } else {
        response.writeHead(200, { "content-type": "text/html" });
        response.end(file);
      }
    });
  } else if (url === "/api/posts") {
    // http://localhost:5000/api/posts
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ success: true, data: posts }));
    //   } else if (url === "/about") {
    //     response.writeHead(200, { "content-type": "text/html" });
    //     response.end("<h1>About</h1>");
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Page Not Found</h1>");
  }

  //   console.log(url);

  // response.end("Hello");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// http://localhost:5000/ will response 'Hello World'

// https://web.postman.co/ - to get request types

// http://localhost:5000/about - output: /about
