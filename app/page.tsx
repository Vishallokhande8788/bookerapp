"use client";

import { HeroHighlight } from "@/components/hero-highlight";
import AddBook from "@/components/AddBook";
import ListBooks from "@/components/ListBooks";
import { useReducer } from "react";
import { booksReducer } from "@/lib/reducer";
import { demoBooks } from "@/lib/demo-books";

function Page() {
  const [books, dispatch] = useReducer(booksReducer, demoBooks);

  return (
    <main>
      <HeroHighlight className="max-h-screen">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">Booker App</h1>
      </HeroHighlight>

      <section className="max-w-96 mx-auto my-10 px-4">
        <AddBook dispatch={dispatch} />
      </section>

      <section className="mx-auto px-4 ">
        <ListBooks books={books} dispatch={dispatch} />
      </section>
    </main>
  );
}

export default Page;
