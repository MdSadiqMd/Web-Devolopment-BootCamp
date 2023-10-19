import React, { useEffect } from 'react'
import { useFirebase } from '../23_Context/Firebase'

function HomePage() {
    const firebase=useFirebase();

    const [books, setBooks] = useState([])

    useEffect(()=>{
        firebase.listAllBooks().then((books)=>setBooks(books.docs))
    },[])
  return (
    <div className="container">
        {(books.map(book => <li>{}</li>))}
    </div>
  )
}

export default HomePage