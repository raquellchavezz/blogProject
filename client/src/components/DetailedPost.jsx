import * as React from "react";
import {
  BrowserRouter as Router,
  //   Link,
  //   Route,
  //   Routes,
  useParams,
} from "react-router-dom";

const DetailedPost = () => {
  const { id } = useParams();
  console.log("here");
  return <div> Hello{id}</div>; //if pass can we get id from link
};

export default DetailedPost;
