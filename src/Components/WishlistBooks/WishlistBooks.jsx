import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBooks } from "../../utility/secondLocalStorage";
import SingleBook from "../SingleBook/SingleBook";

const WishlistBooks = () => {
    const books = useLoaderData();
    const [addedBooks, setAddedBooks] =useState([]);
    useEffect( ()=>{
        const storedBookIds =getStoredWishBooks();
        if(books.length>0){
            const addedBooks = books.filter(book => storedBookIds.includes(book.id))
            setAddedBooks(addedBooks);
        }
    },[])
    return (
        <div>
            <div className="flex flex-col gap-6">
                {
                    addedBooks.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
                }
            </div>
           
        </div>
    );
};

export default WishlistBooks;