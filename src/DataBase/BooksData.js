// this is for Mark as read books data
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

// this is for WishList data
const getAllWishListBookFromDb = () => {
  const allWishBooks = localStorage.getItem("wishListBooks");
  if (allWishBooks) {
    return JSON.parse(allWishBooks);
  }
  return [];
};

const AddWishBookInLocalStorage = (newWishBook) => {
  const allWishBooks = getAllWishListBookFromDb();
  const isExistWishBook = allWishBooks.find(
    (book) => book.bookId === newWishBook.book.bookId,
  );
  if (!isExistWishBook) {
    allWishBooks.push(newWishBook);
    localStorage.setItem("wishListBooks", JSON.stringify(allWishBooks));
  }
};

// this is for removing wishlist from local storage from data
const removeWishListFromDb = (arr) => {
  localStorage.setItem("wishListBooks", JSON.stringify(arr));
};

export {
  getAllReadBoosFromDb,
  addReadBookInLocalDb,
  getAllWishListBookFromDb,
  AddWishBookInLocalStorage,
  removeWishListFromDb,
};
