import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero lg:my-10 lg:py-20 max-h-screen bg-[#1313130D] rounded-3xl">
            <div className="hero-content lg:w-4/5 mx-auto gap-20 flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co/gZgHXxj/twilight.jpg"
                    className="max-w-sm rounded-lg shadow-3xl"
                />
                <div>
                    <h1 className="text-6xl font-semibold">
                        Books to freshen up your bookshelf
                    </h1>

                    <Link
                        to="/listedBooks"
                        className="btn lg:my-12 bg-[#23BE0A] text-lg text-white font-semibold"
                    >
                        View The List
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
