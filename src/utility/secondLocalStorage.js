const getStoredWishBooks = ()=>{
    const storedWishBooks = localStorage.getItem('wish-books');
    if(storedWishBooks){
        return JSON.parse(storedWishBooks);
    }
    return [];
}

const saveWishBooks = id =>{
    const storedWishBook = getStoredWishBooks();
    const exists = storedWishBook.find(bookId => bookId == id);
    if(!exists){
        storedWishBook.push(id);
        localStorage.setItem('wish-books', JSON.stringify(storedWishBook))
    }
}

export {saveWishBooks , getStoredWishBooks}