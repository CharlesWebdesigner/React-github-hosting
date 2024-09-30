import React from "react";

function FollowingList({ following }) {
  return (
    <div>
      <h2 className="cssanimation hu__hu__" style={{ color: "#fff" }}>
        Following
      </h2>
      <ul>
        {following.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <span>{user.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowingList;
