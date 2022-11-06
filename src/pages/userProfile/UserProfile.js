import "./user_profile.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserProfile(id, name, html_url, avatar_url) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUser = async () => {
    const result = await axios.get("https://api.github.com/users/kachifako");
    const user = await result.data;

    return user;
  };

  useEffect(() => {
    setError(false);
    setLoading(true);
    getUser()
      .then((response) => {
        setLoading(false);
        setUser(response);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (

    <article className="profile-body">
       {loading ? (<h2>Loading...</h2>) :
        
      (<><h1 className="profile-h1">{user.name}'s Github Profile</h1>
      <div className="about-user">
        <img
          className="profile-pic"
          alt="kachifako's picture"
          src={user.avatar_url}
        />
        <div className="user-details">
          <h2 className="profile-h2"> Username: {user.login}</h2>
          <a className="profile-link" href={user.html_url}>
            See more about me <span>here</span>.
          </a>
          <br />
          <a
            className="profile-link"
            target="_blank"
            href="https://twitter.com/pwettykach"
          >
            Follow me on <span>Twitter</span>
          </a>
        </div>
      </div></>)}
        
    </article>
  );
}
