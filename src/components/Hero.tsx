import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/80 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-primary-foreground">
              Подготовка к техническим собеседованиям
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">Подготовка к техническим собеседованиям</h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">Системный дизайн и алгоритмы. Разбор ключевых тем для успешного прохождения интервью.</p>

          <Button size="lg" className="rounded-full bg-background text-primary hover:bg-background/90 text-lg px-8 py-6 h-auto">
            Начать обучение
          </Button>

          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                100+
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                Задач и кейсов
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                95%
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                Успешных собеседований
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                24/7
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                Доступ к материалам
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;