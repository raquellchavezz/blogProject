import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import User from './Post';

const ListBlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]); // array of objs of the blog posts i have 
    // const [currentPostId, setCurrentPostId] = useState("");
    const [editingBlogPost,setEditingBlogPost] = useState(null);

    const loadBlogPosts = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/blogPosts")
            .then((response) => response.json())
            .then((blogPosts) => {
                setBlogPosts(blogPosts);
            });
    }

    useEffect(() => {
        loadBlogPosts();
    }, [blogPosts]);

    const onSaveBlogPost = (newBlogPost) => {
        //console.log(newStudent, "From the parent - List of Students");
        setBlogPosts((blogPosts) => [...blogPosts, newBlogPost]);
    }


    // A function to control the update in the parent (student component)
    const updateBlogPost = (savedBlogPost) => {
        // console.log("Line 29 savedStudent", savedStudent);
        // This function should update the whole list of students - 
        loadBlogPosts();
    }

    //A function to handle the Delete funtionality
    const onDelete = (post) => {
        //console.log(student, "delete method")
        return fetch(`http://localhost:8080/api/blogposts/${blogpost.id}`, {
            method: "DELETE"
        }).then((response) => {
            //console.log(response);
            if (response.ok) {
                loadBlogPosts();
            }
        })
    }

    //A function to handle the Update functionality
    const onUpdate = (toUpdateBlogPost) => {
        //console.log(toUpdateStudent);
        setEditingBlogPost(toUpdateBlogPost);

    }



    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Techtonica Participants </h2>
            <ul>
                {blogPosts.map((blogPost) => {
                    return <li key={blogPost.id}> <Post blogPost={post} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul>
        </div>
        <MyForm key={editingBlogPost ? editingBlogPost.id : null} onSaveBlogPost={onSaveBlogPost} editingBlogPost={editingBlogPost} onUpdate={updateBlogPost} />
        </div>
    );
}

export default ListBlogPosts;