"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DndFileUpload } from "./dnd-file-upload";
import { ComparisonResult } from "./comparison-result";
import { generateCryptoHash, readFileAsArrayBuffer } from "@/lib/hash-utils";
import { ArrowRight, File, Loader2 } from "lucide-react";

export function HashComparer() {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [result, setResult] = useState<
    "idle" | "loading" | "match" | "mismatch" | "error"
  >("idle");
  const [hashes, setHashes] = useState<{ file1: string; file2: string } | undefined>();
  const [error, setError] = useState<string | undefined>();

  const handleCompare = async () => {
    if (!file1 || !file2) return;

    setResult("loading");
    setError(undefined);
    setHashes(undefined);

    try {
      const [buffer1, buffer2] = await Promise.all([
        readFileAsArrayBuffer(file1),
        readFileAsArrayBuffer(file2),
      ]);
      
      const [hash1, hash2] = await Promise.all([
        generateCryptoHash(buffer1, 'SHA-256'),
        generateCryptoHash(buffer2, 'SHA-256'),
      ]);

      setHashes({ file1: hash1, file2: hash2 });
      setResult(hash1 === hash2 ? "match" : "mismatch");

    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : "Bilinmeyen bir hata oluştu.");
      setResult("error");
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Dosya Bütünlüğünü Karşılaştır</CardTitle>
          <CardDescription>
            SHA-256 hash'lerini karşılaştırmak için iki dosya yükleyin. Bu, dosyaların içeriklerini doğrudan karşılaştırmadan aynı olup olmadığını doğrulamak için kullanışlıdır.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-2">
                <div className="flex items-center gap-2 font-medium">
                    <File className="w-5 h-5 text-muted-foreground" />
                    <span>Dosya 1</span>
                </div>
                <DndFileUpload id="file1-comparer" onFileChange={setFile1} />
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2 font-medium">
                    <File className="w-5 h-5 text-muted-foreground" />
                    <span>Dosya 2</span>
                </div>
                <DndFileUpload id="file2-comparer" onFileChange={setFile2} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleCompare}
            disabled={!file1 || !file2 || result === 'loading'}
            size="lg"
            className="w-full md:w-auto"
          >
            {result === 'loading' ? <Loader2 className="animate-spin" /> : <ArrowRight/>}
            {result === 'loading' ? "Karşılaştırılıyor..." : "Hash'leri Karşılaştır"}
          </Button>
        </CardFooter>
      </Card>
      
      <ComparisonResult status={result} hashes={hashes} error={error} />
    </div>
  );
}
