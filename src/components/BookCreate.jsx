import React from 'react';
import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="flex flex-col items-center text-2xl border h-40 bg-zinc-100 border-black rounded shadow-md p-10 mt-10">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-blue-500">Add New Book</label>
        <div className="bg-white rounded shadow">
          <input
            className="outline-none ml-1"
            value={title}
            type="text"
            placeholder="New book.."
            onChange={handleChange}
          />
          <button className="bg-blue-200 p-1 rounded hover:bg-blue-300 transition transform duration-100 ease-in-out">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;