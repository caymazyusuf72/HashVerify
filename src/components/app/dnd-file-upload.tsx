"use client";

import { cn } from "@/lib/utils";
import { FileText, UploadCloud, X } from "lucide-react";
import React, { useState, useRef, type ChangeEvent, type DragEvent } from "react";
import { Button } from "../ui/button";

interface DndFileUploadProps {
  onFileChange: (file: File | null) => void;
  className?: string;
  id: string;
}

export function DndFileUpload({ onFileChange, className, id }: DndFileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    onFileChange(selectedFile);
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    handleFileChange(selectedFile);
  };
  
  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files?.[0] ?? null;
    handleFileChange(droppedFile);
  };

  const clearFile = () => {
    handleFileChange(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div className={cn("relative", className)}>
      <input
        type="file"
        id={id}
        ref={fileInputRef}
        onChange={onFileInputChange}
        className="hidden"
      />
      {file ? (
        <div className="flex items-center justify-between p-4 border rounded-lg bg-secondary">
            <div className="flex items-center gap-3 overflow-hidden">
                <FileText className="w-8 h-8 flex-shrink-0 text-primary"/>
                <div className="overflow-hidden">
                    <p className="font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                </div>
            </div>
            <Button variant="ghost" size="icon" onClick={clearFile} aria-label="Dosyayı kaldır">
                <X className="w-5 h-5"/>
            </Button>
        </div>
      ) : (
        <div
          onClick={openFilePicker}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
            isDragOver ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
          )}
        >
          <UploadCloud className="w-12 h-12 text-muted-foreground" />
          <p className="mt-4 text-center text-muted-foreground">
            <span className="font-semibold text-primary">Yüklemek için tıkla</span> veya sürükleyip bırak
          </p>
          <p className="text-xs text-muted-foreground mt-1">Herhangi bir dosya türü</p>
        </div>
      )}
    </div>
  );
}
