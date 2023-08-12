//import React from 'react'
import { useSelector } from "react-redux";

import PostCard from "../../components/PostCard";

const index = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="flex-grow">
      {posts.map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          description={post.desciption}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};

export default index;
