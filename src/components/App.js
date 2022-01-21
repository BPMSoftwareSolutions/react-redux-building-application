import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
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
