import React from "react";

function ComparisonTab({
  followers,
  following,
  fetchFollowers,
  fetchFollowing,
  api,
}) {
  const followersSet = new Set(followers.map((f) => f.login));
  const followingSet = new Set(following.map((f) => f.login));

  const notFollowingBack = following.filter(
    (user) => !followersSet.has(user.login)
  );
  const notFollowedByYou = followers.filter(
    (user) => !followingSet.has(user.login)
  );

  const followUser = async (username) => {
    try {
      await api.put(`/user/following/${username}`);
      fetchFollowing();
    } catch (error) {
      console.error("Error following user", error);
    }
  };

  const unfollowUser = async (username) => {
    try {
      await api.delete(`/user/following/${username}`);
      fetchFollowing();
    } catch (error) {
      console.error("Error unfollowing user", error);
    }
  };

  return (
    <div>
      <h2 className="cssanimation bounceX" style={{ color: "#fff" }}>
        Comparison Tab
      </h2>
      <div>
        <h3>People You're Following But Not Following You Back</h3>
        <hr />
        <br />
        <ul>
          {notFollowingBack.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} width="50" />
              <span>{user.login}</span>
              <button onClick={() => unfollowUser(user.login)}>Unfollow</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>People Following You But You Are Not Following Back</h3>
        <hr />
        <br />
        <ul>
          {notFollowedByYou.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} width="50" />
              <span>{user.login}</span>
              <button onClick={() => followUser(user.login)}>Follow</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ComparisonTab;
