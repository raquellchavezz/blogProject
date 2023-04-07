import React from "react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Card, Button, Icon, Image } from "semantic-ui-react";

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
          {blogPost.firstname} {blogPost.lastname} {blogPost.title}{" "}
          {blogPost.date}
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
