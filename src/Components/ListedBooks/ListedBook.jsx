import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div className="w-full bg-[#1313130D] rounded-2xl text-center h-24 text-3xl font-bold flex justify-center items-center my-10">Books</div>


            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link onClick={()=> setTabIndex(0)} 
    to=""
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${tabIndex === 0?'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Read Books</span>
	</Link>
    <Link onClick={()=> setTabIndex(1)} 
     to={`wishlist`}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${tabIndex === 1?'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Wishlist Books</span>
	</Link>
	
</div>
          <Outlet></Outlet>  
  
        </div>
       
    );
};

export default ListedBook;