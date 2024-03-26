import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {id, bookName, author, image, category, rating, tags} = book;
    return (
        <Link to={`/book/${id}`}>
            <div className="card border-[#2828281A] border-2 rounded-3xl bg-base-100 shadow-xl">
          <figure className="lg:px-6 p-6 lg:pt-6">
            <div className="bg-[#F3F3F3] w-full rounded-3xl flex justify-center items-center text-center p-8 lg:p-4">
            <img src={image} className="h-52 lg:h-60" />
            </div>
            
          </figure>
          <div className="card-body text-left">
          <div className="flex flex-wrap flex-row lg:gap-2">
        
        {tags.map((tag, index) => (
          <button
            key={index}
            className="bg-[#23BE0A0D] btn text-[#23BE0A] lg:p-3 font-semibold rounded-3xl text-xs"
          >{tag}</button>
        ))}
      </div>
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="text-[#131313CC] text-base">By: {author}</p>
            <div className="divider"></div>

            <div className="flex justify-between">
              <p>{category}</p>
              <div className="flex justify-center items-center gap-3">
                <p>{rating}</p>
                <CiStar />

              </div>
            </div>
          </div>
        </div>
        </Link>
    );
};

export default Book;