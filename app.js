const express = require("express");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static("public"));


app.get("/",(request, response, next) => {
  return response.render('home', {name: 'Home'})
})
app.get("/works",(request, response, next) => {
  return response.render('works')
})
app.get("/gallery",(request, response, next) => {
  return response.render('gallery')
})
app.get("/about",(request, response, next) => {
  return response.render('about')
})



app.listen(3000, () => {})
