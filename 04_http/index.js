const http = require("http");
const fs = require("fs")
const url = require("url")

const port = 8000;

const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile("./log.txt",log, (err, data)=>{
        switch(myUrl.pathname){
            case '/': 
                res.end("Home Page")
                break;
            case "/about":
                const username = url.query.myname;
                res.end(`Hi, ${username}`)
                break;
            case "/search":
                const search =myUrl.query.search_query;
                res.end("Here are your results for"+ search)  
                break;
            case "/singup":
                if(req.method === "GET") res.end("this is a signup Form");
                else if (req.method === "POST"){
                    //DB query
                    res.end("success");
                }    
            default:
                res.end("404 Page Not Found")  

        }
    })
});

myServer.listen(port,()=>{
    console.log(`click here to see the live server: http://localhost:${port}`)
})