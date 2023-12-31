//import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";

import { fetchPosts } from "../store/postSlice";
import { DeletePostById } from "../store/postSlice";

import makeDateReadable from "../utils/date";


const PostCard = ({ title, description, createdAt, path,id }) => {

  const dispatch = useDispatch();
 
  const Delete = () => {
    dispatch(DeletePostById(id)).then(() => dispatch(fetchPosts()));
    

  };

  return (
    <div className="max-w-2xl px-8 my-12 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {makeDateReadable(createdAt)}
        </span>
        <a
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          tabIndex="0"
          role="button"
        >
          {title}
        </a>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex="0"
          role="link"
        >
          {description}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Link
          to={"/" + path}
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          tabIndex="0"
          role="link"
        >
          Read more
        </Link>
        <Link
          to={"/" + path + "/edit"}
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          tabIndex="0"
          role="link"
        >
          Edit post
        </Link>
        <button
          className="text-blue-600 dark:text-blue-400 hover:underline"
          tabIndex="0"
          onClick={()=> Delete()}
        >
          Delete
        </button>
        <div className="flex items-center">
          <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <a
            className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
            tabIndex="0"
            role="link"
          >
            Khatab wedaa
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
