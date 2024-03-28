import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import { getStoredReadBooks } from '../../utility/localstorage';
import { useLoaderData } from 'react-router-dom';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const [bookData, setBookData] = useState([]);
  const books = useLoaderData();

  useEffect(() => {
    const storedReadBooks = getStoredReadBooks();
    const formattedData = storedReadBooks.map((id, index) => ({
      name: getBookNameById(id),
      pages: getNumberOfPagesForBook(id),
    }));
    setBookData(formattedData);
  }, []);

  const getBookNameById = (id) => {
    const book = books.find(book => book.id === id);
    return book ? book.bookName : `Book ${id}`;
  };

  const getNumberOfPagesForBook = (id) => {
    const book = books.find(book => book.id === id);
    return book ? book.totalPages : Math.floor(Math.random() * 500) + 1; // If totalPages is available, use it, otherwise generate a random number
  };

  return (
    <div className='flex justify-center items-center'>
      
      <BarChart
        width={800}
        height={400}
        data={bookData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        aspect={2}
        minHeight={200}
        maxHeight={400}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {bookData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
