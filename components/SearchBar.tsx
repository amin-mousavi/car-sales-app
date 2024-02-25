"use client";
import { FormEvent, useState } from "react";
import SearchManufacture from "./SearchManufacture";

const SearchBar = () => {
  const [manufacturer, setManufacture] = useState("");

  const handleSearch = () => {
    // do something with the search term here
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacturer}
          setManuFacturer={setManufacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
