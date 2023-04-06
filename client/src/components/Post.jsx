import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import {Card, Button, Icon} from 'semantic-ui-react';

import * as ioicons from 'react-icons/io5'

const Post = ({blogPost, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateBlogPost) => {
        toUpdate(toUpdateBlogPost)
    }

    const onDelete = (toDeleteBlogPost) => {
        toDelete(toDeleteBlogPost)
    }

    return (
        <Card fluid>
            <Card.Content>
            <Card.Header>{blogPost.firstname} {blogPost.lastname}{blogPost.title} {blogPost.date} {blogPost.content}</Card.Header>
            <Button onClick={()=>{onDelete(blogPost)}} style={{padding: '0.6em', marginRight:'0.9em'}}><Icon name='trash'/></Button>
            <Button onClick={()=>{onUpdate(blogPost)}} style={{padding: '0.6em'}}> <Icon name='edit'/></Button>
            </Card.Content>
        </Card>
    )

}

export default Post;