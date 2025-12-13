import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="videos" className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Видео материалы</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Познакомьтесь с нашим подходом к обучению
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="greeting" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-6 sm:mb-8 h-auto">
              <TabsTrigger value="greeting" className="py-2.5 sm:py-2 text-sm sm:text-base">Приветствие</TabsTrigger>
              <TabsTrigger value="methodology" className="py-2.5 sm:py-2 text-xs sm:text-base">Методология прохождения интервью</TabsTrigger>
            </TabsList>
            
            <TabsContent value="greeting">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-secondary/20">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="https://sysdesign-course-videos.ams3.digitaloceanspaces.com/intro.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает воспроизведение видео.
                  </video>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">О курсе System Design</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Познакомьтесь с программой обучения, структурой курса и тем, как мы помогаем разобраться в ключевых темах системного проектирования.
                  </p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="methodology">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-secondary/20">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="https://sysdesign-course-videos.ams3.digitaloceanspaces.com/problems/approach.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает воспроизведение видео.
                  </video>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Подход к прохождению System Design интервью</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Разбираем структуру типичного интервью, ключевые этапы и на что обращают внимание интервьюеры. Практические советы по ведению диалога и презентации решений.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
