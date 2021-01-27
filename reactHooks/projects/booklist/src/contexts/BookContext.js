import React , { createContext, useState } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
{title:'name of the wind', author: 'patrick routhfus', id: 1},
    {title:'the final impire', author: 'bardon senderson', id: 2}
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title,author,id:uuid()}]);
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }
  return ( 
    <BookContext.Provider value ={{books, addBook,removeBook}}>
    {props.children}
    </BookContext.Provider>
   );
}
 
export default BookContextProvider;