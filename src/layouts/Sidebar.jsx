import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchPosts } from "../store/postSlice";
import PostCard from "../components/PostCard";

const Sidebar = () => {
  const dispatch = useDispatch();
const {posts}=useSelector ((state)=> state.posts)

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

    return (
        <div className="mt-8 min-w-1/3">
        {posts.slice(0,4).map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          description={post.desciption}
          createdAt={post.createdAt}
          path={post._id}
        />))
}
      </div>
    );
  };
  
  export default Sidebar;

  