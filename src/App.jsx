import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  console.log(books);
  const handleCreateBook = (title) => {
    const newBook = {
      id: Math.round(Math.random() * 10000),
      title: title,
    };

    setBooks([...books, newBook]);
  };

  return (
    <>
      <div className="flex justify-center bg-orange-200 min-h-screen">
        <BookCreate onCreate={handleCreateBook} />
        <BookList books={books} />
      </div>
    </>
  );
}

export default App;
