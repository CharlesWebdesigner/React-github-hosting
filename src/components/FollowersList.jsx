import React from "react";

function FollowersList({ followers }) {
  return (
    <div>
      <h2 className="cssanimation hu__hu__" style={{ color: "#fff" }}>
        Followers
      </h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <img src={follower.avatar_url} alt={follower.login} width="50" />
            <span>{follower.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowersList;
