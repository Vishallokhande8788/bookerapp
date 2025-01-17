import { Dispatch } from "react";
import SingleBook from "./SingleBook";

interface ListBooksProps {
  books: Book[];
  dispatch: Dispatch<Action>;
}

function ListBooks({ books, dispatch }: ListBooksProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {books.map((book: Book) => (
        <SingleBook key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default ListBooks;
