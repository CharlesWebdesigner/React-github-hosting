import React from "react";

function RepoList({ repos }) {
  return (
    <div>
      <h2 className="cssanimation hu__hu__" style={{ color: "#fff" }}>
        Repositories
      </h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
