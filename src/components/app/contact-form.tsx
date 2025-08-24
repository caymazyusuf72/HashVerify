"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
    const { toast } = useToast()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Burada form gönderme mantığı yer alabilir (örn. API çağrısı).
        // Şimdilik sadece bir bildirim gösteriyoruz.
        toast({
            title: "Mesajınız Gönderildi!",
            description: "En kısa sürede size geri dönüş yapacağız.",
        });
        (event.target as HTMLFormElement).reset();
    };

    return (
        <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Mail className="w-8 h-8 text-primary" />
                    <CardTitle>Bize Ulaşın</CardTitle>
                </div>
                <CardDescription>
                    Soru, öneri veya geri bildirimleriniz için aşağıdaki formu doldurabilirsiniz.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Adınız</Label>
                            <Input id="name" placeholder="Adınızı girin" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">E-posta Adresiniz</Label>
                            <Input id="email" type="email" placeholder="E-posta adresinizi girin" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Konu</Label>
                        <Input id="subject" placeholder="Mesajınızın konusunu girin" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Mesajınız</Label>
                        <Textarea id="message" placeholder="Mesajınızı buraya yazın" rows={6} required />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">Mesajı Gönder</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
