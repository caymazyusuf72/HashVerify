"use client";

import bcrypt from 'bcryptjs';

// Helper to convert ArrayBuffer to hex string
function bufferToHex(buffer: ArrayBuffer): string {
  return [...new Uint8Array(buffer)]
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Generates a cryptographic hash for the given data using the Web Crypto API.
 * @param data The data to hash, as an ArrayBuffer.
 * @param algorithm The hashing algorithm to use.
 * @returns A promise that resolves to the hex-encoded hash string.
 */
export async function generateCryptoHash(
  data: ArrayBuffer,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512'
): Promise<string> {
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  return bufferToHex(hashBuffer);
}

/**
 * Generates a bcrypt hash for the given string data.
 * @param data The string to hash.
 * @returns A promise that resolves to the bcrypt hash.
 */
export async function generateBcryptHash(data: string): Promise<string> {
    // bcrypt is CPU intensive. 10 is a good default salt round.
    // This is an async operation to avoid blocking the main thread.
    return new Promise((resolve, reject) => {
        bcrypt.hash(data, 10, (err, hash) => {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}

/**
 * Reads a File object into an ArrayBuffer.
 * @param file The file to read.
 * @returns A promise that resolves to the file content as an ArrayBuffer.
 */
export async function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

/**
 * Reads a File object into a text string.
 * @param file The file to read.
 * @returns A promise that resolves to the file content as a string.
 */
export async function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
