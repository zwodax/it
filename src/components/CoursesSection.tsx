import { Button } from "@/components/ui/button";
import { CheckCircle2, Layers, Code, ArrowRight, Clock } from "lucide-react";

const CoursesSection = () => {
  return (
    <section id="courses" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Наши курсы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите направление и углубите свои знания в разработке
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Coding Interview Course */}
          <div className="p-10 rounded-3xl bg-muted border border-border hover:border-primary/50 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 rounded-2xl bg-foreground/10">
                <Code className="w-10 h-10 text-foreground" />
              </div>
              <span className="px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm font-semibold">
                В разработке
              </span>
            </div>

            <h3 className="text-4xl font-bold mb-4">Coding Interview</h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Алгоритмы, структуры данных и решение задач. Присоединяйтесь к списку ожидания и получите специальное предложение.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-base">Основные алгоритмы и структуры данных</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-base">Динамическое программирование</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-base">Графы и деревья</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-base">Сложность алгоритмов</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-base">Практика на реальных задачах</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full rounded-full border-2" size="lg">
              Присоединиться к waitlist
              <Clock className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* System Design Course */}
          <div className="p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 rounded-2xl bg-primary/10">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Доступен
              </span>
            </div>

            <h3 className="text-4xl font-bold mb-4">System Design</h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Проектирование высоконагруженных multi-tenant SaaS систем. Подготовка к интервью в крупнейшие IT-компании.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Cloud-native архитектура и микросервисы</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Масштабирование и управление нагрузкой</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Распределенные системы и консистентность данных</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Безопасность и multi-tenancy</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base">Real-world кейсы из практики</span>
              </li>
            </ul>
            
            <Button className="w-full rounded-full" size="lg">
              Записаться на курс
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
