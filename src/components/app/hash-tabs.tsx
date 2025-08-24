"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HashGenerator } from "@/components/app/hash-generator";
import { HashComparer } from "@/components/app/hash-comparer";
import { ScanLine, GitCompareArrows } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HashTabs() {
  const [activeTab, setActiveTab] = useState("generator");

  const tabContentVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <Tabs 
      defaultValue="generator" 
      className="w-full max-w-5xl mx-auto"
      onValueChange={setActiveTab}
      value={activeTab}
    >
      <TabsList className="grid w-full grid-cols-2 h-16 rounded-xl p-2 bg-secondary">
        <TabsTrigger value="generator" className="h-full text-base gap-2 rounded-lg text-muted-foreground data-[state=active]:text-primary-foreground data-[state=active]:bg-primary">
          <ScanLine className="w-5 h-5" />
          Hash Oluştur
        </TabsTrigger>
        <TabsTrigger value="comparer" className="h-full text-base gap-2 rounded-lg text-muted-foreground data-[state=active]:text-primary-foreground data-[state=active]:bg-primary">
          <GitCompareArrows className="w-5 h-5" />
          Dosyaları Karşılaştır
        </TabsTrigger>
      </TabsList>
      <div className="mt-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
          >
            {activeTab === 'generator' && (
              <TabsContent value="generator" forceMount>
                <HashGenerator />
              </TabsContent>
            )}
            {activeTab === 'comparer' && (
              <TabsContent value="comparer" forceMount>
                <HashComparer />
              </TabsContent>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Tabs>
  );
}
