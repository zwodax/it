import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">SysDesign.online</div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#courses" className="text-sm text-foreground hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#videos" className="text-sm text-foreground hover:text-primary transition-colors">
              Видео
            </a>
            <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <Button size="lg" className="rounded-full">Записаться</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#courses" className="text-sm text-foreground hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#videos" className="text-sm text-foreground hover:text-primary transition-colors">
              Видео
            </a>
            <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <Button className="w-full rounded-full">Записаться</Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
