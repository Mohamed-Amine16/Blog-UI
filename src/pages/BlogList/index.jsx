import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../store/postSlice";

import PostCard from "../../components/PostCard";

const Index = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]); //the same []

  return (
    <div className="flex-grow">
      {posts.map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          description={post.desciption}
          createdAt={post.createdAt}
          path={post._id}
        />
      ))}
    </div>
  );
};

export default Index;
