import { 
  BookOpen, 
  Layers, 
  Network, 
  Database, 
  Shield, 
  Activity,
  Server
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProgramSection = () => {
  const systemDesignModules = [
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      title: "1. Основы архитектуры и системного проектирования",
      topics: [
        "Что такое архитектура и системное проектирование?",
        "Архитектурные представления",
        "Декомпозиция и границы",
        "Компромиссы в архитектуре ПО",
        "Управление эволюцией и изменениями",
        "Сбор требований",
        "Качественные атрибуты и ограничения",
        "Шаблоны коммуникации"
      ]
    },
    {
      icon: <Layers className="w-5 h-5 text-primary" />,
      title: "2. Современные архитектурные стили и шаблоны",
      topics: [
        "Предметно-ориентированное проектирование (DDD)",
        "Тактическое и стратегическое DDD",
        "Модульные монолиты",
        "Микросервисы",
        "Событийно-ориентированная архитектура, CQRS и саги",
        "Реактивное программирование",
        "Serverless",
        "Multi-tenancy"
      ]
    },
    {
      icon: <Network className="w-5 h-5 text-primary" />,
      title: "3. Сети и коммуникации",
      topics: [
        "Протоколы и модель OSI",
        "Ключевые компоненты сети",
        "Service Meshes",
        "Сеть в AWS"
      ]
    },
    {
      icon: <Server className="w-5 h-5 text-primary" />,
      title: "4. Основы распределенных систем",
      topics: [
        "Обзор распределенных систем",
        "Шардинг и репликация",
        "Теорема CAP и практические последствия",
        "Распределенный консенсус",
        "Kubernetes и оркестрация контейнеров",
        "Иерархия ресурсов AWS"
      ]
    },
    {
      icon: <Database className="w-5 h-5 text-primary" />,
      title: "5. Хранение и обработка данных",
      topics: [
        "Масштабируемость и моделирование данных",
        "ACID vs BASE: компромиссы",
        "Уровни изоляции транзакций",
        "Распределенный поиск",
        "Системы очередей сообщений",
        "Семантика «точно один раз»",
        "Обработка больших данных",
        "Kafka deep dive"
      ]
    },
    {
      icon: <Activity className="w-5 h-5 text-primary" />,
      title: "6. Отказоустойчивость и observability",
      topics: [
        "Избыточность",
        "Ограничение скорости (Rate Limiting)",
        "Circuit Breakers",
        "Bulkheads",
        "Шаблон Outbox",
        "Оптимизация затрат",
        "Observability и SRE"
      ]
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "7. Безопасность и защита данных",
      topics: [
        "Аутентификация и авторизация",
        "Защита облачных приложений",
        "Защита данных в покое и при передаче",
        "Комплаенс, аудиты и стандарты соответствия"
      ]
    }
  ];

  return (
    <section id="about" className="py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Программа курса
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            System Design для облачных SaaS-систем
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {systemDesignModules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {module.icon}
                    </div>
                    <span className="text-lg font-semibold text-left">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="ml-14 space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
            <p className="text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">Coding Interview</span> — программа в разработке
            </p>
            <p className="text-sm text-muted-foreground">
              Присоединяйтесь к waitlist, чтобы узнать о запуске первыми
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;