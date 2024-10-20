import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  console.log(books);

  const handleCreateBook = (title) => {
    const newbook = {
      id: Math.round(Math.random() * 10000),
      title: title,
    };
    const updatedBooks = [...books, newbook];

    setBooks(updatedBooks);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  return (
    <>
      <div className="flex flex-col bg-orange-200 min-h-screen">
        <BookCreate className="align-center" onCreate={handleCreateBook} />
        <BookList books={books} deleteBook={handleDelete} />
      </div>
    </>
  );
}

export default App;
