import React from 'react';
import classes from "./Header.module.scss";
import BookSearchInput from "../BookSearchInput/BookSearchInput";
import BookSearchButton from "../UI/Buttons/BookSearchButton/BookSearchButton";
import bookStore from "../../stores/book-store";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
  const { query, handleSearch, setQuery, selectedCategory, categories, setCategory, selectedSortingOption, sortingOptions, setSortingOption } = bookStore;

  return (
    <div className={classes.header}>
      <h1 className={classes.headerTitle} style={{fontSize: "42px"}}>
        Book Search
      </h1>
      <div className={classes.headerSearcher}>
        <div className={classes.headerSearcher__inputAndButton}>
          <BookSearchInput query={query} setQuery={setQuery} handleSearch={handleSearch} />
          <BookSearchButton handleSearch={handleSearch} />
        </div>

        <div className={classes.headerWrapper}>
          <div className={classes.headerSearcher__categories}>
            <p>Categories</p>
            <select className={classes.mySelect} value={selectedCategory} onChange={(e) => setCategory(e.target.value)}>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className={classes.headerSearcher__sorting}>
            <p>Sorting by</p>
            <select className={classes.mySelect} value={selectedSortingOption} onChange={(e) => {
              setSortingOption(e.target.value)
            }}>
              {sortingOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </div>
  );
});

export default Header;