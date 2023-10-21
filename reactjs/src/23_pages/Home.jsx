import React, { useEffect, useState } from 'react';
import { useFirebase } from '../23_Context/Firebase';
import BookCard from '../23_Components/Card';

function HomePage() {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await firebase.listAllBooks();
        const bookArray = booksData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBooks(bookArray);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false); // Set loading to false when the data retrieval is done
      }
    };

    fetchBooks();
  }, [firebase]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      {books.map((book) => (
        <BookCard key={book.id} id={book.id} {...book} />
      ))}
    </div>
  );
}

export default HomePage;
