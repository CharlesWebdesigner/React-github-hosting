## GitHub API Project

A web application that leverages the GitHub API to provide a range of features for managing repositories, followers, and following relationships.

### Features

- #### List Repositories :
  Retrieve a list of repositories associated with a GitHub user
- #### List Followers:
  Display a list of users who are following a specific GitHub user.
- #### List Following:
  Show a list of users that a specific GitHub user is following.
- #### Add Follower:
  Allow users to add new followers to their GitHub account.
- #### Delete Follower:
  Enable users to remove followers from their GitHub account.

## Getting Started

### Prerequisites

- A GitHub account with API access
- Node.js installed on your machine (if you plan to run the project locally)

## API Keys and Authentication

Creating a new GitHub personal access token with the necessary permissions (e.g., repo, read:user, follow)

Storing the token as an environment variable or in a secure configuration file

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GITHUB_USERNAME`

`GITHUB_TOKEN`

## Acknowledgements

- [GitHub API documentation](https://docs.github.com/en/rest)
- [GitHub API terms of service](https://docs.github.com/en/github/site-policy/github-terms-of-service)
