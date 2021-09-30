import React, { useContext } from "react";
import { userContext } from "./userContext";

export default function DisplayUsers() {
  const value = useContext(userContext);
  const users = value.githubUsers;

  return (
    <div>
      {value.isLoading && <p>Loading...</p>}
      {!users && <p>! Problem with API ...</p>}
      {users && users.length <= 0 ? (
        <p>! No results found !</p>
      ) : (
        <ul>
          {(
            users &&
            users.map((aUser) => {
              return <li key={aUser.id}>{aUser.login}</li>;
            })
          ).slice(0, 10)}
          {/* to display topmost 10 github users login names */}
          {value.isError && <h2>! Please reload the page ...</h2>}
        </ul>
      )}
    </div>
  );
}
