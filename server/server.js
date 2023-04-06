const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const path = require("path");
const db = require("./db/db-connection.js");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// create the get request for students in the endpoint '/api/blogPosts'
app.get("/api/blogPosts", async (req, res) => {
  try {
    const { rows: blogPosts } = await db.query("SELECT * FROM blog_posts");
    res.send(blogPosts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post("/api/addpost", async (req, res) => {
  try {
    const newBlogPost = {
      id_post: req.body.id_post,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      title: req.body.title,
      date: req.body.date, //not sure about date
      content: req.body.content,
    };
    //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
    const result = await db.query(
      "INSERT INTO blog_posts(firstname,lastname, title, content, date) VALUES($1, $2, $3, $4, NOW()) RETURNING *",
      [
        newBlogPost.firstname,
        newBlogPost.lastname,
        newBlogPost.title,
        newBlogPost.content,
      ]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// delete request for students
app.delete("/api/deletepost/:blogPostId", async (req, res) => {
  try {
    const blogPostId = req.params.blogPostId; //this is being controlled from both front and backend
    //paraams request come from endpoint defintion
    //req.params is an obj has key of blogpostid

    //body of req is whats being sent from front end using fetch calls
    await db.query("DELETE FROM blog_posts WHERE id_post=$1", [blogPostId]);
    console.log("From the delete request-url", blogPostId);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//A put request - Update a student
app.put("/api/updateblog/:blogPostId", async (req, res) => {
  //console.log(req.params);
  //This will be the id that I want to find in the DB - the student to be updated
  const blogPostId = req.params.blogPostId;
  console.log("blogPostId", blogPostId);
  console.log("req.params obj", req.params);
  const updatedBlogPost = {
    id: req.body.id_post,
    title: req.body.title,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    content: req.body.content,
  };
  console.log("In the server from the url - the student id", blogPostId);
  console.log(
    "In the server, from the react - the student to be edited",
    updatedBlogPost
  );
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE blog_posts SET firstname=$1, lastname=$2, title=$3, content=$4 WHERE id_post=${blogPostId} RETURNING *`;
  const values = [
    updatedBlogPost.firstname,
    updatedBlogPost.lastname,
    updatedBlogPost.title,
    updatedBlogPost.content,
  ];
  try {
    const updated = await db.query(query, values);
    console.log(query);
    console.log(values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
