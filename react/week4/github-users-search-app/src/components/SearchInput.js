import React, { useContext } from "react";
import { userContext } from "./userContext";
import DisplayUsers from "./DisplayUsers";

export default function SearchInput() {
  const value = useContext(userContext);
  return (
    <div>
      <input
        type="search"
        value={value.inputText}
        onChange={(e) => {
          value.setInputText(e.target.value);
        }}
        placeholder="Enter the username to search ..."
      />
      <DisplayUsers />
    </div>
  );
}
