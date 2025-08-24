"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';

export type HashResult = {
  algorithm: string;
  hash: string;
  note?: string;
};

interface HashResultsProps {
  hashes: HashResult[];
  isLoading: boolean;
}

export function HashResults({ hashes, isLoading }: HashResultsProps) {
  const { toast } = useToast();
  const [copiedAlgorithm, setCopiedAlgorithm] = useState<string | null>(null);

  const copyToClipboard = (text: string, algorithm: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Panoya kopyalandı!",
      description: `${algorithm} hash değeri kopyalandı.`,
    });
    setCopiedAlgorithm(algorithm);
    setTimeout(() => setCopiedAlgorithm(null), 2000);
  };

  const renderSkeletons = () => (
    Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div className="flex-grow space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="h-10 w-10 ml-4 rounded-full" />
        </div>
    ))
  );

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Oluşturulan Hash'ler</CardTitle>
        <CardDescription>
          Aşağıda girdiniz için oluşturulan hash'ler bulunmaktadır. Bir hash'i kopyalamak için kopyala simgesine tıklayın.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading && renderSkeletons()}
          
          <AnimatePresence>
            {!isLoading && hashes.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 text-muted-foreground"
              >
                <p>Sonuçlarınız burada görünecektir.</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {!isLoading && hashes.map(({ algorithm, hash, note }) => (
              <motion.div key={algorithm} variants={itemVariants} className="flex items-center justify-between p-4 bg-secondary rounded-lg gap-4">
                <div className="flex-grow overflow-hidden">
                  <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold uppercase">{algorithm}</h4>
                      {note && (
                          <TooltipProvider>
                              <Tooltip>
                                  <TooltipTrigger asChild>
                                      <span className="text-xs text-muted-foreground bg-background px-1.5 py-0.5 rounded-sm border cursor-help flex items-center gap-1">
                                          <Info className="w-3 h-3" />
                                          {note}
                                      </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                      <p>bcrypt, şifre hash'lemek için tasarlanmıştır ve kasıtlı olarak yavaştır. Büyük dosyalar için uygun değildir.</p>
                                  </TooltipContent>
                              </Tooltip>
                          </TooltipProvider>
                      )}
                  </div>
                  <p className="font-code text-sm break-all text-muted-foreground mt-1">{hash}</p>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(hash, algorithm)}
                        aria-label={`${algorithm} hash'ini kopyala`}
                      >
                        {copiedAlgorithm === algorithm ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Kopyala</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
