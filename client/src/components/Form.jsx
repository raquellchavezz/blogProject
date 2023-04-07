import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const MyForm = ({ onSaveBlogPost, editingBlogPost, updateBlogPost }) => {
  //passing in props (the data) here from the parent which is listPosts

  // This is the original State with not initial student
  const [blogPost, setBlogPost] = useState(
    editingBlogPost || {
      firstname: "",
      lastname: "",
      title: "",
      content: "",
      imgUrl: "",
    }
  );
  //   console.log(editingBlogPost);
  //create functions that handle the event of the user typing into the form
  const handleFirstnameChange = (event) => {
    const firstname = event.target.value;
    setBlogPost((blogPost) => ({ ...blogPost, firstname }));
  };

  const handleLastnameChange = (event) => {
    const lastname = event.target.value;
    setBlogPost((blogPost) => ({ ...blogPost, lastname }));
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setBlogPost((blogPost) => ({ ...blogPost, title }));
  };

  const handleContentChange = (event) => {
    //whenever user presses a key
    const content = event.target.value;
    //console.log(content);
    setBlogPost((blogPost) => ({ ...blogPost, content }));
  };
  const handleImageChange = (event) => {
    // console.log(event.target.value);
    const imgUrl = event.target.value;
    //console.log(content);
    setBlogPost((blogPost) => ({ ...blogPost, imgUrl }));
  };

  const clearForm = () => {
    setBlogPost({
      firstname: "",
      lastname: "",
      title: "",
      content: "",
      imgUrl: "",
    });
  };

  //A function to handle the post request
  const postBlogPost = (newBlogPost) => {
    return fetch("http://localhost:8080/api/addpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlogPost),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the post ", data);
        //I'm sending data to the List of Students (the parent) for updating the list
        onSaveBlogPost(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the post request
  const putBlogPost = (toEditBlogPost) => {
    return fetch(
      `http://localhost:8080/api/updateblog/${toEditBlogPost.id_post}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toEditBlogPost),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        updateBlogPost(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (blogPost.id_post) {
      putBlogPost(blogPost);
    } else {
      postBlogPost(blogPost);
    }
  };

  return (
    <Form className="form-students" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <input
          type="text"
          id="add-user-name"
          placeholder="First Name"
          required
          value={blogPost.firstname}
          onChange={handleFirstnameChange} //onChange is whenever value in field changes
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={blogPost.lastname}
          onChange={handleLastnameChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Title</Form.Label>
        <input
          type="text"
          id="add-user-title"
          placeholder="name of your article here"
          required
          value={blogPost.title}
          onChange={handleTitleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <input
          type="text"
          id="add-user-content"
          placeholder="add content here"
          required
          value={blogPost.content}
          onChange={handleContentChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image URL</Form.Label>
        <input
          type="text"
          id="add-user-image"
          placeholder="add content here"
          required
          value={blogPost.imgUrl || ""} //if the value of blogPost.imgUrl is null OR empty then will move to next thing from l to r
          onChange={handleImageChange}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit" variant="outline-success">
          {blogPost.id_post ? "Edit post" : "Add post"}
        </Button>
        {blogPost.id_post ? (
          <Button type="button" variant="outline-warning" onClick={clearForm}>
            Cancel
          </Button>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default MyForm;

//payload is what you are sending to the backend
