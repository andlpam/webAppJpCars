import { Wrench } from "lucide-react";

const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="container mx-auto py-6 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center">
        <Wrench className="h-10 w-10 text-secondary" />
        <ul className="flex space-x-4">
          {[
            "hero",
            "about",
            "specialty",
            "services",
            "schedule",
            "team",
            "journal",
            "contact",
          ].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollTo(section)}
                className="text-foreground hover:text-secondary capitalize"
              >
                {section === "hero" ? "Home" : section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
