import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Post = ({blogPost, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateBlogPost) => {
        toUpdate(toUpdateBlogPost)
    }

    const onDelete = (toDeleteBlogPost) => {
        toDelete(toDeleteBlogPost)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{blogPost.firstname} {blogPost.lastname}{blogPost.title} {blogPost.date} {blogPost.content}</Card.Title>
            <Button variant="outline-danger" onClick={()=>{onDelete(blogPost)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(blogPost)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Post;