import { Mail, Youtube } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SysDesign.online</h3>
            <p className="text-sm text-secondary-foreground/80">
              Подготовка к System Design интервью и саморазвитие в области архитектуры
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Курсы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">
                  Coding Interview
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">
                  System Design
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Программа курсов
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Материалы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#videos" className="hover:text-primary transition-colors">
                  Видео
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  О курсе
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Связаться</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://t.me/ship_happens_404" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                @ship_happens_404
              </a>
              <a href="mailto:info@sysdesign.online" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@sysdesign.online
              </a>
              <a href="https://youtube.com/@shiphappens-404" className="hover:text-primary transition-colors flex items-center gap-2 opacity-100">
                <Youtube className="w-5 h-5" />
                YouTube 
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/80">
          <p>&copy; 2025 SysDesign.online. Все права защищены.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;