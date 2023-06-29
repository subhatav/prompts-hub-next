"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search States
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    setAllPosts(await response.json());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchText) => {
    // Flag `i` is for Case-Insensitive Search
    const regExp = new RegExp(searchText, "i");

    return allPosts.filter(
      (item) =>
        regExp.test(item.creator.username) ||
        regExp.test(item.tag) ||
        regExp.test(item.prompt)
    );
  };

  const handleSearchChange = (event) => {
    clearTimeout(searchTimeout);

    const targetValue = event.target.value;

    setSearchText(targetValue);
    setSearchTimeout(
      setTimeout(() => {
        setSearchedResults(filterPrompts(targetValue));
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          required
          type="text"
          className="search_input peer"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search for Tags or any Username!"
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
