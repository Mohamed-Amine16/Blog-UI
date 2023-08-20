import { useFormik } from "formik";
import * as Yup from "yup";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostById } from "../../store/postSlice";
import { UpdatePostById } from "../../store/postSlice";

const CreateSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  description: Yup.string().required("Description is required"),
});

const Index = () => {
  const id = useParams().id;
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, []);

  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      description: "",
    },
    validationSchema: CreateSchema,
    onSubmit: (values) => {
      if (Object.keys(formik.errors.length === 0)) {
        dispatch(UpdatePostById({ id: post._id, payload: values })).then(() => {
          dispatch(fetchPostById(id));
        });
      }
    },
  });

  useEffect(() => {
    if (post) {
      formik.setValues({
        title: post.title,
        content: post.content,
        description: post.description,
      });
    }
  }, [post]);
  return (
    <div className="flex-grow my-12">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <label
          className="block text-sm text-gray-500 dark:text-gray-300"
          htmlFor="title"
        >
          Post title:{" "}
        </label>
        <input
          className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title ? (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {formik.errors.title}
          </span>
        ) : null}

        <label
          className="block text-sm text-gray-500 dark:text-gray-300"
          htmlFor="content"
        >
          Post content:{" "}
        </label>
        <input
          className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          id="content"
          name="content"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        {formik.errors.content && formik.touched.content ? (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {formik.errors.content}
          </span>
        ) : null}

        <label
          className="block text-sm text-gray-500 dark:text-gray-300"
          htmlFor="description"
        >
          Post description:{" "}
        </label>
        <textarea
          className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        ></textarea>
        {formik.errors.description && formik.touched.description ? (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {formik.errors.description}
          </span>
        ) : null}
        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default Index;
