import React from "react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Card, Button, Icon, Image } from "semantic-ui-react";

import * as icons from "react-icons/io5";

const Post = ({ blogPost, toUpdate, toDelete }) => {
  const onUpdate = (toUpdateBlogPost) => {
    toUpdate(toUpdateBlogPost);
  };

  const onDelete = (toDeleteBlogPost) => {
    toDelete(toDeleteBlogPost);
  };

  return (
    <Card fluid>
      <Image src={blogPost.image_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {" "}
          {/*add some divs maybe paragraphs */}
          <div> {blogPost.title} </div>
          <div>
            {blogPost.firstname} {blogPost.lastname}
          </div>
          <div>{new Date(blogPost.date).toLocaleDateString()}</div>
          <div>{blogPost.content}</div>
        </Card.Header>
        <Button
          onClick={() => {
            onDelete(blogPost);
          }}
          style={{ padding: "0.6em", marginRight: "0.9em" }}
        >
          <Icon name="trash" />
        </Button>
        <Button
          onClick={() => {
            onUpdate(blogPost);
          }}
          style={{ padding: "0.6em" }}
        >
          {" "}
          <Icon name="edit" />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Post;
