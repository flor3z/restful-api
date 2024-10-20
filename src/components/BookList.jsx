import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books, deleteBook }) => {
  const bookListDisplay = books.map((book) => {
    return <BookShow key={book.id} book={book} deleteBook={deleteBook} />;
  });

  return (
    <div className="flex flex-col items-center justify-evenly md:flex sm:flex-row flex-wrap ">
      {bookListDisplay}
    </div>
  );
};

export default BookList;
