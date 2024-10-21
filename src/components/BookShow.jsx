import React from 'react';
import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, deleteBook }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  return (
    <div className="flex flex-col justify-between bg-white w-48 h-48 rounded shadow p-2 mb-2">
      <div className="flex justify-between">
        <h3 className="underline font-medium tracking-wider">Book Title</h3>
        <button
          onClick={handleShowEdit}
          className="border-green-500 border-solid border-2 rounded px-1 hover:bg-green-500 hover:text-white transition transform duration-100 ease-in-out active:bg-green-600"
        >
          Edit
        </button>
      </div>
      {showEdit ? <BookEdit book={book} /> : <p>{book.title}</p>}

      <button
        onClick={handleDeleteClick}
        className="border-red-300 border-solid border-2 rounded hover:bg-red-300 hover:text-white transition transform duration-100 ease-in-out active:bg-red-400"
      >
        Delete
      </button>
    </div>
  );
};

export default BookShow;
