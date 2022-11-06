import "./single_repo.css";
import React, { useState } from "react";
import axios from "axios";
import RepoList from "../repoList/RepoList.js";
import { Link, useParams } from "react-router-dom";

export default function SingleRepo(id, desc, language, isPrivate, createdAt) {
  const [repo, setRepo] = useState([])
  const { singlerepo } = useParams();
  const { name } = repo;

  const getRepo = async () => {
    const result = await axios.get(
      "https://api.github.com/users/kachifako/repos"
    );
    const repo = await result.data;

    return repo;
  };

  return (
    <div className="singlerepo-div">
      <h2 className="singlerepo-h1"> {singlerepo} </h2>
      <Link to="/repolist">back to user repositories</Link>
    </div>
  );
}
