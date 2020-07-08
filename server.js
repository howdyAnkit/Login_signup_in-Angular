const http = require("http");
const fs = require("fs");

http
    .createServer(function(req, res) {
        fs.readFile("index.html", function(err, data) {
            if (err) {
                return err;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);

            if (req.method == "POST" && req.url == "/form") {
                var myData = "";
                var final = {};

                req.on("data", function(data) {
                    myData += data;
                });

                req.on("end", function() {
                    var arr = myData.split("&");

                    final = {
                        Fname: arr[0].split("=")[1],
                        Lname: arr[1].split("=")[1],
                        username: arr[2].split("=")[1]
                    };

                    console.log(final);
                });
            }

            return res.end();
        });
    })
    .listen(3000, () => {
        console.log("Listening at http://localhost:3000/");
    });