import React, { useEffect, useState } from "react";
import "./style.css";
import { toast } from "sonner";

export default function Searchfield() {
  const [fieldIsFocused, setFieldIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fieldIsFocused && e.key === "Enter") {
        if (!searchValue) return toast.error("Søgefeltet er tomt!");  
        window.location.href = `/search?value=${searchValue}`;
      }
    };

    if (fieldIsFocused) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fieldIsFocused, searchValue]); // Removed unnecessary dependencies

  useEffect(() => {
    if (window.location.pathname === "/search") {
      setSearchValue(new URLSearchParams(window.location.search).get("value"));
    }
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Find lige det du mangler"
        onFocus={() => setFieldIsFocused(true)}
        onBlur={() => setFieldIsFocused(false)}
        value={searchValue || ""}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}
