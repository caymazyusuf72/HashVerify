import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, DownloadCloud, FileCheck, ShieldAlert, Fingerprint } from "lucide-react";

const useCasesData = [
  {
    icon: DownloadCloud,
    title: "Yazılım İndirmelerini Doğrulama",
    description:
      "Bir yazılım indirdiğinizde, geliştiricinin sağladığı hash değeri ile indirdiğiniz dosyanın hash değerini karşılaştırarak dosyanın orijinal ve değiştirilmemiş olduğundan emin olabilirsiniz.",
  },
  {
    icon: FileCheck,
    title: "Dosya Bütünlüğünü Kontrol Etme",
    description:
      "Önemli belgelerinizin veya yedeklerinizin zamanla bozulup bozulmadığını veya istemeden değiştirilip değiştirilmediğini anlamak için hash değerlerini periyodik olarak karşılaştırabilirsiniz.",
  },
  {
    icon: ShieldAlert,
    title: "Veri Değişikliklerini Tespit Etme",
    description:
      "Bir veritabanı dökümünün veya büyük bir veri setinin iki farklı zaman damgasındaki hash'lerini karşılaştırarak, verilerde herhangi bir değişiklik olup olmadığını anında tespit edebilirsiniz.",
  },
  {
    icon: Fingerprint,
    title: "Adli Bilişim ve Kanıt Doğrulama",
    description:
      "Adli bilişim uzmanları, dijital kanıtların (disk imajları, dosyalar vb.) toplandığı andan itibaren değiştirilmediğini kanıtlamak için hash değerlerini kullanır. Bu, kanıtın mahkemede geçerli olmasını sağlar.",
  }
];

export function UseCases() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-primary" />
          <CardTitle>Yaygın Kullanım Alanları</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCasesData.map((useCase, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg h-full">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
                <useCase.icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
            <p className="text-sm text-muted-foreground">
              {useCase.description}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
