import React, { useEffect } from 'react'
import { useFirebase } from '../23_Context/Firebase'
import BookCard from '../23_Components/Card';

function HomePage() {
    const firebase=useFirebase();

    const [books, setBooks] = useState([])

    useEffect(()=>{
        firebase.listAllBooks().then((books)=>setBooks(books.docs))
    },[])
  return (
    <div className="container">
        {<BookCard {...books.data()}/>}
    </div>
  )
}

export default HomePage