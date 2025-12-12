import { Button } from "@/components/ui/button";
import EnrollDialog from "./EnrollDialog";

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/80 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-primary-foreground">
              Подготовка к техническим собеседованиям
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight px-2">
            Подготовка к техническим собеседованиям
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Системный дизайн и алгоритмы. Разбор ключевых тем для успешного прохождения интервью.
          </p>

          <EnrollDialog courseName="System Design">
            <Button size="lg" className="rounded-full bg-background text-primary hover:bg-background/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto">
              Начать обучение
            </Button>
          </EnrollDialog>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-1 sm:mb-2">
                100+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80">
                Задач и кейсов
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-1 sm:mb-2">
                95%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80">
                Успешных собеседований
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80">
                Доступ к материалам
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;