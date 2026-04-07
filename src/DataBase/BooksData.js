const getAllReadBoosFromDb = () => {
  const allReadBooks = localStorage.getItem("readBooks");
  if (allReadBooks) {
    return JSON.parse(allReadBooks);
  }
  return [];
};
const addReadBookInLocalDb = (newBook) => {
  const allBooks = getAllReadBoosFromDb();
  const existBook = allBooks.find((book) => book.bookId === newBook.bookId);
  if (!existBook) {
    allBooks.push(newBook);
    localStorage.setItem("readBooks", JSON.stringify(allBooks));
  }
};

export { getAllReadBoosFromDb, addReadBookInLocalDb };
