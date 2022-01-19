const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve (__dirname, "./public");

app.use(express.static(publicPath));

let port = 3030

app.listen (process.env.PORT || port, () =>{
    console.log("Corriendo en el servidor:", port)
});
app.get ("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get ("/login", function (req,res){
    res.sendFile(path.join(__dirname, "/views/login.html"))
});
app.get ("/register", function (req,res){
    res.sendFile(path.join(__dirname, "/views/register.html"))
});