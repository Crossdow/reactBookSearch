import React from 'react';
import Header from "../../components/Header/Header";

const BookScreen = () => {
  return (
    <div>
      <Header/>
      <div>
        <button>Back</button>
        <div>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <h6>Жанр</h6>
            <h1>Название</h1>
            <h6>Автор</h6>
            <button>About</button>
            <button>Characteristic</button>
            <div>Тут инфа, а кнопки выше переключают</div>
            <button>Open in Google Books</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookScreen;