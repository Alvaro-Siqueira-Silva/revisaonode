/**
 * exemplo
 * @author alvaro
 */

const http = require("http")
http.createServer((req,res)=>{
    res.write("Bem vindo ao node")
    res.end()
}).listen(4040)
