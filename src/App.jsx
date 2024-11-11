import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import { useBooks } from './contexts/BookContext';

function App() {
  const { getBooks } = useBooks();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <>
      <div className="flex flex-col bg-zinc-300 min-h-screen">
        <BookCreate className="align-center" />
        <BookList />
      </div>
    </>
  );
}

export default App;
