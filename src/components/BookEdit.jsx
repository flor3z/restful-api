import React, { useState } from 'react';
// import {useState} from "react"

const BookEdit = ({ book, onSubmit }) => {
  const [editTitleVal, setEditTitleVal] = useState(book.title);

  const handleChange = (event) => {
    setEditTitleVal(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, editTitleVal);
    console.log('adding new title:', editTitleVal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>New Title</label>
      <input
        className="rounded shadow"
        onChange={handleChange}
        type="text"
        value={editTitleVal}
      />
      <button className="border-blue-500 border-solid border-2 rounded px-1 hover:bg-blue-500 hover:text-white transition transform duration-100 ease-in-out active:bg-blue-600">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
