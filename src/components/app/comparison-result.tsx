"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Loader2, XCircle, AlertTriangle, FileQuestion } from "lucide-react";

type ComparisonResultProps = {
  status: "idle" | "loading" | "match" | "mismatch" | "error";
  hashes?: { file1: string; file2: string };
  error?: string;
};

const resultConfig = {
  match: {
    icon: CheckCircle2,
    title: "Dosyalar Eşleşiyor",
    description: "İki dosyanın da hash değerleri aynı.",
    className: "text-green-500",
  },
  mismatch: {
    icon: XCircle,
    title: "Dosyalar Eşleşmiyor",
    description: "Dosyaların hash değerleri farklı.",
    className: "text-destructive",
  },
  error: {
    icon: AlertTriangle,
    title: "Karşılaştırma Hatası",
    description: "Karşılaştırma tamamlanamadı.",
    className: "text-amber-500",
  },
  loading: {
    icon: Loader2,
    title: "Karşılaştırılıyor...",
    description: "Lütfen dosyalar karşılaştırılırken bekleyin.",
    className: "text-muted-foreground animate-spin",
  },
  idle: {
    icon: FileQuestion,
    title: "Karşılaştırma Bekleniyor",
    description: "Sonucu görmek için iki dosya yükleyin ve 'Karşılaştır'a tıklayın.",
    className: "text-muted-foreground",
  },
};

export function ComparisonResult({ status, hashes, error }: ComparisonResultProps) {
  const { icon: Icon, title, description, className } = resultConfig[status];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Karşılaştırma Sonucu</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center p-8 space-y-4">
        <Icon className={`w-16 h-16 ${className}`} />
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{error || description}</p>
        {hashes && (status === "match" || status === "mismatch") && (
          <div className="w-full text-left bg-muted p-4 rounded-lg mt-4 space-y-2 font-code">
            <div>
              <p className="text-sm font-semibold text-foreground">1. Dosya Hash (SHA-256):</p>
              <p className="text-sm break-all text-muted-foreground">{hashes.file1}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-foreground">2. Dosya Hash (SHA-256):</p>
              <p className="text-sm break-all text-muted-foreground">{hashes.file2}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
