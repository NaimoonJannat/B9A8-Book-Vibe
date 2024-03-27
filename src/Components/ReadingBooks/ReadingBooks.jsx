import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import SingleBook from "../SingleBook/SingleBook";

const ReadingBooks = () => {
    const books= useLoaderData();

    const [addedBooks, setAddedBooks] =useState([]);
    useEffect( ()=>{
        const storedBookIds =getStoredReadBooks();
        if(books.length>0){
            const addedBooks = books.filter(book => storedBookIds.includes(book.id))
            setAddedBooks(addedBooks);
            console.log(addedBooks);
        }
    },[])
    return (
        <div>
            <p>Reading hard: {addedBooks.length}</p>
            <div className="flex flex-col gap-6">
                {
                    addedBooks.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
                }
            </div>

        </div>
    );
};

export default ReadingBooks;