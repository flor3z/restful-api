import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title: title,
    });

    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    console.log(`delete book with id ${id}`, response);

    const updatedBooks = books.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  const handleEditTitle = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log(response.data);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    handleCreateBook,
    handleDelete,
    handleEditTitle,
    getBooks,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};

const useBooks = () => {
  return useContext(BookContext);
};

export { BookProvider, useBooks };
