import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPost = () => {
  const [posts, setposts] = useState([]);

  const get_posts = () => {
    axios
      .get(`https://tricky-pear-ox.cyclic.app/posts/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setposts(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    get_posts();
  }, []);

  return (
    <div>
      <h1>View Posts</h1>

      {posts.map((el, i) => (
        <div key={i}>
          <h2>{el.title}</h2>
          <h3>{el.body}</h3>
          <button>Delete</button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ViewPost;
