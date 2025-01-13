import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ThumbsDownIcon, ThumbsUpIcon, BadgeMinus } from "lucide-react";

function SingleBook({ author, title, likes }) {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-2xl">{author}</CardTitle>
        <CardDescription className="text-sm">Priority: {likes}</CardDescription>
      </CardHeader>
      <CardContent className="text-xl">
        <p>{title}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">
          <ThumbsUpIcon />
        </Button>
        <Button variant="outline">
          <ThumbsDownIcon />
        </Button>
        <Button variant="destructive">
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SingleBook;
