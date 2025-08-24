import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "Kriptografik Hash Nedir?",
    answer:
      "Bir kriptografik hash, herhangi bir boyuttaki veriden (bir metin, dosya veya herhangi bir dijital içerik) sabit boyutlu, benzersiz bir karakter dizisi oluşturan matematiksel bir algoritmadır. Bu, verinin 'dijital parmak izi' gibidir. Verideki en küçük bir değişiklik bile tamamen farklı bir hash değeri üretir.",
  },
  {
    id: "faq-2",
    question: "Hash'ler Neden Önemlidir?",
    answer:
      "Hash'ler dijital dünyada güvenliğin temel taşlarından biridir. Başlıca kullanım alanları şunlardır: Veri Bütünlüğü (bir dosyanın indirme sırasında veya sonrasında değişip değişmediğini kontrol etme), Şifre Güvenliği (web siteleri şifrenizi doğrudan saklamak yerine hash'lenmiş halini saklar) ve Dijital İmzalar (bir verinin kaynağını ve bütünlüğünü doğrulamak için).",
  },
  {
    id: "faq-3",
    question: "Farklı Algoritmalar (SHA-256, bcrypt) Arasındaki Fark Nedir?",
    answer:
      "Farklı algoritmalar, farklı güvenlik seviyeleri ve kullanım amaçları sunar. Örneğin, SHA-256 gibi algoritmalar çok hızlıdır ve dosya bütünlüğü kontrolü için idealdir. Bcrypt gibi algoritmalar ise kasıtlı olarak yavaştır ve şifreleri saklamak için tasarlanmıştır. Bu yavaşlık, kaba kuvvet (brute-force) saldırılarını zorlaştırarak güvenliği artırır.",
  },
    {
    id: "faq-7",
    question: "Neden bcrypt sadece metin/şifre hash'lemek için kullanılıyor?",
    answer:
      "Bcrypt, özellikle şifreleri güvenli bir şekilde saklamak için tasarlanmıştır. Kasıtlı olarak yavaş çalışır; bu, bir saldırganın saniyede milyarlarca şifre denemesini (kaba kuvvet saldırısı) engeller. Ancak bu yavaşlık, büyük dosyaların hash'ini hesaplamak için onu tamamen verimsiz kılar. Bu nedenle, dosya bütünlüğü kontrolü gibi hız gerektiren işlemler için SHA algoritmaları kullanılırken, şifre güvenliği için bcrypt tercih edilir.",
  },
  {
    id: "faq-5",
    question: "Tuzlama (Salting) nedir ve bcrypt bunu nasıl kullanır?",
    answer:
      "Tuzlama, bir şifreyi hash'lemeden önce ona rastgele, benzersiz bir veri parçası ekleme işlemidir. Bu 'tuz', her kullanıcı için farklıdır. Bu, aynı şifreye sahip iki kullanıcının bile veritabanında tamamen farklı hash değerlerine sahip olmasını sağlar. Bu yöntem, önceden hesaplanmış hash tabloları olan 'gökkuşağı tabloları' (rainbow tables) kullanılarak yapılan saldırıları etkisiz hale getirir. Bcrypt, tuzlamayı otomatik olarak hash'leme sürecine dahil ederek şifre güvenliğini önemli ölçüde artırır.",
  },
  {
    id: "faq-6",
    question: "Neden MD5 algoritması listede yok?",
    answer:
      "MD5, bir zamanlar popüler bir hash algoritması olmasına rağmen, günümüzde ciddi güvenlik açıkları barındırdığı bilinmektedir. Özellikle 'çakışma saldırılarına' (collision attacks) karşı savunmasızdır, yani farklı iki verinin aynı MD5 hash'ini üretmesi mümkündür. Bu nedenle, modern güvenlik uygulamaları için artık güvenli kabul edilmemektedir ve bu araçta bilinçli olarak yer verilmemiştir.",
  },
  {
    id: "faq-4",
    question: "Bu Araç Güvenli mi?",
    answer:
      "Evet. Bu araç, tüm hash hesaplamalarını doğrudan sizin tarayıcınızda gerçekleştirir. Metinleriniz veya dosyalarınız hiçbir zaman sunucularımıza yüklenmez veya saklanmaz. Tüm işlemler yerel olarak yapıldığı için verilerinizin gizliliği tamamen korunur.",
  }
];

export function Faq() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-primary" />
            <CardTitle>Sıkça Sorulan Sorular</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
