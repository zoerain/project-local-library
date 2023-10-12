function findAccountById(accounts, id) {
const result = accounts.find((account) => account.id === id)
return result;
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((accountA, accountB) => (accountA.name.last < accountB.name.last ? -1 : 1));
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
let result = 0;
for (let i = 0; i < books.length; i++) 
for (let j = 0; j < books[i].borrows.length; j++) {
  if (books[i].borrows[j].id === account.id) {
    result += 1;
  }
}
return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const currentlyCheckedOut = books.filter((book) => book.borrows.some((borrow) =>borrow.id === account.id && borrow.returned === false));

  const bookAndAuthor = currentlyCheckedOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return {...book, author};
  });
  return bookAndAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
