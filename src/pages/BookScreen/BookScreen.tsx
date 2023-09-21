import React, { useEffect } from 'react';
import Header from "../../components/Header/Header";
import bookStore from "../../stores/book-store";
import {useParams} from "react-router-dom";
import { observer } from "mobx-react-lite";
import classes from "./BookScreen.module.scss";
import BackButton from "../../components/UI/Buttons/BackButton/BackButton";
import SpinLoader from "../../components/UI/Loaders/SpinLoader/SpinLoader";
import coverFallback from "../../assets/images/book-cover-fallback.png";
import BookScreenContainer from "./BookScreenContainer/BookScreenContainer";

const BookScreen = observer(() => {
  const params = useParams();
  const bookId = params.id;
  const { bookData, setBookId, handleSearchInfo, isLoading} = bookStore;

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        await setBookId(bookId);
        await handleSearchInfo();
      } catch (error) {
        console.error('Error loading info about book:', error);
      }
    }

    (async () => {
      try {
        await fetchBookData()
      } catch (error) {
        console.error('Error loading info about book:', error);
      }
    })();

  }, [bookId, handleSearchInfo, setBookId]);

  let image = bookData.imageLinks ? bookData.imageLinks.thumbnail ? bookData.imageLinks.thumbnail : coverFallback : coverFallback;

  return (
    <div className={classes.myBookScreen}>
      <Header/>
      {isLoading ? (
        <SpinLoader/>
      ) : (
        <div className={classes.myBookScreenInfo}>
          <div className={classes.myBookScreenInfo__backButton}>
            <BackButton link={"/"} />
          </div>
          <BookScreenContainer bookData={bookData} imagePath={image} key={bookId} />
        </div>
      )}
    </div>
  );
});

export default BookScreen;
