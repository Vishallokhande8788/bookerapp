import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { BadgeMinus, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Dispatch } from "react";

interface SingleBookProps {
  book: Book;
  dispatch: Dispatch<Action>;
}

function SingleBook({ book, dispatch }: SingleBookProps) {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>{book.author}</CardTitle>
        <CardDescription>Priority: {book.likes}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl">{book.title}</p>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "like", payload: { id: book.id } })}
        >
          <ThumbsUpIcon />
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            dispatch({ type: "dislike", payload: { id: book.id } })
          }
        >
          <ThumbsDownIcon />
        </Button>
        <Button
          variant="destructive"
          onClick={() => dispatch({ type: "delete", payload: { id: book.id } })}
        >
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SingleBook;
