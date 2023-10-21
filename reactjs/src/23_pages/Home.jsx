import React, { useEffect, useState } from 'react';
import { useFirebase } from '../23_Context/Firebase';
import BookCard from '../23_Components/Card';

function HomePage() {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, []);

  return (
    <div className="container">
      {books.map((book) => (
        <BookCard key={book.id} id={book.id} {...book.data()} />
      ))}
    </div>
  );
}

export default HomePage;
