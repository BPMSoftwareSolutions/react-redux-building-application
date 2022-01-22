import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/header";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";
import ManageCoursePage from "./components/courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:slug" element={<ManageCoursePage />} />
        <Route path="/course" element={<ManageCoursePage />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
