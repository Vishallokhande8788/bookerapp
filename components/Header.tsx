import { CrownIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b border-foreground/20">
      <span className="flex items-center gap-2">
        <CrownIcon /> Booker
      </span>
      <ModeToggle />
    </header>
  );
}

export default Header;
