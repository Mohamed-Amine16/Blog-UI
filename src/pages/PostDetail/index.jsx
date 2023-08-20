//import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../store/postSlice";


const PostDetail = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);


  useEffect(() => {
    dispatch(fetchPostById(id));
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto flex-grow">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
            massa et auctor.
          </h2>
          <a
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            {post?.content}
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p className="pb-6">
            Advantage old had otherwise sincerity dependent additions. It in
            adapted natural hastily is justice. Six draw you him full not mean
            evil. Prepare garrets it expense windows shewing do an. She
            projection advantages resolution son indulgence. Part sure on no
            long life am at ever. In songs above he as drawn to. Gay was
            outlived peculiar rendered led six.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
