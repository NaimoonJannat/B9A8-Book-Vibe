import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBooks, saveReadBooks } from "../../utility/localstorage";
import { saveWishBooks } from "../../utility/secondLocalStorage";

const JobDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const book = books.find((book) => book.id == intId);

    const handleReadBtn = () =>{
        const storedReadBooks = getStoredReadBooks();
        const existsInReadBooks = storedReadBooks.includes(intId);
        if (existsInReadBooks) {
            toast('Already added to the reading list!');
        } else {
            saveReadBooks(intId);
            toast('Added to the wishlist successfully!');
        }
    }
    const handleWishlistBtn = () =>{
        const storedReadBooks = getStoredReadBooks();
        const existsInReadBooks = storedReadBooks.includes(intId);

        if (existsInReadBooks) {
            toast('Already added to the reading list!');
        } else {
            saveWishBooks(intId);
            toast('Added to the wishlist successfully!');
        }
    }

    return (
        <div className="card lg:card-side lg:p-8">
            <div className="lg:w-1/2 bg-[#1313130D] rounded-2xl  flex justify-center items-center">
                <img className="h-4/5 w-72" src={book.image} />
            </div>
            <div className="card-body lg:w-1/2">
                <h2 className="text-4xl font-bold">{book.bookName}</h2>
                <p className="text-[#131313CC] text-base">By : {book.author}</p>
                <div className="divider"></div>
                <p>{book.category}</p>
                <div className="divider"></div>
                <div>
                    <p className=" text-base">
                        <span className="text-black font-semibold">Review:</span>{" "}
                        {book.review}
                    </p>

                    {book.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-[#23BE0A0D] btn text-[#23BE0A] lg:p-3 font-semibold rounded-3xl text-xs"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="divider"></div>
                <div className="flex gap-4">
                    <div>
                        <p className="text-[#131313B2] text-base">Number of pages: </p>
                        <p className="text-[#131313B2] text-base">Publisher: </p>
                        <p className="text-[#131313B2] text-base">Year of Publishing: </p>
                        <p className="text-[#131313B2] text-base">Rating: </p>
                    </div>
                    <div>
                        <p className="text-black font-bold">{book.totalPages}</p>
                        <p className="text-black font-bold">{book.publisher}</p>
                        <p className="text-black font-bold">{book.yearOfPublishing}</p>
                        <p className="text-black font-bold">{book.rating}</p>
                    </div>
                </div>
                <div className="card-actions justify-start flex gap-4">
                    <button onClick={handleReadBtn} className="btn text-black font-semibold">Read</button>
                    <button onClick={handleWishlistBtn} className="btn bg-[#50B1C9] text-white font-semibold">
                        Wishlist
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;
