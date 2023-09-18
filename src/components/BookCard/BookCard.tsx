import React from 'react';
import classes from "./BookCard.module.scss";
import coverFallback from "../../assets/images/book-cover-fallback.png"
import {Link} from "react-router-dom";

type Props = {
  title: string
  authors?: string[]
  categories?: string[]
  image?: string | null
  id: string
}

const BookCard: React.FC<Props> = ({title, authors, categories, image, id}) => {
  const imagePath = image ? image : coverFallback;

  return (
    <li className={classes.myBookCard}>
      <div className={classes.myBookCard__image}>
        <Link to={`/book/${id}`}>
          <img src={imagePath} alt=""/>
        </Link>
      </div>
      {categories && <div className={classes.myBookCard__categories}>{categories}</div>}
      <Link to={`/book/${id}`} className={classes.myBookCard__title}>
        {title}
      </Link>
      {authors && <div className={classes.myBookCard__authors}>{authors}</div>}
    </li>
  );
};

export default BookCard;