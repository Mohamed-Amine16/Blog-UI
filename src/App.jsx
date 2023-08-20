import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BlogList from "./pages/BlogList";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import MainLayout from "./layouts/MainLayout";
import PostEdit from "./pages/PostEdit";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <MainLayout>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/:id" element={<PostDetail />} />
          <Route path="/:id/edit" element={<PostEdit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
