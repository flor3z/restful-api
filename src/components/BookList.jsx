import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <BookShow book={book} />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
