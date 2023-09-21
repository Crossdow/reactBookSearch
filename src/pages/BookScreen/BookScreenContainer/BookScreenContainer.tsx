import React, { useState } from 'react';
import classes from "./BookScreenContainer.module.scss";
import { formatAuthorsList } from "../../../utils/formatAuthorsList";
import BookInfoButton from "../../../components/UI/Buttons/BookInfoButton/BookInfoButton";
import {Link} from "react-router-dom";

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
    language: string,
    previewLink: string
  }
}

const BookScreenContainer: React.FC<Props> = ({ imagePath, bookData }) => {

  const [info, setInfo] = useState<React.ReactNode>(<div className={classes.myAbout}>{bookData.description ? (<div dangerouslySetInnerHTML={{__html: bookData.description}}></div>) : 'Description of the book is not found.'}</div>);
  const [activeButton, setActiveButton] = useState('about');

  const handleAboutClick = () => {
    setInfo(<div className={classes.myAbout}>{bookData.description ? (<div dangerouslySetInnerHTML={{__html: bookData.description}}></div>) : 'Description of the book is not found.'}</div>);
    setActiveButton('about');
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
    setActiveButton('characteristic');
  }

  return (
    <div className={classes.myBookScreenContainer}>
      <div className={classes.myBookImageContainer}>
        <img src={imagePath} alt={'bookImage'}/>
      </div>
      <div className={classes.myBookInfoContainer}>
        <h6 className={classes.myBookScreenContainer__categories}>{bookData.categories}</h6>
        <h1 className={classes.myBookScreenContainer__title}>{bookData.title}</h1>
        <h6 className={classes.myBookScreenContainer__authors}>
          { bookData.authors ? bookData.authors.length > 1 ? formatAuthorsList(bookData.authors) : bookData.authors : null}
        </h6>
        <div className={classes.myBookInfoButtonsContainer}>
          <BookInfoButton onClick={handleAboutClick} active={activeButton === 'about'}>About</BookInfoButton>
          <BookInfoButton onClick={handleCharacteristicClick} active={activeButton === 'characteristic'}>Characteristic</BookInfoButton>
        </div>
        <div className={classes.myBookScreenContainer__info}>{info}</div>
        <div className={classes.myBookScreenContainer__google}>
          <Link to={bookData.previewLink} target="_blank">
            <button className={classes.googleBtn}>Open in Google Books</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookScreenContainer;