import { IoPeopleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { Link } from "react-router-dom";
const SingleBook = ({book}) => {
    const {image, id, bookName, author, tags, category,rating,totalPages,yearOfPublishing,publisher} = book;
    return (
        <div className="card border-[#2828281A] flex flex-row border-2 rounded-3xl bg-base-100 shadow-xl">
          <figure className="lg:px-6 p-6 lg:pt-6">
            <div className="bg-[#F3F3F3] w-full rounded-3xl flex justify-center items-center text-center p-8 lg:p-4">
            <img src={image} className="h-52 lg:h-60" />
            </div>
          </figure>

          <div className="card-body text-left">
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="text-[#131313CC] text-base">By: {author}</p>
            <div className="flex justify-between">
            <div className="flex flex-wrap flex-row lg:gap-2">
        
        {tags.map((tag, index) => (
          <button
            key={index}
            className="bg-[#23BE0A0D] text-[#23BE0A] font-semibold rounded-3xl text-xs"
          >#{tag}</button>
        ))}
      </div>
                <div className="flex gap-2 justify-center items-center">
                    <CiLocationOn />
                    <p>Year of Publishing: {yearOfPublishing}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex  gap-2 justify-center items-center">
                    <IoPeopleOutline />
                    <p>Publisher: {publisher}</p>
                </div>
                <div className="flex  gap-2 justify-center items-center">
                    <IoMdBook />
                    <p>Pages: {totalPages}</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex gap-4 font-semibold text-lg">
                <div className="p-2 rounded-3xl bg-[#328EFF26] text-[#328EFF]">Category: {category}</div>
                <div className="p-2 rounded-3xl text-[#FFAC33] bg-[#FFAC3326]">Rating: {rating}</div>
                <Link to={`/book/${id}`}><div className="p-2 btn rounded-3xl text-white bg-[#23BE0A]">View Details</div></Link>
            </div>
            
          </div>
        </div>
    );
};

export default SingleBook;