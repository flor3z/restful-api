import React from 'react';
import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, deleteBook, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="flex flex-col justify-between bg-white  rounded shadow p-2 mb-2">
      <img alt="photo" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div className="flex justify-between">
        <h3 className="underline font-medium tracking-wider">Book Title</h3>
        <button
          onClick={handleDeleteClick}
          className="border-red-300 border-solid border-2 rounded-full px-2 hover:bg-red-300 hover:text-white transition transform duration-100 ease-in-out active:bg-red-400"
        >
          X
        </button>
      </div>
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
      ) : (
        <p>{book.title}</p>
      )}

      <button
        onClick={handleShowEdit}
        className="border-green-500 border-solid border-2 rounded hover:bg-green-500 hover:text-white transition transform duration-100 ease-in-out active:bg-green-600"
      >
        Edit
      </button>
    </div>
  );
};

export default BookShow;
