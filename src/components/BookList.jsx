import React from 'react';
import BookShow from './BookShow';
import { useBooks } from '../contexts/BookContext';

const BookList = () => {
  const { books } = useBooks();

  const bookListDisplay = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className="flex flex-col items-center justify-evenly md:flex sm:flex-row flex-wrap ">
      {bookListDisplay}
    </div>
  );
};

export default BookList;
