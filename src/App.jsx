import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

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

  return (
    <>
      <div className="flex flex-col bg-zinc-300 min-h-screen">
        <BookCreate className="align-center" onCreate={handleCreateBook} />
        <BookList
          books={books}
          deleteBook={handleDelete}
          onEdit={handleEditTitle}
        />
      </div>
    </>
  );
}

export default App;
