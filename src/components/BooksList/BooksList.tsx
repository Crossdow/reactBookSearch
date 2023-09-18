import React from 'react';
import SpinLoader from "../UI/Loaders/SpinLoader/SpinLoader";
import { observer } from "mobx-react-lite";
import bookStore, { Book } from "../../stores/book-store";
import BookCard from "../BookCard/BookCard";
import classes from "./BookList.module.scss";

const BooksList = observer(() => {
  const { books, loadMoreBooks, isLoading, totalItems, showBooksList } = bookStore;

  return (
    <div>
      {showBooksList ? (
        <>
          {isLoading && books.length === 0 ? (
            <SpinLoader />
          ) : (
            <>
              <p style={{marginBottom: '2vh', marginTop: '0.5vh', fontSize: '15px', fontStyle: 'italic'}}>
                Found {totalItems} results
              </p>
              <ul className={classes.myBookList}>
                {books.map((book: Book) => (
                  <BookCard
                    key={book.id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                    categories={book.volumeInfo.categories}
                  />
                ))}
              </ul>
              {isLoading && books.length > 0 ? (
                <SpinLoader />
              ) : (
                <button onClick={loadMoreBooks} style={{cursor: "pointer", border: "1px solid black", borderRadius: "10px", padding: "10px", marginTop: "40px", marginBottom: "40px"}}>
                  Load more
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <h1 style={{marginTop: '10vh', color: '#8ae7f8', opacity: '0.5', fontSize: '70px'}}>Search!</h1>
      )}
    </div>
  );
});

export default BooksList;