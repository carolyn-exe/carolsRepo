const express = require("express")
const nunjucks = require ("nunjucks")
const data = require("./javascript/data")
const receitas = require  ("./javascript/data.js")

const server = express ()

server.set ("view engine", "njk")

server.use (express.static ("public"))

server.use ("/imagens", express.static ("imagens"))

server.use ("/javascript", express.static ("javascript"))

nunjucks.configure ("views", {
    express: server
})


/*server.get("/", function(req, res){
    return res.send ("Hi")
})*/

server.get("/", function(req, res){
    
    return res.render ("index")

})

server.get("/receitas", function(req, res){
    
    return res.render ("receitas", {items: receitas})

})

server.get("/sobre", function(req, res){
    
    return res.render ("sobre")

})

server.listen(5000, function (){

    console.log('server is running')

})
