import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnrollDialog from "./EnrollDialog";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Стоимость курса
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Инвестируйте в свою карьеру — получите навыки, которые ценят топовые компании
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-card rounded-2xl border-2 border-primary shadow-xl overflow-hidden">
            {/* Sale badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4" />
                Акция
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">System Design</h3>
              <p className="text-muted-foreground mb-6">
                Полный курс подготовки к собеседованиям
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">15 000 ₽</span>
                  <span className="text-xl text-muted-foreground line-through">25 000 ₽</span>
                </div>
                <p className="text-sm text-primary font-medium mt-1">
                  Экономия 10 000 ₽
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Полный доступ ко всем материалам курса</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Видеоуроки с разбором реальных кейсов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Практические задания с проверкой</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Бессрочный доступ к материалам</span>
                </li>
              </ul>

              <EnrollDialog courseName="System Design">
                <Button size="lg" className="w-full rounded-full text-lg">
                  Записаться на курс
                </Button>
              </EnrollDialog>
            </div>

            {/* Test drive section */}
            <div className="bg-muted/50 p-6 border-t">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Попробуйте бесплатно</h4>
                  <p className="text-sm text-muted-foreground">
                    Часть курса доступна бесплатно сразу после регистрации. 
                    Оцените качество материалов, а затем примите решение об оплате.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
