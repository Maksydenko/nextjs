import { useState } from "react";

export const useInput = () => {
  const [filterText, setFilterText] = useState("");

  function onFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  return { filterText, onFilterTextChange };
};
