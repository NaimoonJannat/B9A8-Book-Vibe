import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect( () =>{
        fetch('bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    } ,[])
    return (
        <div className="text-center lg:my-10">
            <h2 className="text-2xl lg:text-4xl mb-8 font-bold">Books</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key="book.id" book={book}></Book>)
                }

            </div>
            
        </div>
    );
};

export default Books;