import React from "react";
import "./repocard.css";

export default function RepoCard({
  name,
  desc,
  language,
  isPrivate,
  createdAt,
  htmlUrl
}) {
  return (
    <><section className="repocard-container">
      <h3>Name: {name}</h3>
      <p><span>Description:</span> {desc ? desc : "No description available."}</p>
      <p><span>Language:</span> {language}</p>
      <p><span>Repo type:</span> {isPrivate ? "Private" : "Public"}</p>
      <p><span>created at:</span> {createdAt}</p>
      <div><a href={htmlUrl}>see more</a></div>
    </section>
    
    </>
  );
}
