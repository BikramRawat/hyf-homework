import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { UserProvider } from "./contexts/userContext";
import "./assets/styles.css";
import searchUsersApi from "./components/searchUsersApi";

function App() {
  const [githubUsers, setGithubUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!inputText) {
      return;
    }
    setIsLoading(true);
    setGithubUsers([]);
    searchUsersApi(inputText)
      .then((result) => {
        if (result.items) {
          setGithubUsers(result.items);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [inputText]);

  const gitHubUsersContextValues = {
    githubUsers,
    isError,
    setInputText,
    inputText,
    isLoading,
  };

  return (
    <UserProvider value={gitHubUsersContextValues}>
      <Header />
      <SearchInput />
    </UserProvider>
  );
}

export default App;
