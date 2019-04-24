const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const Person = require("./src/model/person");
const Phone = require("./src/model/phone");
const Contact = require("./src/model/contact");

const server = http.createServer((req, res) => {
    let reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname.match(/static\/js/ig)) {
        fs.readFile(path.join(__dirname, reqUrl.pathname), function(err, js){
            try {
                if(err) throw "not found";

                res.writeHeader(200, {'Content-Type': 'text/javascript'});
                res.write(js);
                res.end();
            } catch(e) {
                res.writeHeader(404, {'Content-Type': 'text/plain'});
                res.write("Not found");
                res.end();
            }
        });
    } else if (reqUrl.pathname.match(/static\/css/ig)) {
        fs.readFile(path.join(__dirname, reqUrl.pathname), function(err, css){
            try {
                if(err) throw "not found";

                res.writeHeader(200, {'Content-Type': 'text/css'});
                res.write(css);
                res.end();
            } catch(e) {
                res.writeHeader(404, {'Content-Type': 'text/plain'});
                res.write("Not found");
                res.end();
            }
        });
    } else {
        switch(reqUrl.pathname) {
            case "/":
                fs.readFile(path.join(__dirname, "/static/index.html"), function(err, html){
                    res.writeHeader(200, {'Content-Type': 'text/html'});
                    res.write(html);
                    res.end();
                });
            break;
            case "/contact":
                let contacts = [];

                let person = new Person("Jhon", "03/17/1992");
                let phone = new Phone("99", "33333333", "residential");
                let phoneCell = new Phone("99", "999999999", "cellular");
                let contact = new Contact(person, phone, phoneCell);

                contacts.push(contact.toObject());

                person = new Person("Jana", "06/17/1970");
                phone = new Phone("99", "30000000", "residential");
                phoneCell = new Phone("99", "999999999", "cellular");
                contact = new Contact(person, phone, phoneCell);
                
                contacts.push(contact.toObject());

                res.writeHeader(200, {'Content-Type': 'text/json'});
                res.write(JSON.stringify(contacts));
                res.end();
            break;
            default:
                res.writeHeader(404, {'Content-Type': 'text/plain'});
                res.write("Not found");
                res.end();
            break;
        }
    }
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`);
});
