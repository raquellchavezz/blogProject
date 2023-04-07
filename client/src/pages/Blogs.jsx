import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
import MyForm from "../components/Form"; //this is the child of listPosts
import Post from "../components/Post"; //this is the child of listPosts

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]); // array of objs of the blog posts i have
  // const [currentPostId, setCurrentPostId] = useState("");
  const [editingBlogPost, setEditingBlogPost] = useState(null);

  const loadBlogPosts = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch("http://localhost:8080/api/blogPosts")
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data); //setBlogPost will automatically update the state of blogPosts dont need to pass it in
      });
  };

  useEffect(() => {
    loadBlogPosts();
  }, []); //dependency array whenever variable changes inside [] will trigger effect

  const onSaveBlogPost = (newBlogPost) => {
    //we can pass this function to the child (Form.jsx) through props
    //console.log(newStudent, "From the parent - List of Students");
    setBlogPosts((blogPosts) => [...blogPosts, newBlogPost]);
  };

  // A function to control the update in the parent (student component)
  const updateBlogPost = (savedBlogPost) => {
    // console.log("Line 29 savedStudent", savedStudent);
    // This function should update the whole list of students -
    loadBlogPosts();
  };

  //A function to handle the Delete funtionality
  const onDelete = (blogPost) => {
    //console.log(blogPost, "delete method")
    console.log(blogPost);
    return fetch(`http://localhost:8080/api/deletepost/${blogPost.id_post}`, {
      method: "DELETE",
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        loadBlogPosts();
      }
    });
  };

  //A function to handle the Update functionality
  const onUpdate = (toUpdateBlogPost) => {
    //console.log(toUpdateStudent);
    setEditingBlogPost(toUpdateBlogPost);
  };

  return (
    <div className="mybody">
      <div className="list-students">
        <h2>Blog Posts </h2>
        <ul>
          {blogPosts.map((blogPost) => {
            return (
              <li key={blogPost.id_post}>
                {" "}
                <Post
                  blogPost={blogPost}
                  toDelete={onDelete}
                  toUpdate={onUpdate}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <MyForm
        key={editingBlogPost ? editingBlogPost.id : null}
        onSaveBlogPost={onSaveBlogPost}
        editingBlogPost={editingBlogPost}
        updateBlogPost={updateBlogPost}
      />
    </div>
  );
};

export default Blogs;
