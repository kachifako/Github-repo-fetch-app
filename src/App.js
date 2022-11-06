//import React, { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import RepoList from "./pages/repoList/RepoList";
import SingleRepo from "./pages/singleRepo/SingleRepo";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import SignInPage from "./pages/signIn/SignInPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import UserProfile from "./pages/userProfile/UserProfile";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignInPage />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/repolist">
            <Route index element={<RepoList />} />
            <Route path=":singlerepo" element={<SingleRepo />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
