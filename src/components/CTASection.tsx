import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import EnrollDialog from "./EnrollDialog";
import ContactDialog from "./ContactDialog";

const CTASection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta-section" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              Готовы начать подготовку?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Присоединяйтесь к нашим курсам и начните путь к успешной карьере
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/50 transition-all">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">System Design</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
                Начните обучение прямо сейчас. Полный доступ ко всем материалам курса.
              </p>
              <Button size="lg" className="w-full rounded-full" onClick={scrollToPricing}>
                Узнать стоимость
              </Button>
            </div>

            <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-muted border border-border hover:border-primary/50 transition-all">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Coding Interview</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
                Присоединитесь к списку ожидания и получите специальное предложение.
              </p>
              <EnrollDialog courseName="Coding Interview" isWaitlist={true}>
                <Button size="lg" className="w-full rounded-full">
                  <Mail className="mr-2 w-5 h-5" />
                  Присоединиться к waitlist
                </Button>
              </EnrollDialog>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Остались вопросы? Напишите нам
            </p>
            <ContactDialog>
              <Button variant="outline" size="lg" className="rounded-full border-2">
                Связаться с нами
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
