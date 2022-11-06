import React, { useEffect, useState } from "react";
import "./repo_list.css";
import axios from "axios";
import RepoCard from "../../components/repocard/RepoCard";
import Pagination from "../../components/pagination/Pagination";

export default function RepoList() {
  const [repolist, setRepolist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(6);

  const getRepos = async () => {
    const result = await axios.get(
      "https://api.github.com/users/kachifako/repos"
    );
    const repos = await result.data;

    return repos;
  };


  useEffect(() => {
    setError(false);
    setLoading(true);
    getRepos()
      .then((response) => {
        setLoading(false);
        setRepolist(response);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  //get current repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repolist.slice(indexOfFirstRepo, indexOfLastRepo)

  //change page
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <>
    <section className="list-body">
      {loading ? (
        <h2 className="repolist-h2">LOADING...</h2>
      ) : (
        currentRepos.map(eachrepo => (
          <RepoCard
            key={eachrepo.id}
            name={eachrepo.name}
            desc={eachrepo.description}
            language={eachrepo.language}
            isPrivate={eachrepo.private}
            createdAt={eachrepo.created_at}
            htmlUrl={eachrepo.html_url}
          />
        ))
      )}
      
    </section>
    <Pagination totalRepos={repolist.length} reposPerPage={reposPerPage} paginate={paginate} />
    </>
  );
}
