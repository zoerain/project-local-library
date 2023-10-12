function getTotalBooksCount(books) {
  let result = 0;
  for (let i = 0; i < books.length; i++){
    result += 1;
  }
  return result;
}

function getTotalAccountsCount(accounts) {
return accounts.reduce((total, account) => {
  return total + 1;
}, 0);
}

function getBooksBorrowedCount(books) {
let result = 0;
books.forEach((book) => {
  if (book.borrows.some((borrow) => !borrow.returned)) {
    result += 1;
  }
});
return result;
}

function getMostCommonGenres(books) {
const countedGenres = {};
books.forEach((book) => {
  const { genre } = book;
  countedGenres[genre] = (countedGenres[genre] || 0) + 1;
});
const genreArray = Object.keys(countedGenres).map((genre) => ({
  name: genre, 
  count: countedGenres[genre],
}));
genreArray.sort((a, b) => b.count - a.count);
return genreArray.slice(0,5);
}


function getMostPopularBooks(books) {
const counted = books.map((book) => ({ name: book.title, count: book.borrows.length }));
const result = sortAnArray(counted);
return result.slice(0,5);
}

function sortAnArray(array) {
  return array.sort((a, b) => (b.count - a.count));
}

function getMostPopularAuthors(books, authors) {
  const result = [];
  for (let author of authors) {
    let count = 0;
    const name = `${author.name.first} ${author.name.last}`;

    for (let book of books) {
      if (book.authorId === author.id) {
        count += book.borrows.length;
      }
    }
    const objectAuthor = { name: name, count: count};
    result.push(objectAuthor);
  }
  const sortedResult = result.sort((a, b) => (b.count - a.count));
  return sortedResult.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
