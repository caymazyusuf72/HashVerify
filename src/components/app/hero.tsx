export function Hero() {
  return (
    <div className="relative overflow-hidden bg-secondary/30">
        <div className="container relative py-20 md:py-28 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-accent-foreground/80">
                        Güvenli ve Hızlı
                    </span>
                    <br />
                    Kriptografik Hash Aracınız
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    HashVerify, metinler ve dosyalar için anında SHA-1, SHA-256, SHA-384, SHA-512 ve bcrypt hash'leri oluşturmanıza olanak tanır. Dosya bütünlüğünü saniyeler içinde doğrulayın ve verilerinizin güvenliğinden emin olun.
                </p>
            </div>
        </div>
    </div>
  );
}
