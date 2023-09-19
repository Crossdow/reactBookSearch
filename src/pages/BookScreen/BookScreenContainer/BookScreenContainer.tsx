import React, { useState } from 'react';
import classes from "./BookScreenContainer.module.scss";
import { formatAuthorsList } from "../../../utils/formatAuthorsList";
import BookInfoButton from "../../../components/UI/Buttons/BookInfoButton/BookInfoButton";

interface Props {
  imagePath: string,
  bookData: {
    categories: string,
    title: string,
    authors: string[],
    description: string,
    pageCount: number,
    publisher: string,
    publishedDate: string,
    language: string
  }
}

const BookScreenContainer: React.FC<Props> = ({ imagePath, bookData }) => {
  const [info, setInfo] = useState<React.ReactNode>(<div className={classes.myAbout}>{bookData.description}</div>);

  const handleAboutClick = () => {
    setInfo(<div>{bookData.description}</div>);
  }

  const handleCharacteristicClick = () => {
    setInfo(
      <div className={classes.myCharacteristic}>
        <div>
          <b>Count of pages: </b>{bookData.pageCount ? bookData.pageCount : null}
        </div>
        <div>
          <b>Publisher: </b>{bookData.publisher ? bookData.publisher : null}
        </div>
        <div>
          <b>Publication date: </b>{bookData.publishedDate ? bookData.publishedDate : null}
        </div>
        <div>
          <b>Language: </b>{bookData.language ? bookData.language : null}
        </div>
      </div>
    );
  }

  return (
    <div className={classes.myBookScreenContainer}>
      <div className={classes.myBookImageContainer}>
        <img src={imagePath} alt={'bookImage'} />
      </div>
      <div className={classes.myBookInfoContainer}>
        <h6>{bookData.categories}</h6>
        <h1>{bookData.title}</h1>
        <h6>
          { bookData.authors ? bookData.authors.length > 1 ? formatAuthorsList(bookData.authors) : bookData.authors : null}
        </h6>
        <BookInfoButton onClick={handleAboutClick}>About</BookInfoButton>
        <BookInfoButton onClick={handleCharacteristicClick}>Characteristic</BookInfoButton>
        <div>{info}</div>
        <button>Open in Google Books</button>
      </div>
    </div>
  );
};

export default BookScreenContainer;