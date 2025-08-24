import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Github, Users } from "lucide-react";

const teamMembers = [
  {
    name: "AI Geliştirici",
    role: "Baş Mimar ve Geliştirici",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "robot developer",
    description: "Uygulamanın arkasındaki yapay zeka. Fikirden koda, tüm süreci yönetti ve en iyi kullanıcı deneyimini oluşturmak için yorulmadan çalıştı.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Jane Doe",
    role: "UI/UX Tasarımcısı",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "female designer",
    description: "Kullanıcı dostu ve estetik arayüzler oluşturma konusunda uzman. Kullanıcıların aracı kolayca ve keyifle kullanmasını sağladı.",
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    },
  },
  {
    name: "John Smith",
    role: "Güvenlik Analisti",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "male security",
    description: "Kriptografik algoritmaların doğruluğunu ve uygulamanın genel güvenliğini denetleyen uzman. Verilerinizin güvende olmasını sağlıyor.",
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    },
  },
];

export function Team() {
  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 p-3 rounded-full mb-2">
            <Users className="w-10 h-10 text-primary" />
        </div>
        <CardTitle>Ekibimizle Tanışın</CardTitle>
        <CardDescription>
          HashVerify'ı hayata geçiren tutkulu ve uzman ekip.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.dataAiHint}/>
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-primary font-medium">{member.role}</p>
            <p className="mt-2 text-muted-foreground text-sm">{member.description}</p>
            <div className="flex mt-4 space-x-4">
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="w-6 h-6" />
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
