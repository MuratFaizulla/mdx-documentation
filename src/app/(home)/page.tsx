import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r p-12 text-center">
      <h1 className="mb-6 text-4xl font-extrabold">
        Проектируй и создавай быстрее, чем когда-либо 🚀
      </h1>
      <p className="mb-8 text-lg">
        Твой универсальный центр для быстрого и удобного доступа к документации и ресурсам.
      </p>
      <Link href="/projects">
        <Button>Начать</Button>
      </Link>
    </main>
  );
}