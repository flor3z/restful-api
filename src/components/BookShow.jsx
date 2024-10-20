import React from 'react';

const BookShow = ({ book, deleteBook }) => {
  const handleClick = () => {
    deleteBook(book.id);
  };

  return (
    <div className="flex flex-col justify-between bg-white w-48 h-48 rounded shadow p-2 mb-2">
      <h3 className="underline font-medium tracking-wider">Book Title</h3>
      {book.title}
      <button
        onClick={handleClick}
        className="border-red-300 border-solid border-2 rounded hover:bg-red-300 hover:text-white transition transform duration-100 ease-in-out active:bg-red-400"
      >
        Delete
      </button>
    </div>
  );
};

export default BookShow;
