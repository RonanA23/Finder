import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubcontext';

export default function Practice() {
  const [blah, setBlah] = useState('');

  const githubContext = useContext(GithubContext);
  const {
    getUser,
    loading,
    user,
    repos,
    getUserRepos,
    query,
    change,
  } = githubContext;
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  const onClick = () => {
    setBlah(query);
  };

  const Nuffing = () => {
    console.log(' I didnt do nuffink');
  };
  return (
    <div>
      <h1>This is a practice page</h1>
      <h2>Hi There</h2>
      <h3>BLAH is:{blah}</h3>
      <button onClick={onClick}>Press Me</button>
      <button onClick={change}>Now This One</button>
    </div>
  );
}
