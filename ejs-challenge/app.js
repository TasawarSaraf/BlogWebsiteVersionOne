//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Welcome to my blog! I'm Tasawar Saraf, a passionate computer science student at Lehigh University. As an aspiring web developer, I'm constantly seeking opportunities to enhance my skills and delve deeper into the fascinating world of technology. This blog serves as a testament to my dedication and growth, showcasing my proficiency in Node.js, Express.js, and EJS. Here, you'll find a collection of informative and engaging articles, tutorials, and insights, where I'll share my knowledge and experiences in web development. Join me on this exciting journey as we explore the limitless possibilities of the digital realm together. Let's dive in and discover the art of crafting exceptional web experiences!";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req,res)=>{
  res.render('home', {homeContent: homeStartingContent});
})


app.get("/about", (req,res)=>{
  res.render('about', {aboutContent: aboutContent});
})


app.get("/contact", (req,res)=>{
  res.render('contact', {contactContent: contactContent});
})











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
