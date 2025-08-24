import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Rss, User, Calendar, ArrowRight } from 'lucide-react';
import { MotionWrapper } from '@/components/app/motion-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Kriptografi, veri güvenliği ve en son teknoloji trendleri hakkındaki makalelerimizi okuyun.',
};

const blogPosts = [
  {
    title: 'Kriptografik Hash Dünyasına Hoş Geldiniz!',
    description: 'Bu ilk yazımızda, hash fonksiyonlarının ne olduğunu, neden bu kadar önemli olduklarını ve günlük dijital hayatımızı nasıl şekillendirdiklerini inceliyoruz.',
    author: 'AI Geliştirici',
    date: '24 Mayıs 2024',
    tags: ['Başlangıç', 'Kriptografi'],
    slug: '#',
  },
  {
    title: 'SHA-256 vs. bcrypt: Hangisini Ne Zaman Kullanmalı?',
    description: 'İki popüler algoritma olan SHA-256 ve bcrypt arasındaki temel farkları keşfedin. Biri dosya bütünlüğü için harikayken, diğeri neden şifre güvenliğinin kralıdır?',
    author: 'John Smith',
    date: '28 Mayıs 2024',
    tags: ['Güvenlik', 'Algoritmalar'],
    slug: '#',
  },
  {
    title: 'Veri Bütünlüğü Nedir ve Neden Önemsemelisiniz?',
    description: 'Veri bütünlüğünün ne anlama geldiğini ve HashVerify gibi araçları kullanarak verilerinizin aktarım veya depolama sırasında değiştirilmediğinden nasıl emin olabileceğinizi öğrenin.',
    author: 'Jane Doe',
    date: '02 Haziran 2024',
    tags: ['Veri Güvenliği', 'Pratik İpuçları'],
    slug: '#',
  },
];


export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-16">
      <MotionWrapper>
        <div className="space-y-4 mb-12 text-center">
            <div className="inline-block bg-primary/10 p-3 rounded-full">
                <Rss className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">HashVerify Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Kriptografi, veri güvenliği ve teknoloji dünyasındaki en son trendler hakkındaki derinlemesine makalelerimiz, rehberlerimiz ve görüşlerimiz.
            </p>
        </div>
      </MotionWrapper>
      <div className="grid gap-8 lg:grid-cols-1">
        {blogPosts.map((post, index) => (
            <MotionWrapper key={post.title} delay={0.2 * (index + 1)}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                        <CardTitle className="text-2xl">{post.title}</CardTitle>
                        <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow" />
                    <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                            <div className='flex items-center gap-2'>
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                        </div>
                        <Button asChild variant="secondary">
                            <Link href={post.slug}>
                                Okumaya Devam Et <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
