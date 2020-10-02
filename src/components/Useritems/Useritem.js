import React from 'react';
import { Link } from 'react-router-dom';

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img src={avatar_url} alt='' />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-danger'>
          More
        </Link>
      </div>
    </div>
  );
};

export default Useritem;
