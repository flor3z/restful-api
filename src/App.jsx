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

  const handleEditTitle = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });

    setBooks(updatedBooks);
  };

  return (
    <>
      <div className="flex flex-col bg-orange-200 min-h-screen">
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
