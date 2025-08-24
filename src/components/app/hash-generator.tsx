"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DndFileUpload } from "./dnd-file-upload";
import { HashResults, type HashResult } from "./hash-results";
import { generateBcryptHash, generateCryptoHash, readFileAsArrayBuffer } from "@/lib/hash-utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2 } from "lucide-react";

type InputMode = "text" | "file";

export function HashGenerator() {
  const [inputMode, setInputMode] = useState<InputMode>("text");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [hashes, setHashes] = useState<HashResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setHashes([]);
    const results: HashResult[] = [];

    try {
      if (inputMode === "text" && text) {
        const textEncoder = new TextEncoder();
        const textBuffer = textEncoder.encode(text);
        const [sha1, sha256, sha384, sha512, bcrypt] = await Promise.all([
          generateCryptoHash(textBuffer, "SHA-1"),
          generateCryptoHash(textBuffer, "SHA-256"),
          generateCryptoHash(textBuffer, "SHA-384"),
          generateCryptoHash(textBuffer, "SHA-512"),
          generateBcryptHash(text),
        ]);
        results.push({ algorithm: "SHA-1", hash: sha1 });
        results.push({ algorithm: "SHA-256", hash: sha256 });
        results.push({ algorithm: "SHA-384", hash: sha384 });
        results.push({ algorithm: "SHA-512", hash: sha512 });
        results.push({ algorithm: "bcrypt", hash: bcrypt, note: "Sadece metin/şifre" });
      } else if (inputMode === "file" && file) {
        const fileBuffer = await readFileAsArrayBuffer(file);
        const [sha1, sha256, sha384, sha512] = await Promise.all([
          generateCryptoHash(fileBuffer, "SHA-1"),
          generateCryptoHash(fileBuffer, "SHA-256"),
          generateCryptoHash(fileBuffer, "SHA-384"),
          generateCryptoHash(fileBuffer, "SHA-512"),
        ]);
        results.push({ algorithm: "SHA-1", hash: sha1 });
        results.push({ algorithm: "SHA-256", hash: sha256 });
        results.push({ algorithm: "SHA-384", hash: sha384 });
        results.push({ algorithm: "SHA-512", hash: sha512 });
      }
    } catch (e) {
      console.error(e);
      // Optionally set an error state to display to the user
    } finally {
      setHashes(results);
      setIsLoading(false);
    }
  };

  const isGenerateDisabled = (inputMode === 'text' && !text) || (inputMode === 'file' && !file) || isLoading;

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Kriptografik Hash Oluştur</CardTitle>
          <CardDescription>
            Aynı anda birden çok türde kriptografik hash oluşturmak için metin girin veya bir dosya yükleyin.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            defaultValue="text"
            onValueChange={(value: InputMode) => setInputMode(value)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="text" id="text-mode" />
              <Label htmlFor="text-mode">Metin Girdisi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="file" id="file-mode" />
              <Label htmlFor="file-mode">Dosya Yükleme</Label>
            </div>
          </RadioGroup>

          {inputMode === "text" ? (
            <Textarea
              placeholder="Hash'ini oluşturmak için metni buraya girin..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
              className="font-code"
            />
          ) : (
            <DndFileUpload id="file-generator" onFileChange={setFile} />
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerate} disabled={isGenerateDisabled} size="lg">
            {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
            {isLoading ? "Oluşturuluyor..." : "Hash'leri Oluştur"}
          </Button>
        </CardFooter>
      </Card>
      
      <HashResults hashes={hashes} isLoading={isLoading} />
    </div>
  );
}
