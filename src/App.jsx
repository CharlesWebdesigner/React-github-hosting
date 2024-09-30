import { GITHUB_USERNAME, GITHUB_TOKEN } from "../../secret";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RepoList from "./components/RepoList";
import FollowersList from "./components/FollowersList";
import FollowingList from "./components/FollowingList";
import ComparisonTab from "./components/ComparisonTab";
import Spinner from "./components/Spinner";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(false); // To track loading state

  const api = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  // Fetch repositories
  const fetchRepos = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/users/${GITHUB_USERNAME}/repos`);
      setRepos(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching repositories", error);
      setLoading(false);
    }
  };

  // Fetch followers
  const fetchFollowers = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/users/${GITHUB_USERNAME}/followers`);
      setFollowers(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching followers", error);
      setLoading(false);
    }
  };

  // Fetch following
  const fetchFollowing = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/users/${GITHUB_USERNAME}/following`);
      setFollowing(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching following", error);
      setLoading(false);
    }
  };

  // Default load repos
  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Router>
      <div className="App">
        <h3>
          <div
            className="cssanimation open"
            style={{ color: "#fff", textSizeAdjust: "19px" }}
          >
            {" "}
            GitHub Management{" "}
          </div>
        </h3>
        <nav>
          <ul className="navbar">
            <li>
              <NavLink
                to="/"
                onClick={fetchRepos}
                style={({ isActive }) => ({
                  background: isActive ? "#555" : "#0056b3",
                })}
              >
                Repositories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/followers"
                onClick={fetchFollowers}
                style={({ isActive }) => ({
                  background: isActive ? "#555" : "#0056b3",
                })}
              >
                Followers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/following"
                onClick={fetchFollowing}
                style={({ isActive }) => ({
                  background: isActive ? "#555" : "#0056b3",
                })}
              >
                Following
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comparison"
                style={({ isActive }) => ({
                  background: isActive ? "#555" : "#0056b3",
                })}
              >
                Comparison
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Spinner while data is loading */}
        {loading && <Spinner />}

        <div className={`page-content ${loading ? "fade-out" : "fade-in"}`}>
          <Routes>
            <Route path="/" element={<RepoList repos={repos} />} />
            <Route
              path="/followers"
              element={<FollowersList followers={followers} />}
            />
            <Route
              path="/following"
              element={<FollowingList following={following} />}
            />
            <Route
              path="/comparison"
              element={
                <ComparisonTab
                  followers={followers}
                  following={following}
                  fetchFollowers={fetchFollowers}
                  fetchFollowing={fetchFollowing}
                  api={api}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
