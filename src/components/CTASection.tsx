import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Готовы начать подготовку?
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к нашим курсам и начните путь к успешной карьере
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all">
              <h3 className="text-3xl font-semibold mb-4">System Design</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Начните обучение прямо сейчас. Полный доступ ко всем материалам курса.
              </p>
              <Button size="lg" className="w-full rounded-full">
                Записаться на курс
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="p-10 rounded-3xl bg-muted border border-border hover:border-primary/50 transition-all">
              <h3 className="text-3xl font-semibold mb-4">Coding Interview</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Присоединитесь к списку ожидания и получите специальное предложение.
              </p>
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-1 rounded-full"
                />
                <Button size="lg" className="rounded-full">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Остались вопросы? Напишите нам
            </p>
            <Button variant="outline" size="lg" className="rounded-full border-2">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
