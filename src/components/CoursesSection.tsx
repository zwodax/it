import { Button } from "@/components/ui/button";
import { CheckCircle2, Layers, Code, ArrowRight, Clock, Sparkles } from "lucide-react";
import EnrollDialog from "./EnrollDialog";
const CoursesSection = () => {
  return <section id="courses" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Наши курсы
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Выберите направление и углубите свои знания в разработке
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Coding Interview Course */}
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-muted border border-border hover:border-primary/50 transition-all">
            <div className="flex items-start justify-between mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-foreground/10">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
              </div>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-foreground/10 text-foreground text-xs sm:text-sm font-semibold">
                В разработке
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Coding Interview</h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Алгоритмы, структуры данных и решение задач. Присоединяйтесь к списку ожидания и получите специальное предложение.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Основные алгоритмы и структуры данных</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Динамическое программирование</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Графы и деревья</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Сложность алгоритмов</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Практика на реальных задачах</span>
              </li>
            </ul>
            
            <EnrollDialog courseName="Coding Interview" isWaitlist>
              <Button variant="outline" className="w-full rounded-full border-2" size="lg">
                Присоединиться к waitlist
                <Clock className="ml-2 w-5 h-5" />
              </Button>
            </EnrollDialog>
          </div>

          {/* System Design Course with Pricing */}
          <div id="pricing" className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-card border-2 border-primary shadow-xl transition-all">
            <div className="flex items-start justify-between mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/10">
                <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <span className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Акция
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">System Design</h3>
            <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
              Проектирование высоконагруженных multi-tenant SaaS систем. Подготовка к интервью в крупнейшие IT-компании.
            </p>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-primary">15 000 ₽</span>
                <span className="text-lg sm:text-xl text-muted-foreground line-through">25 000 ₽</span>
              </div>
              <p className="text-sm text-primary font-medium mt-1">
                Экономия 10 000 ₽
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground/80 mb-6 text-sm sm:text-base">
              <span>
                <Clock className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                6–8 недель · в своём темпе
              </span>
              <span className="text-muted-foreground/60">
                ✦ AI-enhanced контент
              </span>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Cloud-native архитектура и микросервисы</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Масштабирование и управление нагрузкой</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Распределенные системы и консистентность данных</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Безопасность и multi-tenancy</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Real-world кейсы из практики</span>
              </li>
            </ul>

            {/* Test drive CTA */}
            <div className="bg-primary/10 p-5 rounded-xl mb-6 border-2 border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <p className="font-bold text-lg text-primary">Попробуйте бесплатно!</p>
              </div>
              <p className="text-sm text-foreground/80 mb-3">
                Часть курса доступна бесплатно после регистрации. Оцените качество, затем оплатите.
              </p>
              <EnrollDialog courseName="System Design (бесплатный доступ)">
                
              </EnrollDialog>
            </div>
            
            <EnrollDialog courseName="System Design">
              <Button className="w-full rounded-full" size="lg">Начать бесплатно  <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </EnrollDialog>
          </div>
        </div>
      </div>
    </section>;
};
export default CoursesSection;