import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { FAQITEMS } from '@/constants';
import FAQ from '@/components/FAQ';
import { accordionData } from '@/constants/accordionData';
import Accordion from '@/components/Accordion';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-6 md:p-12 text-center space-y-12">
      
      {/* Hero Section */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Проектируй и создавай быстрее, чем когда-либо 🚀
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Твой универсальный центр для быстрого и удобного доступа к документации и ресурсам.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button size="lg" className="px-8">
              Начать
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto space-y-12 text-left">
        {FAQITEMS.map((item) => (
          <div key={item.category} className="space-y-6">
            <h2 className="font-bold text-2xl md:text-4xl text-center">
              {item.category}
            </h2>

            <div className="space-y-3">
              {item.items.map((faq) => (
                <FAQ key={faq.title} title={faq.title} content={faq.content} />
              ))}
            </div>
          </div>
        ))}
      </section>



      <main className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Часто задаваемые вопросы
      </h1>

      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} answer={item.answer} />
      ))}
    </main>



    </main>
  );
}
