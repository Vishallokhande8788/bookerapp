import SingleBook from "./SingleBook";

function ListBooks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />
      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />
      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />
      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />
      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />
      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />

      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />
      <SingleBook
        author="F. Scott Fitzgerald"
        title="The Great Gatsby"
        likes={10}
      />
    </div>
  );
}

export default ListBooks;
