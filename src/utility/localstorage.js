const getStoredReadBooks = ()=>{
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const saveReadBooks = id =>{
    const storedReadBook = getStoredReadBooks();
    const exists = storedReadBook.find(bookId => bookId == id);
    if(!exists){
        storedReadBook.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBook))
    }
}

export {saveReadBooks , getStoredReadBooks}