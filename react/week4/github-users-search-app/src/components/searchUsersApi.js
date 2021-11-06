const searchUsersApi = async (searchQuery) => {
  const API = await fetch(
    `https://api.github.com/search/users?q=${searchQuery}`
  ).then((response) => response.json());
  return API;
};

export default searchUsersApi;
