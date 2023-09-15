import React from 'react';
import classes from "./BookCard.module.scss";

type Props = {
  title: string
  authors?: string[]
  categories?: string[]
  image?: string | null
  id: string
}

const BookCard: React.FC<Props> = ({title, authors, categories, image, id}) => {
  return (
    <li className={classes.myBookCard}>
      <a href={`/book/${id}`}>
        <div>
          <img src={image ? image : 'добавить заглушку'} alt=""/>
        </div>
      </a>
      {categories && <div>{categories}</div>}
      <a href={`/book/${id}`}>
        {title}
      </a>
      {authors && <div>{authors}</div>}
    </li>
  );
};

export default BookCard;