import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="videos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Видео материалы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с нашим подходом к обучению
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="greeting" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="greeting">Приветствие</TabsTrigger>
              <TabsTrigger value="methodology">Методология прохождения интервью</TabsTrigger>
            </TabsList>
            
            <TabsContent value="greeting">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-secondary/20 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-primary-foreground ml-1" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Приветствие</h3>
                    <p className="text-muted-foreground">Познакомьтесь с курсом и автором</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">О курсе System Design</h3>
                  <p className="text-muted-foreground">
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Подход к прохождению System Design интервью</h3>
                  <p className="text-muted-foreground">
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
