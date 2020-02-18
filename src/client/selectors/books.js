export default (books, { text }) => {
  return books.filter((book) => {
    return book.title.toLowerCase().includes(text.toLowerCase()) && text.length > 0;
  });
};
