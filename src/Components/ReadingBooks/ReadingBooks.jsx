import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import SingleBook from "../SingleBook/SingleBook";

const ReadingBooks = () => {
    const books = useLoaderData();
    const [addedBooks, setAddedBooks] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("desc");
    const [sorted, setSorted] = useState(false); 

    useEffect(() => {
        const storedBookIds = getStoredReadBooks();
        if (books.length > 0) {
            const addedBooks = books.filter(book => storedBookIds.includes(book.id));
            setAddedBooks(addedBooks);
        }
    }, []);

    const handleSort = (property) => {
        if (!sorted) { 
            if (property === sortBy) {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            } else {
                setSortBy(property);
                setSortOrder("desc");
            }
            setSorted(true); 
        }
    };

    const compareValues = (a, b) => {
        if (sortOrder === "asc") {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    };

    return (
        <div>
            <div className="text-center my-4">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-lg text-white font-semibold">Sort By </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleSort("totalPages")}>Page Number</button></li>
                        <li><button onClick={() => handleSort("yearOfPublishing")}>Year of publishing</button></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {addedBooks
                    .slice()
                    .sort(compareValues)
                    .map(book => <SingleBook key={book.id} book={book}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default ReadingBooks;