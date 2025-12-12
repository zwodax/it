import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnrollDialogProps {
  children: React.ReactNode;
  courseName?: string;
  isWaitlist?: boolean;
}

const EnrollDialog = ({ children, courseName = "курс", isWaitlist = false }: EnrollDialogProps) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive",
      });
      return;
    }

    // Open mailto with the email
    const subject = encodeURIComponent(isWaitlist ? `Waitlist: ${courseName}` : `Заявка на ${courseName}`);
    const body = encodeURIComponent(isWaitlist 
      ? `Email для связи: ${email}\n\nПрошу добавить меня в waitlist на курс ${courseName}.`
      : `Email для связи: ${email}\n\nПрошу записать меня на ${courseName}.`
    );
    window.location.href = `mailto:info@sysdesign.online?subject=${subject}&body=${body}`;
    
    toast({
      title: "Спасибо за заявку!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setEmail("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            {isWaitlist ? `Записаться в waitlist на ${courseName}` : `Записаться на ${courseName}`}
          </DialogTitle>
          <DialogDescription className="text-base">
            {isWaitlist 
              ? "Оставьте ваш email и мы сообщим вам, когда курс станет доступен для записи."
              : "Оставьте ваш email и мы свяжемся с вами для создания аккаунта и предоставления доступа к курсу."
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg"
              required
            />
            <p className="text-xs text-muted-foreground">
              После получения заявки мы создадим для вас аккаунт вручную и отправим данные для входа на указанный email.
            </p>
          </div>
          <Button type="submit" className="w-full rounded-full" size="lg">
            <Mail className="mr-2 w-5 h-5" />
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollDialog;
