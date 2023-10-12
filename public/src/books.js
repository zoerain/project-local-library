function findAuthorById(authors, id) {
const result = authors.find((author) => author.id === id);
return result;
}

function findBookById(books, id) {
const result = books.find((book) => book.id === id);
return result;
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  const borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  const result = [[...borrowedBooks], [...returnedBooks]];
return result;
}

function getBorrowersForBook(book, accounts) {
  const allBorrowers = book.borrows;
  const allBorrowersAndAccounts = allBorrowers.map((borrow) => {const account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  });
  return allBorrowersAndAccounts.slice(0,10);
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
