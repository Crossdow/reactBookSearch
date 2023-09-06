import React, { useState } from 'react';
import BookLoaderService from "../../services/book-loader-service";
import BookSearchButton from "../UI/Buttons/BookSearchButton/BookSearchButton";
import BookSearchInput from "../InputForm/BookSearchInput";
import SpinLoader from "../UI/Loaders/SpinLoader/SpinLoader";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
  };
}

const BooksList = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // Добавляем состояние для отслеживания индекса
  const bookLoader = new BookLoaderService();

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await bookLoader.loadBooks(query, startIndex); // Передаем текущий индекс
      const booksData = response.items || [];
      setBooks(booksData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading books:', error);
      setIsLoading(false);
    }
  };

  const loadMoreBooks = async () => {
    setIsLoading(true);
    try {
      const response = await bookLoader.loadBooks(query, startIndex + 30); // Увеличиваем индекс на 30
      const newBooks = response.items || [];
      setBooks((prevBooks) => [...prevBooks, ...newBooks]); // Добавляем новые книги к существующим
      setIsLoading(false);
      setStartIndex(startIndex + 30); // Обновляем индекс
    } catch (error) {
      console.error('Error loading more books:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <BookSearchInput query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <BookSearchButton handleSearch={handleSearch} />
      <button onClick={loadMoreBooks}>Load more</button>

      {isLoading ? (
        <SpinLoader />
      ) : (
        <>
          <ul>
            {books.map((book) => (
              <li key={book.id}>{book.volumeInfo.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BooksList;