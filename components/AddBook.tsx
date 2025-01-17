"use client";

import { Dispatch, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface AddBookProps {
  dispatch: Dispatch<Action>;
}

function AddBook({ dispatch }: AddBookProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: "add", payload: { title, author } });

    // Empty the input fields
    setTitle("");
    setAuthor("");
  };

  return (
    <form className="flex gap-1 flex-col" onSubmit={handleSubmit}>
      <Input
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <Input
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        required
      />
      <div className="flex gap-1">
        <Button
          variant="outline"
          type="button"
          onClick={() => dispatch({ type: "sort" })}
        >
          Sort
        </Button>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}

export default AddBook;
