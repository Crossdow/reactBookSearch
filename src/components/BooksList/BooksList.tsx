import React from 'react';
import SpinLoader from "../UI/Loaders/SpinLoader/SpinLoader";
import {observer} from "mobx-react-lite";
import bookStore, {Book} from "../../stores/book-store";
import BookCard from "../BookCard/BookCard";
import classes from "./BookList.module.scss";

const BooksList = observer(() => {
  const { books, loadMoreBooks, isLoading, totalItems} = bookStore;

  return (
    <div>
      <h1>
        total result = {totalItems}
      </h1>
      {isLoading ? (
        <SpinLoader />
      ) : (
        <>
          <ul className={classes.myBookList}>
            {books.map((book: Book) => (
              <BookCard id={(book.id)}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                        categories={book.volumeInfo.categories}
              />
            ))}
          </ul>
        </>
      )}

      <button onClick={loadMoreBooks}>Load more</button>
    </div>
  );
})

export default BooksList;